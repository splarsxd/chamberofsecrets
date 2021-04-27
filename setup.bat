@echo off
title database
color c
cd src

node database/setup.js
node database/seed.js