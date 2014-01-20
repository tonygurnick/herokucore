"use strict";


	module.exports=function( router, controller, view  ){
		router.post( "/register", controller );
		router.get(  "/register", view );

	};