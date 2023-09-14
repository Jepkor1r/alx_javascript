#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, { encoding: 'UTF-8' }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const tasks = JSON.parse(body);
  const completeTasks = {};

  tasks.forEach((tasks) => {
    if (tasks.completed) {
      if (completeTasks[tasks.userId]) {
        completeTasks[tasks.userId]++;
      } else {
        completeTasks[tasks.userId] = 1;
      }
    }
  });

  console.log(completeTasks);
});