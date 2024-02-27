const express = require('express')
const {connectMongoDB} = require("./database");
const cors = require('cors')
const app = express()
const favorite = require('./routes/favorite');
const weather = require('./routes/weather');

connectMongoDB();

app.use(cors());
app.use(express.json());

app.use('/favorite', favorite);
app.use('/weather', weather);

app.listen(8080, () => {
  console.log(`Server start http://localhost:8080`)
});
