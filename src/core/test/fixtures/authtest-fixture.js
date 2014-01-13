

    var config = process.config,
    	chkauth = require( config.coreservices + "authentication/chkauth.js");

	module.exports=function( router  ){
		router.get('/fix/authtest', chkauth, function (req, res) {
			res.end("you should not see this page.");
		});
	};