require('dotenv').config();

const express = require('express')
// const { databaseService } = require('./database')

const app = express();

app.use(express.json());
app.use('/customer', require('./routes/routes'))

app.listen(3000, function () {
   console.log("Server on port 3000")
});

module.exports = app;