#!/bin/bash

echo GETTING DB FROM HEROKU
echo ----------------------
echo
echo

mongodump -h ds047958.mongolab.com:47958 -d heroku_app16926111 -u tony -p txftt10t -o ./test/db/remote/
mongorestore  -v -h localhost --drop --db local ./test/db/remote/heroku_app16926111