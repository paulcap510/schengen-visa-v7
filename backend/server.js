const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

const countryData = require('../frontend/src/country_data_updated.json');
const safetyData = require('../frontend/src/safety_data.json');

app.get('/api/countrydata', (req, res) => {
  res.json(countryData);
});

app.get('/api/safetydata', (req, res) => {
  res.json(safetyData);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});