// create_tables.js
const fs = require('fs');
const path = require('path');
const connection = require('./db');

const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf-8');

connection.query(schema, (err, results) => {
  if (err) {
    console.error('Error executing schema:', err.stack);
    return;
  }
  console.log('Schema created successfully.');
  connection.end();
});
