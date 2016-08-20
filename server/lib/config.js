/*
	 __                            ___
	/\ \                     __  /'___\
	\ \ \         __     __ /\_\/\ \__/  __  __
	 \ \ \  __  /'__`\ /'_ `\/\ \ \ ,__\/\ \/\ \
	  \ \ \L\ \/\  __//\ \L\ \ \ \ \ \_/\ \ \_\ \
	   \ \____/\ \____\ \____ \ \_\ \_\  \/`____ \
	    \/___/  \/____/\/___L\ \/_/\/_/   `/___/> \
	                     /\____/             /\___/
	                     \_/__/              \/__/

	Copyright (c) 2013 by Legify UG. All Rights Reserved.

        チャレンジして失敗ことを恐れるよりも、何もしないことを恐れろ。
*/

var fs = require("fs");

exports.config = {
	port: parseInt(process.env.port || 80),
	securePort: parseInt(process.env.securePort || 443),
	host: process.env.host || "0.0.0.0"
}