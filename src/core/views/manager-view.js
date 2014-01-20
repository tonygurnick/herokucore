
	"use strict";

	require("colors");

	var user = require(process.config.coremodels+"user");


	module.exports = function (req, res) {
        if ( req.session.passport.admin ) {
            user.find({},function( err, users ){
                res.render('manager', { users:users});
            });
        } else {
               res.redirect("/404");
          }

	};
