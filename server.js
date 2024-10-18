const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to TimeGrid!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
fetch('http://localhost:3000/api/employees')
  .then(response => response.json())
  .then(data => console.log(data));
