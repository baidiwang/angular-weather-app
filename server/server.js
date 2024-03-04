const express = require("express");
const { connectMongoDB } = require("./database");
const cors = require("cors"); //use the cors middleware to set up the necessary headers that tell the browser it's safe to allow a web page from one origin (our Angular app) to access resources at another origin (our Node.js server).
const app = express();
const favorite = require("./routes/favorite");
const weather = require("./routes/weather");

connectMongoDB();

app.use(cors());
app.use(express.json());

app.use("/favorite", favorite);
app.use("/weather", weather);

app.listen(8080, () => {
  console.log(`Server start http://localhost:8080`);
});
