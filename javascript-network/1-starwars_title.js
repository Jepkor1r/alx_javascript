#!/usr/bin/node

const request = require('request');

const id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, function(error, response, body) {
    const object = JSON.parse(body);
    console.log(object.title);
});