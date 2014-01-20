


	"use strict";

	require("colors");

	var user = require(process.config.coremodels+"user");


module.exports = function( req, res, next ) {

    if ( req.session.passport.admin ) {
        if ( req.query.delete ) {

            req.session.messages = { type:"info",text:"user deleted"};


            user.remove( {_id:req.query.delete}, function( err,users){
                res.redirect('/admin/users');
            });
        } else {
            next();
        }
    } else {
         res.redirect("/404");
     }


};