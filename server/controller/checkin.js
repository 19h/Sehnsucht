'use strict';

/*
         ___ ____ __ __
        / _ `/ _ \\ \ /
        \_,_/ .__/_\_\
           /_/

        Copyright (c) 2015 by Kenan Sulayman. All Rights Reserved.
*/

exports.name = 'checkin';
exports.paths = [
	'/checkin'
];

let Promise = require('bluebird');
let async = Promise.coroutine;

let db = require('../lib/db').init('checkin');

Object.defineProperty(Date.prototype, 'toRelativeTime', {
	enumerable: false,
	value: (function () {
		var c = {
			millisecond: 1,
			second: 1E3,
			minute: 60,
			hour: 60,
			day: 24,
			month: 30,
			year: 12
		}, g = c.millisecond * c.second * c.minute * c.hour * c.day,
			h = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return function (a) {
			let e;

			a || (a = 0);

			'string' === typeof a && (a = parseInt(a, 10));

			'number' === typeof a ? (isNaN(a) && (a = 0), e = {
				nowThreshold: a
			}) : e = a;

			a = e.now || new Date;

			let b = a - this,
				f = 0 >= b;

			b = Math.abs(b);

			if (b <= e.nowThreshold) return f ? 'Right now' : 'Just now';

			if (e.smartDays && b <= 6 * g) {
				let d =
					this.getDay(),
					b = d - a.getDay();
				return (0 === b ? 'Today' : -1 === b ? 'Yesterday' : 1 === b && this > a ? 'Tomorrow' : h[d]) + ' ' + 'at' + ' ' + this.toLocaleTimeString();
			}

			a = null;

			for (let d in c) {
				if (b < c[d]) break;
				a = d;
				b /= c[d];
			}
			b = Math.floor(b);
			1 !== b && (a += 's');
			return [b, a, f ? 'from now' : 'ago'].join(' ')
		};
	})()
});

exports.handler = async(function* (request, response, uri, legacyuri) {
	var strl = legacyuri.substr(uri.length + 1).split('/');

	if (strl.length >= 2) {
		strl = [ strl.shift(), strl.join('/') ];
	}

	response.writeHead(200, {
		'Access-Control-Allow-Origin': '*',
		'rCheckin': '1'
	});

	if ( strl.length >= 2 ) {
		if ( strl[1] === 'relative' ) {
			try {
				let data = yield db.get(strl[0]);
				let date = (new Date(parseInt(data, 10))).toRelativeTime();

				return response.end(date);
			} catch (e) {
				return response.end('Not found. 1');
			}
		} else {
			try {
				let data = yield db.get('\xFF' + strl[0]);

				if ( data === strl[1] ) {
					yield db.put(strl[0], Date.now());

					response.end('Ok.');
				} else {
					return response.end('Forbidden.');
				}
			} catch(e) {
				yield db.put(strl[0], Date.now());
				yield db.put('\xFF' + strl[0], strl[1]);

				response.end('Created.');
			}
		}
	} else {
		try {
			let data = yield db.get(strl[0]);

			return response.end(data);
		} catch(e) {
			return response.end('Not found. 2');
		}
	}
});
