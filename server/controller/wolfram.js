'use strict';

/*
         ___ ____ __ __
        / _ `/ _ \\ \ /
        \_,_/ .__/_\_\
           /_/

        Copyright (c) 2015 by Kenan Sulayman. All Rights Reserved.
*/

exports.name = 'wolfram';
exports.paths = [
	'/w*',
	'/w+',
	'/w'
];

var Client = require('node-wolfram');
var Wolfram = new Client('Y5H46L-T7KT2YKV6K');

var wfc = {
	resultNormalize (result) {
		if ( !result || !result.queryresult || !result.queryresult.pod ) {
			return [];
		}

		const _pods = pod =>
			pod.subpod.map(pod =>
				pod.plaintext.map(pt => {
					pt = pt.split('\n');

					const heap = {};
					let hasKey = null;

					pt.forEach((e, i) => {
						e = e.split(' | ');

						hasKey = e[1] || hasKey;

						if ( i + 1 === pt.length && hasKey && !e[1] ) {
							heap.note = e[0];

							return e[0];
						} else {
							heap[e[0]] = e[1];

							return e[1];
						}
					});

					if (hasKey) {
						return heap;
					} else {
						return pt;
					}
				})[0]
			);

		return result.queryresult.pod.map(pod => ({
			title: pod.$.title,
			pods: _pods(pod)
		}));
	},
	query (q, cb, raw) {
		cb = cb || (() => {});

		Wolfram.query(q, (err, result) => {
			if (err) {
				return cb(err, result);
			} else {
				if (raw) {
					return cb(err, result);
				} else {
					return cb(err, this.resultNormalize(result));
				}
			}
		});
	}
};

exports.handler = function(request, response, uri) {
	var query = decodeURIComponent(request.url.substr(uri.length + 1));

	return wfc.query(query, function (err, data) {
		if (err) {
			return response.end('Failed.');
		}

		try {
			response.end(JSON.stringify(data));
		} catch(e) {
			return response.end('Could not parse response.');
		}
	}, '/w*' === uri);
};
