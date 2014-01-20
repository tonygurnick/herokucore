"use strict";

	require("colors");

	module.exports=function(req, res, next) {

		console.log("CHKAUTH:".blue);

		if (req.isAuthenticated()) {
			console.log("AUTHORISED".green);
			return next();
		}

		console.log("UNAUTHORISED".red);
		res.redirect("/login");
	};