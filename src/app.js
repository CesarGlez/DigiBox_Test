require('dotenv').config(); //settings for enviroment variables

const express = require('express') //Dependecie to Node
const app = express();

app.use(express.json());
app.use('/customer', require('./routes/routes'))


app.listen(process.env.PORT || 3000, function () { //Route to server. Usin process.env.PORT in case exist a port
   console.log("Server on port 3000")
});

module.exports = app;
