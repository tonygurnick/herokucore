
    "use strict";

    require("colors");
	var config = process.config;
    var User  = require(config.coremodels+"/user");

	module.exports = function(req,res){

	    if ( req.body.password.length && req.body.password === req.body.confirm ) {
			User.register(new User({ username : req.body.username }), req.body.password, function(err, User) {

				req.session.messages = { type:"info",text:"username "+req.body.username+" registered."};

				if (err) {
					req.session.messages = { type:"error",text:"user not registered."};
				}

				res.redirect("/");
			});
		} else {
			console.log("PASSWORDS DO NOT MATCH".red);
			res.render("register",{
				messages: { type:"error",text:"passwords do not match."},
				username: req.body && req.body.username || "",
				password: req.body && req.body.password || ""
			});
		}
	};