#!/usr/bin/node
    require("colors");
	var yaml = require('yaml-js');
	var fs = require("fs");
	var optimist = require('optimist');
	var argv = optimist.usage('herokucore\nUsage: $0')
	.alias('s', 'status')
	.default()
	.describe('s', 'current status')
	.argv;

	if ( argv.status ) {
		console.log("status:");
		process.exit(1);

	} else if ( argv._[0] === "start" ) {

//		var exec = require('child_process').exec;
//		var ls=exec( process.cwd() + '/manage/scripts/start.sh');

		var spawn = require('child_process').spawn,
			ls    = spawn( process.cwd() + '/manage/scripts/start.sh');

		ls.stdin.on('data', function (data) {
			console.log( ('' + data ).green );
		});
		ls.stdout.on('data', function (data) {
			console.log( ('' + data ).green );
		});
		ls.stderr.on('data', function (data) {
			console.log( ('' + data).red);
		});

		ls.on('close', function (code) {
			console.log(('child process exited with code ' + code ).blue);
		});

	} else {
		console.log( "herokucore" );
		optimist.help();
		process.exit(1);
	}