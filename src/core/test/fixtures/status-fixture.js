

"use strict";

	var mongoose = require("mongoose");

	module.exports=function( router  ){

		router.get("/fix/status", function( req, res ){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write("<style>body{color: #444}h1{color:red}h2{color:black}</style>");

			res.write("<h1>--- START OF STATUS REPORT ---</h1>");

			res.write("<br>");

			res.write("<h2>Current User</h2>");


			res.write("username: <span id='username'>" + req.session.passport.user +"</span>" );
			res.write("<br>");
			res.write("user id: <span id='uid'>" + req.session.passport.uid+"</span>" );
			res.write("<br>");
			res.write("<br>");
			res.write("<br>");
			res.write("<br>");

			var  collection,
			collections = Object.keys(  mongoose.connection.collections );

			res.write("<h2>Database Collections</h2>");

			res.write("<ol>");

			for ( var x= 0; x<collections.length;x++ ){
				res.write( "<li>"+collections[x]+"</li>");

			}
			res.write("</ol>");
			res.write("<br>");
			res.write("<br>");
			res.write("<br>");
			res.write("<br>");

			res.end("<h1>--- END OF STATUS REPORT ---</h1>");
			res.write("<br>");
		});

	};
