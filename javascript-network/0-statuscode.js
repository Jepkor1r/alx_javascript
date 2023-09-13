#!/usr/bin/node

const request = require('request');

const url = "https://swapi.dev/api/";

request.get(url, {encoding: 'utf-8'})
  .on('response', response=> {
    console.log('code:', response.code);
  })