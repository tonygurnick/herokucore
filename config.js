

	"use strict";

	require("colors");


	console.log( ("LOADING CONFIG FROM WORKING DIRECTORY :" + process.cwd() ).red);

	module.exports={

		app:					process.cwd() + "/src/app/",
		templates:				process.cwd() + "/src/app/templates",
		routes:					process.cwd() + "/src/app/routes/",
		controllers:			process.cwd() + "/src/app/controllers/",
		views:					process.cwd() + "/src/app/views/",
		services:				process.cwd() + "/src/app/services/",
		models:					process.cwd() + "/src/app/model/",
		fixtures: 				process.cwd() + "/src/app/test/fixtures/",

		core:					process.cwd() + "/src/core/",
		"corecontrollers":		process.cwd() + "/src/core/controllers/",
		"coreviews":			process.cwd() + "/src/core/views/",
		"coreroutes":			process.cwd() + "/src/core/routes/",
		"coreservices":			process.cwd() + "/src/core/services/",
		"coremodels":			process.cwd() + "/src/core/models/",
		"coretemplates":		process.cwd() + "/src/core/template/",
		"corefixtures": 		process.cwd() + "/src/core/test/fixtures/",

		static:					process.cwd() + "/src/client/"



	};