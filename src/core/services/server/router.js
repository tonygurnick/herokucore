
"use strict";

var config = process.config,
	colors = require("colors"),
	jade = require('jade').__express,
	fs=require("fs"),
	exist = fs.existsSync;


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

	// Enforce an anonyous user if this session is not authenticated
	if (!req.session.passport.user) {
		req.session.passport.user = "anonymous";
		req.session.passport.uid = null;
		req.session.passport.admin = false;
	}
	// Messages are availible to the jade
	res.locals.messages = req.session.messages;

	// The user is available to jade
	res.locals.user={
		username:req.session.passport.user,
		uid:req.session.passport.uid,
		admin:req.session.passport.admin
	};


	// Special message clearing for jade
	res.locals.clear = function(){
		req.session.messages=undefined;
	};
	next();
});

var renderProxy = express.response.render;

express.response.render = function( template ) {
	 //TODO: parse template name to remove extension
	console.log("RENDER OVERRIDE ".blue, template);

	console.log("TRYING: ".green, config.templates + template+".jade" );
	if ( exist( config.templates + template+".jade" ) ){

		console.log("USING APP TEMPLATES".green);
		app.set('views', config.templates);

	} else {
		console.log("TRYING: ".green, config.coretemplates + template +".jade" );
		if ( exist( config.coretemplates + template +".jade") ){
			console.log("USING CORE TEMPLATES".green);
			app.set('views', config.coretemplates);
		} else {
			throw "template not found: ";
		}

	}

	return renderProxy.apply(this, arguments);
};
passport.use( UserModel.createStrategy());
passport.serializeUser( UserModel.serializeUser());
passport.deserializeUser( UserModel.deserializeUser());


module.exports=app;


