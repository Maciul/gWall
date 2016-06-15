var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environement];
var knex = require('knex')(config);

module.exports = knex;
