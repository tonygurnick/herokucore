
	"use strict";

	require("colors");

	var config = process.config,
		UserModel  = require(config.coremodels+"user"),
		passport = require('passport'),
		app = require("../server/express");

	passport.use( UserModel.createStrategy());
	app.use( passport.initialize());
	app.use( passport.session());
	passport.serializeUser( UserModel.serializeUser());
	passport.deserializeUser( UserModel.deserializeUser());

	module.exports = passport;


