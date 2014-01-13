
"use strict";

require("colors");

var config = process.config =  require("./config");

require(process.config.coreservices + "server/mongoose-connect");


var router = require( config.coreservices + "server/router.js");
var fs=require("fs"),
	exist = fs.existsSync;



	require(process.config.app +"init")( router );

	var approutelist = [];
	// START UP APP
	fs.readdir( config.routes, function(err, list) {

		for ( x=0;x<list.length;x++){
			if( list[x].indexOf("-route") !== -1){
				approutelist.push( list[x].split("-")[0] );
			}
		}


		for ( x=0;x<approutelist.length;x++) {

			if ( exist( config.controllers+approutelist[x]+"-controller.js") ){
				ctrl = require(config.controllers+approutelist[x]+"-controller");
			} else {
				ctrl = function(req,res,next){next();};
			}

			if ( exist( config.views+approutelist[x]+"-view.js") ) {
				view = require(config.views+approutelist[x]+"-view");
			} else {
				view = function(req,res,next){next();};
			}

			require( config.routes+approutelist[x]+"-route")( router, ctrl, view );
		}
	});

	// START UP CORE FIXTURES
	fs.readdir( config.fixtures, function(err, list) {
		for ( x=0;x<list.length;x++){
			require(config.fixtures+list[x])( router );
		}
	});

var routelist = [], view, ctrl,x;


// START UP CORE
fs.readdir( config.coreroutes, function(err, list) {
	for ( x=0;x<list.length;x++){
		if( list[x].indexOf("-route") !== -1){
			routelist.push( list[x].split("-")[0] );
		}

	}


	for ( x=0;x<routelist.length;x++) {

		if ( exist( config.corecontrollers+routelist[x]+"-controller.js") ){
			ctrl = require(config.corecontrollers+routelist[x]+"-controller");
		} else {
			ctrl = function(req,res,next){next();};
		}

		if ( exist( config.coreviews+routelist[x]+"-view.js") ) {
			view = require(config.coreviews+routelist[x]+"-view");
		} else {
			view = function(req,res,next){next();};
		}

		require( config.coreroutes+routelist[x]+"-route")( router, ctrl, view );
	}
});


	// START UP CORE FIXTURES
	fs.readdir( config.corefixtures, function(err, list) {
		for ( x=0;x<list.length;x++){
			require(config.corefixtures+list[x])( router );
		}
	});