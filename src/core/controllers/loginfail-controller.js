

	"use strict";

	require("colors");


	module.exports = function(req,res,next){
		req.session.messages = { type:"error",text:"login failed."};
		next();

	};