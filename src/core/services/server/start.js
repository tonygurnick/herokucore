
	var app = require("./router");

	module.exports=function(){
		app.use(app.router);

	};

