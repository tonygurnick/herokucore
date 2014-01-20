
	"use strict";

	require("colors");

	var user = require(process.config.coremodels+"user");

	module.exports = function(req,res){

		user.findOne({username:req.body.username}, function( err, user ){

			if ( user ) {
				req.session.passport.uid=user._id;
				req.session.passport.admin=user.admin;

			}

			req.session.messages = { type:"info",text:"logged in as "+req.body.username+"."};
			res.redirect("/");
		});


	};