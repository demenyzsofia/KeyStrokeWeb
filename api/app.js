const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());

//make images folder public
const path = require('path')
app.use('/public/images', express.static(path.join(__dirname, 'images')))

app.use('/api/images', routes)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});