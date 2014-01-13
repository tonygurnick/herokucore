
	"use strict";

    require("colors");
    var config = process.config,
		User  = require( config.coremodels+"user"),
		passport  = require("passport");

module.exports=function( router ){

	router.get('/fix/login', function ( req, res ) {

		console.log("FIXTURE LOGIN".red);

		if ( req.query.username ) {
			User.register( new User({ username : req.query.username }), "password", function(err, User) {
				req.body = {
				  username:req.query.username,
				  password:"password"
				};

				passport.authenticate('local')(req, res, function () {
					req.session.passport.uid=User._id;
					res.end("logged in as " + req.query.username);
				});


			});
		} else {
			res.end("login failed");
		}

	});


};