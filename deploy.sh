#!/usr/bin/env bash

npm install pm2 -g
npm install
pm2 start ecosystem.config.js
