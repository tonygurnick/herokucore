"use strict";
require("colors");
var user = require(process.config.coremodels+"user");

	module.exports = function(req,res){

        if ( req.session.passport.admin ) {

            user.findById( req.params.id, function(err,user){

                if ( err ){
                    req.session.messages={type:"error",text:"error changing password"};
                    console.log(err);
                    res.redirect("/admin/users");

                }

                res.render("resetPassword",user);
            });
        } else {
            res.redirect("/404");
        }
	};
