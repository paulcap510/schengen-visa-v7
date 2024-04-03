const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const port = process.env.PORT;
// const port = process.env.PORT || 3000;
const path = require('path');

app.use(helmet());
app.use(cors());

const safetyData = require('./safety_data.json');
const countryData = require('./country_data_updated.json');

app.get('/api/countrydata', (req, res) => {
  res.json(countryData);
});

app.get('/api/safetydata', (req, res) => {
  res.json(safetyData);
});

app.all('*', (req, res) => {
  res.status(404).send('Endpoint not found.');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
