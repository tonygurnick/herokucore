"use strict";
	var mongoose 			= require ("mongoose");

	module.exports=function( router  ){

		router.get('/nuke', function (req, res) {


			console.log("NUKE DATABASE".red );

			var cc= 0, names=[], collection;

			for ( collection in mongoose.connection.collections ) {
				names.push(collection);
			}
			var collections = Object.keys(  mongoose.connection.collections );

			if (collections.length){
				for ( collection in mongoose.connection.collections ){

					mongoose.connection.collections[collection].drop( function(err) {

						cc++;
						if ( cc === names.length) {
							res.end("nuke db - done");
						}
					});
				}
			} else {
				console.log("DB ALREADY EMPTY".green);
				res.end("nuke db - done");
			}
		});
	};