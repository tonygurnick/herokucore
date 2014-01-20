"use strict";
var mongoose = require ("mongoose"),
	passport = require("passport");


var config = process.config,
	User  = require( config.coremodels+"user");

module.exports=function( router ){


	router.get('/fix/register', function ( req, res ) {

		var user ={ username : req.query.username };
		if ( req.query.admin ) {
			user.admin=true;
		}

		User.register( new User(user), "password", function(err, User) {
			res.end("registered "+req.query.username);
		});

	});


};