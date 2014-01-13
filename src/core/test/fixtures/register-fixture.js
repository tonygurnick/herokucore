"use strict";
var mongoose = require ("mongoose"),
	passport = require("passport");


var config = process.config,
	User  = require( config.coremodels+"user");

module.exports=function( router ){

	router.get('/fix/register', function ( req, res ) {

		User.register( new User({ username : req.query.username }), "password", function(err, User) {
			res.end("registered "+req.query.username);
		});

	});


};