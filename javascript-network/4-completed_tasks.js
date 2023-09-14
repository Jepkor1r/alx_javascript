#!/usr/bin/node

const request = require('request');
url = process.argv[2];

request(url, function (error, respose, body) {
  number_of_tasks = JSON.parse(body);
  completeTasks = {};

  for (let i = 0; i < number_of_tasks.length; i++) {
    id = number_of_tasks[i].id;
    if (number_of_tasks[i].completed) {
      if (completeTasks.hasOwnProperty(id)) {
        completeTasks[id] += 1;
      } else {
        completeTasks[id] = 1;
      }
    }
  }


  for (let key in completeTasks) {
    if (completeTasks.key == 0) {
      delete completeTasks.key;
    }
  }
  console.log(completeTasks);
});