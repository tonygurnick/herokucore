
	"use strict";

	require("colors");

	module.exports = function( req, res ) {
			req.session.messages = { type:"info",text:"user " +req.session.passport.user+ " logged out."};
			req.logout();
			res.redirect('/');
	};