#!/bin/bash

pkill -9 mongod -l

mongod --dbpath ./test/db/local &

foreman start