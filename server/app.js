#!/usr/local/bin/node

'use strict';

/*
	 ___ ____ __ __
	/ _ `/ _ \\ \ /
	\_,_/ .__/_\_\
	   /_/

	Copyright (c) 2015 by Kenan Sulayman. All Rights Reserved.
*/

const fs = global.fs = require('fs');
const http = global.http = require('http');
const https = global.https = require('https');
const mime = global.mime = require('mime');
const path = global.path = require('path');
const stream = global.stream = require('stream');
const url = global.url = require('url');
const zlib = global.zlib = require('zlib');

const Promise = global.Promise = require('bluebird');
const socketio = global.socketio = require('socket.io');

const isProduction = global.isProduction = parseInt(process.env.production, 10);

if (!isProduction)
	console.log('Starting in development mode..');

// Constants
	const Absinthe = {
		version: 11
	};

// Configuration
	const config = global.config = require('./lib/config').config;

// Extensions
	let logic = global.logic = {};
	let controller = global.controller = {};

	const populatePlugins = () => {
		logic = {};
		controller = {};

		// Load logical modules
		require('fs').readdirSync(path.join(__dirname, 'logic')).forEach((file) => {
			const fbase = file.split('.');

			if (fbase[1] === 'js') {
				logic[fbase[0]] = require(path.join(__dirname, 'logic', file));

				console.log('DevMode: Found logic: ' + file + '. [' + logic[fbase[0]].name + ']');
			}
		});

		// Load router modules
		require('fs').readdirSync(path.join(__dirname, 'controller')).forEach((file) => {
			const fbase = file.split('.');

			if (fbase[1] === 'js') {
				controller[fbase[0]] = require(path.join(__dirname, 'controller', file));

				console.log('DevMode: Found controller: ' + file + '. [' + controller[fbase[0]].name + ']');
			}
		});
	};

class MemCache extends stream.Duplex {
	constructor () {
		super();

		this._buffers = [];
		this._dests = [];

		this.readable = true;
		this.writable = true;

		this._ended = false;
	}

	write (buf) {
		this._buffers.push(buf);
		this._dests.forEach((dest) => {
			dest.write(buf);
		});
	}

	pipe (dest, trap) {
		if (trap) return false;

		this._buffers.forEach((buf) => {
			dest.write(buf);
		});

		if (this._ended) {
			dest.end();
		} else {
			this._dests.push(dest);
		}

		return dest;
	}

	unpipe (dest) {
		dest = this._dests.indexOf(dest);

		if (dest === -1) return false;

		return this._dests.splice(dest, 1);
	}

	getLength () {
		return this._buffers.reduce((buf1, buf2) => {
			return buf1 + buf2.length;
		}, 0);
	}

	end () {
		this._dests.forEach((dest) => {
			dest.end();
		});

		this._ended = true;
		this._dests = [];
	}
}

const _processed_index = new Buffer(require('html-minifier').minify(fs.readFileSync('./static/index.html').toString() || '', {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    preventAttributesEscaping: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeOptionalTags: true,
    removeIgnored: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
}));

/*
    PRIMARY

	ctype &
		001 - Array [& ]
		010 - Object-Stat Hashmap
*/

let readDictionary = (start, ctype, callback) =>
	new Promise((resolve, reject) => {
		let stash = {};

		if (ctype instanceof Function) {
			callback = ctype;
			ctype = 1;
		}

		let readDir = (start, callback) => {
			fs.lstat(start, (err, stat) => {
				if (err) return callback(err);

				let found = { dirs: [], files: [] },
					total = 0, processed = 0;

				if (stat.isDirectory()) {
					fs.readdir(start, (err, files) => {
						total = files.length;

						if (!total)
							return callback(null, found, total);

						files.forEach((a) => {
							let abspath = path.join(start, a);

							fs.stat(abspath, (err, stat) => {
								if (stat.isDirectory()) {
									if (ctype & 1) {
									    found.dirs.push(abspath);
									}

									if (ctype & 2) {
									    stash[abspath] = stat;
									}

									readDir(abspath, (err, data) => {
										if ( ctype & 1 ) {
											found.dirs = found.dirs.concat(data.dirs);
											found.files = found.files.concat(data.files);
										}

										if (++processed == total) {
										    callback(null, found, stash);
										}
									});
								} else {
									if (ctype & 1) {
									    found.dirs.push(abspath);
									}

									if (ctype & 2) {
									    stash[abspath] = stat;
									}

									if (++processed == total) {
									    callback(null, found, stash);
									}
								}
							});
						});
					});
				} else {
					return false;
				}
			});
		};

		return readDir(start, (err, total, found) => {
			if (err) {
				return reject(err);
			}

			if ( !(ctype ^ 3) ) {
				return resolve(total, found);
			}

			if ( ctype & 1 ) {
				return resolve(total);
			}

			if ( ctype & 2 ) {
				return resolve(found);
			}
		});
	});

