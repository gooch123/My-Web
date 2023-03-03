var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "home" });
});

router.get("/a", function (req, res, next) {
  res.render("index", { title: "page 1" });
});

module.exports = router;
