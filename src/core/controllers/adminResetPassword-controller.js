
    "use strict";

    require("colors");

    var user = require(process.config.coremodels+"user");

	module.exports = function(req,res){

        if ( req.session.passport.admin ) {

            user.findById( req.params.id, function( err, user ){

                if ( err ){
                    req.session.messages={type:"error",text:"error finding user"};
                    console.log(err);
                    res.redirect("/admin/users");

                }

                user.setPassword( req.body.password, function( err, user ){

                    if ( err ){
                        req.session.messages={type:"error",text:"error changing password"};
                        console.log(err);
                        res.redirect("/admin/users");
                    }

                    if (user) {
                        console.log("SETTING PASSWORD FOR USER ".red, user.username);
                        req.session.messages={type:"info",text:"password reset"};

                        user.save(function(){

                            res.redirect("/admin/users");
                        });
                    }


                });
            });
        } else {
            res.redirect("/404");
        }
	};
