'use strict';

/*
         ___ ____ __ __
        / _ `/ _ \\ \ /
        \_,_/ .__/_\_\
           /_/

        Copyright (c) 2015 by Kenan Sulayman. All Rights Reserved.
*/

exports.name = 'moves';
exports.paths = [
	'/moves'
];

exports.hosts = [
	'moves.sly.mn'
];


let Promise = require('bluebird');
let async = Promise.coroutine;
let Moves = Promise.promisifyAll(require('moves'));

let db = require('../lib/db').init('moves');

let chain = {
	client_id: 'FAYp73sPldcdkye1iqfeeUJ2J3gZmm5S',
	client_secret: '6nlsqFLL385YzWp57Kldzt9nLfVA3kOkSWH501Lx56DibjPFOz4sUm9kW4oNXYLG',
	redirect_uri: 'https://sly.mn/moves'
};

exports.handler = async(function* (request, response, uri, legacyuri, passthru) {
	if (passthru) {
		if (request.url === '/')
			request.url += 'moves';
		else
			request.url = '/moves' + request.url;

		uri = '/moves';
		legacyuri = request.url;
	}

	let moves = new Moves(chain);

	let strl = legacyuri.substr(uri.length + 1).split('/');
	strl.length >= 2 && (strl = [ strl.shift(), '/' + strl.join('/') ]);

	if ( strl.length === 2 ) {
		try {
			let data = yield db.get(strl[0]);

			let user = JSON.parse(data);

			let resp = yield moves.getAsync(strl[1], user.access_token);

			return response.end(resp[1]);
		} catch(e) {
			return response.end('meh');
		}
	}

	let _handle = async(function* (data) {
		let body = null;

		try {
			let resToken = yield moves.tokenAsync(data.code);

			body = JSON.parse(resToken[1]);

			if ( !body.access_token ) return response.end('Failed :(');

			let access_token = body.access_token;

			let resProfile = yield moves.getAsync('/user/profile', access_token);

			try {
				body = JSON.parse(resProfile[1]);
			} catch (e) { return response.end('Malformed :('); }

			yield db.put(body.userId, JSON.stringify(body));

			response.end(
				'Your ID: ' + body.userId + '.\n\n' +
				'- Usage -\n\n' +
				'\t/moves/<ID>/<api-path>\n\n' +
				'- Examples -\n\n' +
				'\t- Summary of Dec 21, 2013: https://sly.mn/moves/' + body.userId + '/user/summary/daily/20131221\n' +
				'\t- Activites of Dec 21, 2013: https://sly.mn/moves/' + body.userId + '/user/activities/daily/20131221\n' +
				'\t- Places of Dec 21, 2013: https://sly.mn/moves/' + body.userId + '/user/places/daily/20131221\n' +
				'\t- Storyline (Activites & Places combined) of Dec 21, 2013: https://sly.mn/moves/' + b.userId + '/user/storyline/daily/20131221\n' +
				'\n\nCheckout for https://dev.moves-app.com/docs/api for more information.'
			);
		} catch(e) {
			return response.end('Malformed :(');
		}
	});

	let _default = function(request) {
		let authorize_url = null;

		if (request.headers['user-agent'] && ~request.headers['user-agent'].indexOf('iPhone')) {
			authorize_url = 'moves://app/authorize?client_id=' + chain.client_id + '&redirect_uri=' + chain.redirect_uri + '&scope=activity location';
		} else {
			authorize_url = moves.authorize({
				scope: ['activity', 'location']
			});
		}

		response.writeHead(302, {
			'Location': authorize_url
		});

		response.end();
	};

	if (url.parse(request.url).search) {
		let data = {}, query = url.parse(request.url).query;

		query.split('&').forEach(function (v) {
			data[v.split('=')[0]] = v.split('=')[1];
		});

		return data.code ? yield _handle(data) : _default(request, data);
	} else return _default(request);
});
