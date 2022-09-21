const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:password@database-hw3.colk6q5tpkff.us-east-1.rds.amazonaws.com:5432/postgres'
const pool = new Pool({
  connectionString,
})


module.exports = pool;
