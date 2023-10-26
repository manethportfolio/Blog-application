// Get the necessary info from the .env file
require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 5005 || process.env.PORT; //If the project is to get published then it'll adapt to then port

app.use(express.static("public"));

//Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log("Listening at port number ${PORT}");
});
