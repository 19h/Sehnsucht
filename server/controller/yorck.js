'use strict';

/*
         ___ ____ __ __
        / _ `/ _ \\ \ /
        \_,_/ .__/_\_\
           /_/

        Copyright (c) 2015 by Kenan Sulayman. All Rights Reserved.
*/

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

exports.name = "yorck";

exports.paths = [
	"/yorck"
];

exports.hosts = [
	"yorck.sly.mn"
];

exports.handler = (request, response, a, b, passthru) => {
	const frequest = request;

	if (~frequest.url.indexOf('/yorck')) {
		frequest.url = frequest.url.slice(6);
	}

	return proxy.web(request, response, {
		target: 'http://127.0.0.1:9651'
	});
}
