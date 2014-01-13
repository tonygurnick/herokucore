
"use strict";

var colors = require("colors"),
	jade = require('jade').__express;

var config = process.config;
/* Dependencies */
var express = require('express'),

	UserModel  = require(config.coremodels+"user"),
	passport = require('passport'),
/* Application modules */
	app = express();


app.engine('jade', jade );
app.set('views',config.coretemplates);
app.set('view engine', 'jade');
app.use(express.static(config.static));
app.use(express.directory('files'));

app.use(express.logger());
app.use(express.cookieParser());
app.use(express.bodyParser({
	keepExtensions: true,
	uploadDir: "/tmp"
}));

app.use(express.methodOverride());
app.use(express.session({ secret: 'Well I looked in my moms closet and saw what I was getting for Christmas, an ultravibe pleasure 2000.' }));
app.use( passport.initialize());
app.use( passport.session());


app.use(function(req, res, next) {
	if (!req.session.passport.user) {
	req.session.passport.user = "anonymous";
	req.session.passport.uid = null;
	}
	res.locals.messages = req.session.messages;
	res.locals.request = req;
	res.locals.user={
		username:req.session.passport.user,
		uid:req.session.passport.user
	};
	res.locals.clear = function(){
		req.session.messages=undefined;
	};
	next();
});

//
//var renderProxy = express.response.render;
//
//express.response.render = function() {
//
//	console.log("RENDER OVERRIDE".blue);
//
//
//
//	try {
//		console.log("TRYING: ",config.apptemplates);
//		app.set('views', config.apptemplates);
//		return renderProxy.apply(this, arguments);
//	}
//	catch (e) {
//		console.log("TRYING: ",config.templates);
//		app.set('views',config.templates);
//		return renderProxy.apply(this, arguments);
//	} finally{
//
//	}
//
//};

app.use(app.router);


passport.use( UserModel.createStrategy());
passport.serializeUser( UserModel.serializeUser());
passport.deserializeUser( UserModel.deserializeUser());


//
//require( process.config.app +'fixture')(app );
//
//require(process.config.app +"routing")(app );

module.exports=app;


