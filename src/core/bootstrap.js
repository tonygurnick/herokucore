
"use strict";

require("colors");

var config = process.config = require(process.cwd()+"/config"),
	start = require( config.coreservices + "server/start.js"),
	router = require( config.coreservices + "server/router.js"),
	fs=require("fs"),
	exist = fs.existsSync,
	mongo = require(process.config.coreservices + "server/mongoose-connect");

    var createRouteList = function(list){
		var approutelist = [];
		for ( var x=0;x<list.length;x++){
			if( list[x].indexOf("-route") !== -1){
				approutelist.push( list[x].split("-")[0] );
			}
		}
		return approutelist;
    };
    var getController = function( file ){
    	file = file +"-controller.js";
		if ( exist( file) ){
			return require(file);
		} else {
			return function(req,res,next){next();};
		}
    };
	var getView = function( file ){
		file = file +"-view.js";
		if ( exist( file) ){
			return require(file);
		} else {
			return function(req,res,next){next();};
		}
	};
    var setupRoute = function( routePath, ctrlPath, viewPath ){
		var list = fs.readdirSync(routePath),
		approutelist =createRouteList(list);

		for ( var ctrl, view, x=0;x<approutelist.length;x++) {
			ctrl = getController(ctrlPath+approutelist[x]);
			view = getView(viewPath+approutelist[x]);
			require( routePath+approutelist[x]+"-route")( router, ctrl, view );
		}
    };
    var setupFixture = function( path ){
		var list = fs.readdirSync( path );
		for ( var x=0;x<list.length;x++){
			require( path+list[x])( router );
		}
    };
	var appinit=require(process.config.app +"bootstrap")( router );

    start();

	setupRoute(config.routes, config.controllers, config.views);
	setupRoute(config.coreroutes, config.corecontrollers, config.coreviews);
	setupFixture(config.fixtures);
	setupFixture(config.corefixtures);
