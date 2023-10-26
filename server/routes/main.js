//Routes are defined here

const express = require("express");
const router = express.Router();

//Routes
router.get("", (req, res, next) => {
  //res.send("Hello");
  const locals = {
    title: "Node Js Blog",
    description: "A Blog made by the mean stack",
  };
  res.render("index", { locals }); // Using the curly brack more objects can be added to be rendered
});

router.get("/about", (req, res, next) => {
  //res.send("Hello");
  res.render("about");
});

module.exports = router;
