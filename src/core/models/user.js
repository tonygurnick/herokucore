
	"use strict";

	require("colors");

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		passportLocalMongoose = require('passport-local-mongoose'),
		uniqueValidator = require('mongoose-unique-validator'),
		timestamps = require('mongoose-stamp');

	var users = new Schema({
		"full name": 			String,
		"email":				String
	});

	users.plugin(passportLocalMongoose);
	users.plugin(uniqueValidator, { mongoose: mongoose });

	users.plugin(timestamps);



	module.exports= mongoose.model('users', users);
