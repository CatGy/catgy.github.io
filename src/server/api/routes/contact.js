import express from "express";
var router = express.Router();

const subtitle = "Feel free to contact me if you'ld like us to collaborate 😁";

/* GET endpoints */
router.get("/", function (req, res, next) {
  res.render("contact", {
    title: "Contact me",
    page: "contact",
    data: FormData,
    subtitle: subtitle,
    isform: false,
  });
});

export default router;
