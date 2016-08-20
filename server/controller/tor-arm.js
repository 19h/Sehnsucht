'use strict';

/*
         ___ ____ __ __
        / _ `/ _ \\ \ /
        \_,_/ .__/_\_\
           /_/

        Copyright (c) 2015 by Kenan Sulayman. All Rights Reserved.
*/

exports.name = 'tor-arm';
exports.paths = [
	'/tarm'
];

let app = require('../app');

Promise.coroutine(function* () {
	// wait for init
	yield app;

	let d = require('domain').create();

	d.on('error', (e) => {
		// make sure this won't run on a non-tor node
		console.log('Connection to at least one exit node failed, ignoring.');
	});

	d.run(() => {
		let net = require('net');

		/* apx1 */

		let r1client;

		let _r1_setup = () => {
			r1client = net.connect({
				host: 'r1.apx.pub',
				port: 0xFACE
			}, () => {
				r1client.on('data', (payload) => {
					try {
						app.io.emit('tbw', JSON.parse(payload.toString()));
					} catch(e) {
						//
					}
				});

				let _next = () => setTimeout(_r1_setup, 500);

				r1client.on('error', _next);
				r1client.on('close', _next);
			});
		};

		_r1_setup();

		/* apx2 */

		let r2client;

		let _r2_setup = () => {
			r2client = net.connect({
				host: 'r2.apx.pub',
				port: 0xFACE
			}, () => {
				r2client.on('data', (payload) => {
					try {
						app.io.emit('tbw', JSON.parse(payload.toString()));
					} catch(e) {
						//
					}
				});

				let _next = () => setTimeout(_r2_setup, 500);

				r2client.on('error', _next);
				r2client.on('close', _next);
			});
		};

		_r2_setup();

		/* apx3 */

		let r3client;

		let _r3_setup = () => {
			r3client = net.connect({
				host: 'r3.apx.pub',
				port: 0xFACE
			}, () => {
				r3client.on('data', (payload) => {
					try {
						app.io.emit('tbw', JSON.parse(payload.toString()));
					} catch(e) {
						//
					}
				});

				let _next = () => setTimeout(_r3_setup, 500);

				r3client.on('error', _next);
				r3client.on('close', _next);
			});
		};

		_r3_setup();
	});

})();
