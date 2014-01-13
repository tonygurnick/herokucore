"use strict";
    var passport = require("passport");
	var config = process.config;
	var loginFailController = require( config.corecontrollers + "loginfail-controller");

	module.exports=function( router, controller, view  ){


		router.post( "/login", loginFailController, passport.authenticate('local', {failureRedirect: '/login'}), controller );
		router.get(  "/login", view );
	};