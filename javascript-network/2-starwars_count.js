#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const character_id = 18;
const character_url = `https://swapi-api.alx-tools.com/api/people/${character_id}/`;


request.get(url, { encoding: 'UTF-8' }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const films = JSON.parse(body).results;
  const count = films.filter((film) =>
  film.characters.some((character) => character === character_url)
).length;

  console.log(count);
});
