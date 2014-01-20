
	"use strict";

	var app = require("./router"),
	mongoose 			= require ("mongoose"),
	mongooseTypes 		= require("mongoose-types"),
	penv 				= process.env,
	uristring 			= penv.MONGOLAB_URI;

	console.log("CONNECTING TO MONGO".red);

	mongoose.connect( uristring, function ( err, res ) {
		if (err) {
			console.log ( ( "ERROR connecting to database: " + uristring + ". " + err + "").red );
		} else {
			console.log ( ("Succeeded connected to: " + uristring + "" ).blue );
		}
	});
	mongooseTypes.loadTypes(mongoose);

	app.listen(  penv.PORT, function(){
		console.log( ("localhost listening on port " + penv.PORT +"").blue);
		console.log( ("working directory:" + process.cwd() ).blue);
	});