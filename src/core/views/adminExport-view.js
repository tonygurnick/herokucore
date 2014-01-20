"use strict";

var user = require(process.config.coremodels+"user");

	module.exports = function(req,res){

        if ( req.session.passport.admin ) {

            user.find({}, function(err,users){

                res.json( users );

            });
        } else {
            res.redirect("/404");

        }


	};
