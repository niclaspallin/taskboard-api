var knex = require('knex')({client: 'mysql'});

var test = knex('task').where('id', 1).update({name: 'Test name'}).toString();
console.log(test);