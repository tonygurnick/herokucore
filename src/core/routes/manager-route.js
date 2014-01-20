

	"use strict";


	module.exports=function( router, controller, view  ){
		router.get("/admin/users", controller);
		router.get("/admin/users", view);

	};