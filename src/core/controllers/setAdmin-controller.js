
"use strict";

require("colors");

var user = require(process.config.coremodels+"user");

module.exports = function(req,res){

    if ( req.session.passport.admin ) {

        user.findOneAndUpdate( {_id:req.params.id},{admin:true} ,function( err, user ){

            if ( err ){
                req.session.messages={type:"error",text:"error finding user"};
                console.log(err);
                res.redirect("/admin/users");

            }


            if (user) {
                console.log("SETTING AS ADMIN ".red, user.username);
                req.session.messages={type:"info",text:"set user "+user.username+" as admin"};
                res.redirect("/admin/users");
            }



        });
    } else {
        res.redirect("/404");
    }
};
