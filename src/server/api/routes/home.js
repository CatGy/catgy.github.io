import express from "express";
var router = express.Router();

/* GET endpoints */
router.get("/", function (req, res, next) {
  res.render("home", {
    title: "Catgy Designs",
    page: "home",
    vidsrc: "https://www.youtube.com/embed/FqRC1zCUI9w?si=SJN1OnzQ6vPL3Zq_",
    ismp4: false,
  });
});

export default router;
