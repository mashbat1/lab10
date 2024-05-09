
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors()); // Enable CORS for all routes

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sanane11.',
  database: 'lab9'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM students', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ' + error.stack);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json(results);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port1 ${PORT}`);
});