const {host, port} = config;

module.exports = Promise.coroutine(function* () {
	const _fm = yield readDictionary('./static', 2);

let _fs = {},
	_fs_cache = {},
	_fs_cache_deflate = {},
	_fs_cache_gzip = {};

	if (isProduction) {
		fs._createReadStream = fs.createReadStream;

		fs.createReadStream = (a, b) => {
			if (void 0 === b) {
			    b = {};
			}

			// whereas a is fd_ref && b is typeof object
			// __ if a, b do not statisfy (String a, Object b) forward to base implementation
			if ( typeof a === 'string' && typeof b == 'object') {
			    if ( _fs_cache[a] ) return _fs_cache[a];

			    _fs_cache[a] = new MemCache();

			    fs._createReadStream(a, b).pipe(_fs_cache[a]);

			    return _fs_cache[a];
			}

			return fs._createReadStream.apply(this, arguments);
		};
	} else {
		console.log('DevMode: omitting server-wide caching mechanisms.');
	}

	let err = path.join(__dirname, 'lib/error/404.html');

	let cancel = (response) => {
		return response.writeHead(404, {
			'Content-Type': 'text/html'
		}), fs.createReadStream(err).pipe(response);
	};

	let ucache = {};
	let sanitize = (uri) =>
		new Promise ((resolve) => {
			if (ucache[uri]) {
			    return resolve({
					uri: ucache[uri].uri,
					realPath: ucache[uri].realPath,
					forceDelegation: ucache[uri].forceDelegation
				});
			}

			let resolved = path.join(process.cwd(), '/static', uri);

			fs.stat(resolved, (err, stat) => {
				if (err) {
					return resolve({
						uri: uri,
						realPath: resolved,
						forceDelegation: false
					});
				}

				let transURI = uri;

				let isDirectory = stat.isDirectory(),
				forceDelegation = transURI.substr(-1) !== '/';

				if (isDirectory) {
				    if (forceDelegation) {
						transURI += '/';
				    } else {
						transURI += 'index.html';
				    }
				}

				ucache[uri] = {
					uri: transURI,
					realPath: path.join(process.cwd(), '/static', uri),
					forceDelegation: isDirectory && forceDelegation
				};

				return resolve({
					uri: ucache[uri].uri,
					realPath: ucache[uri].realPath,
					forceDelegation: ucache[uri].forceDelegation
				});
			});
		});

	/* jshint ignore:start */
	let __ = 0x0, _ = 0x0, ___ = ''; __ += 45, __ <<= 1, __ *= ((0x8D << 1) * 0x137) - 1, __ -= 0x2 >> 1;
	while(__ >> (_ * 8)) ___ += String.fromCharCode((__ >> (_++ * 8)) & 0xFF);
	/* jshint ignore:end */

	let _main = Promise.coroutine(function* (request, response) {
		/*
		    // HPKP

		    CRT *.sly.mn
		    PIN OInIlg81ln9N/ijIH7WIDTbCEkw535HGaey6Zp/nO1Y=

		    CRT AlphaSSL CA - SHA256 - G2
		    PIN amMeV6gb9QNx0Zf7FtJ19Wa/t2B7KpCF/1n2Js3UuSU=

		    CRT GlobalSign Root CA
		    PIN K87oWBWM9UZfyddvDfoxL+8lpNyoUB2ptGtn0fv6G2Q=
		*/
		response.setHeader('Public-Key-Pins', 'max-age=5184000');
		response.setHeader('pin-sha256', 'OInIlg81ln9N/ijIH7WIDTbCEkw535HGaey6Zp/nO1Y=');
		response.setHeader('pin-sha256', 'amMeV6gb9QNx0Zf7FtJ19Wa/t2B7KpCF/1n2Js3UuSU=');
		response.setHeader('pin-sha256', 'K87oWBWM9UZfyddvDfoxL+8lpNyoUB2ptGtn0fv6G2Q=');

		let sane = yield sanitize(url.parse(request.url).pathname);

		let uri             = sane.uri;
		let fn_             = sane.realPath;
		let forceDelegation = sane.forceDelegation;

		response._writeHead = response.writeHead;
		response.writeHead = function (errorCode, headers) {
			headers = headers || {};

			headers.libAbsinthe = 'r' + Absinthe.version;

			return response._writeHead.apply(this, [errorCode, headers]);
		};

		if( !response._hasBody )
			return response.end();

		if ( !uri || !fn_ ) {
			uri = request.url; forceDelegation = true;
		}

		if ( forceDelegation )
			return response.writeHead(307, {
				'Location': uri
			}), response.end();

		// SECURITY
			if ( ~uri.indexOf('\0') )
				return cancel(response);

			if ( fn_.indexOf(process.cwd()) )
				return cancel(response);

		// ROUTER
			for (let router in controller ) {
				let hosts = controller[router].hosts;

				if (!hosts || !~hosts.indexOf(request.headers.host))
					continue;

				return controller[router].handler(
					request,
					response,
					request.url,
					uri,
					true // passthru
				);
			}

			for (let router in controller) {
				for (let pathRoute in controller[router].paths) {
					let route = controller[router].paths[pathRoute];

					if (uri !== route) {
						// verify prefix
						if (uri.substr(0, route.length) !== route)
							continue;

						// make sure we're not working
						// with an actual file here
						// which has a name that
						// coincides with a route prefix
						if (uri.substr(route.length, 1) !== '/')
							continue;
					}

					return controller[router].handler(
						request,
						response,
						route,
						uri,
						false // passthru
					);
				}
			}

		if ( _fs[fn_] === void 0 ) {
			_fs[fn_] = fs.existsSync(fn_);
		}

		if ( !_fs[fn_] )
			return cancel(response);

		if (uri === '/index.html') {
			if (isProduction) {
					return response.writeHead(200, {
						'Content-type': 'text/html'
					}), response.end(_processed_index);
			} else {
				fn_ = path.join(fn_, uri);
			}
		}

		let s = fs.createReadStream(fn_);

		let etag = _fm['static' + uri] && _fm['static'+uri].mtime || '0',
		    ntag = +etag;

		if (isProduction) {
		    if ( request.headers['if-none-match'] === ntag )
			    return response.end(response.writeHead(304, {
				    'Date': etag.toString(),
				    'Etag': ntag,
				    'Cache-Control': 'max-age=86400, public',
				    'Content-type': 'image/jpeg',
				    'Keep-Alive': 'timeout=6, max=32',
				    'Connection': 'keep-alive'
			    }));
		}

		let aE = request.headers['accept-encoding'] || '',
			_resHead = {
			'Content-Type': mime.lookup(fn_),
			'Cache-control': 'max-age=604800',
			'Expire': new Date().toString(),
			'Etag': ntag
		};

		let pop;
		let isVideo = (pop = fn_.split('.').pop()) === 'webm' || pop === 'ogv' || pop === 'mp4';

		if (isProduction && !isVideo) {
		    if (~aE.indexOf('deflate')) {
			    _resHead['Content-Encoding'] = 'deflate';
			    response.writeHead(200, _resHead);

			    if ( _fs_cache_deflate[fn_] ) return _fs_cache_deflate[fn_].pipe(response);

			    _fs_cache_deflate[fn_] = new MemCache();
			    s.pipe(zlib.createDeflate()).pipe(_fs_cache_deflate[fn_]);
			    return _fs_cache_deflate[fn_].pipe(response);
		    }

		    if (~aE.indexOf('gzip')) {
			    _resHead['Content-Encoding'] = 'gzip';
			    response.writeHead(200, _resHead);

			    if ( _fs_cache_gzip[fn_] ) return _fs_cache_gzip[fn_].pipe(response);

			    _fs_cache_gzip[fn_] = new MemCache();
			    s.pipe(zlib.createGzip()).pipe(_fs_cache_gzip[fn_]);
			    return _fs_cache_gzip[fn_].pipe(response);
		    }
		}

		response.writeHead(200, _resHead);

		return s.pipe(response);
	});

	if (isProduction) {
		console.log('Starting in production mode');

		http.createServer((request, response) => {
			if ( ~['ip.sly.mn'].indexOf(request.headers.host) ) {
				let ip = request.connection.remoteAddress ||
					     request.socket.remoteAddress ||
				    request.connection.socket.remoteAddress;

				return response.writeHead(200, {
					'Content-type': 'text/plain'
				}), response.end(ip);
			}

			let uri = url.parse(request.url).pathname;

			for (let router in controller) {
				if (controller[router].hosts) {
					if (~controller[router].hosts.indexOf(request.headers.host)) {
						return controller[router].handler.apply(this, [
							request,
							response,
							request.url,
							uri,
							true // passthru
						]);
					}
				}
			}

			return _main(request, response);
		}).listen(port, host);
	} else {
		console.log('Starting in development mode.');

		module.exports.server = http.createServer(_main);
		module.exports.server.listen(port, host);
	}

	module.exports.io = socketio(module.exports.server, {
		path: '/io'
	});

	console.log('[' + process.pid + '] Ready: %s:%s', host, port);
})();

populatePlugins();
