#!/bin/bash

echo cleaning local db
echo ----------------------
echo
echo

pkill -9 mongod -l
rm -R ./test/db/local
mkdir ./test/db/local
rm -R ./test/db/remote
mkdir ./test/db/remote