var express = require("express");
var router = express.Router();

/* GET endpoints */
router.get("/", function (req, res, next) {
  res.render("../../views/home", {
    title: "my website",
    page: "home",
    vidsrc: "https://www.youtube.com/embed/FqRC1zCUI9w?si=SJN1OnzQ6vPL3Zq_",
    ismp4: false,
  });
});

module.exports = router;
