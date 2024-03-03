var express = require("express");
var router = express.Router();
var julimayArticles = require("../../server/julimay_articles");
var pawpatrolArticles = require("../../server/pawpatrol_articles");
var helpoArticles = require("../../server/helpo_articles");
var greenthermiqueArticles = require("../../server/greenthermique_articles");
var caribfoodArticles = require("../../server/caribfood_articles");
var furnitureArticles = require("../../server/furniture_articles");
/**
 * Portfolio page data
 */
const PortfolioData = [
  {
    link: "/portfolio/greenthermique",
    img: "/images/greenthermique/green_thermique.png",
    alt: "portfolio image 1",
    caption: "Tools: Adobe Illustrator, After Effect",
    title: "Green Thermique Logo design",
    text: "",
  },
  {
    link: "/portfolio/caribfood",
    img: "/images/caribfood/caribfood.png",
    alt: "portfolio image 2",
    caption: "Tools: Adobe XD, Photoshop, Illustrator, Premier Pro",
    title: "CaribFood design",
    text: "",
  },
  {
    link: "/portfolio/pawpatrol",
    img: "/images/pawpatrol/paw_patrol.png",
    alt: "portfolio image 3",
    caption: "Tools: Adobe photoshop, Illustrator,  Premier Pro",
    title: "Paw Patrol design",
    text: "",
  },
  {
    link: "/portfolio/helpo",
    img: "/images/helpo/helpo.png",
    alt: "portfolio image 4",
    caption: "Tools: Adobe photoshop, Illustrator,  Premier Pro",
    title: "Helpo design",
    text: "",
  },
  {
    link: "/portfolio/julimay",
    img: "/images/julimay/julimay.png",
    alt: "portfolio image 5",
    caption: "Tools: Adobe photoshop, Illustrator,  Premier Pro",
    title: "Julimay Grocery Store design",
    text: "",
  },
  {
    link: "/portfolio/furniture",
    img: "/images/furnitureapp/catgy_furn.png",
    alt: "portfolio image 6",
    caption: "Tools: Adobe photoshop, Illustrator,  Premier Pro",
    title: "Furniture App design",
    text: "",
  },
];

/* GET endpoints */
router.get("/", function (req, res, next) {
  res.render("../../views/portfolio", {
    title: "Portfolio",
    page: "portfolio",
    data: PortfolioData,
  });
});

router.get("/greenthermique", function (req, res, next) {
  res.render("../../views/page", {
    title: "Green Thermique",
    description: greenthermiqueArticles.Intro,
    page: "greenthermique",
    hasLink: false,
    vidsrc: "https://www.youtube.com/embed/iS1BQzv_Syk?si=1kfnv_Lq7Yuuqe09",
    ismp4: false,
    articles: greenthermiqueArticles.Content,
    tools: greenthermiqueArticles.Tools,
  });
});

router.get("/caribfood", function (req, res, next) {
  res.render("../../views/page", {
    title: "CaribFood",
    description: caribfoodArticles.Intro,
    page: "caribfood",
    vidsrc: "https://www.youtube.com/embed/1YwwnlAmkLU?si=xWWL8nwuwSzSuFtX",
    ismp4: false,
    hasLink: false,
    articles: caribfoodArticles.Content,
    tools: caribfoodArticles.Tools,
  });
});

router.get("/pawpatrol", function (req, res, next) {
  res.render("../../views/page", {
    title: "Paw Patrol",
    description: pawpatrolArticles.Intro,
    page: "pawpatrol",
    vidsrc: "https://www.youtube.com/embed/lI-HcSv-3CY?si=WRGYk0_teEkf_4Eb",
    ismp4: false,
    articles: pawpatrolArticles.Content,
    tools: pawpatrolArticles.Tools,
    hasLink: false,
    creditSrc:
      "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    linkName: "Image by starline on Freepik",
  });
});

router.get("/helpo", function (req, res, next) {
  res.render("../../views/page", {
    title: "Helpo",
    description: helpoArticles.Intro,
    page: "helpo",
    vidsrc: "https://www.youtube.com/embed/rqQfoLefWLQ?si=DbzzPMYjJHsZXPxA",
    ismp4: false,
    articles: helpoArticles.Content,
    tools: helpoArticles.Tools,
    hasLink: false,
    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

router.get("/julimay", function (req, res, next) {
  res.render("../../views/page", {
    title: "Julimay Grocery Shop",
    description: julimayArticles.Intro,
    page: "julimay",
    vidsrc: "https://www.youtube.com/embed/E4rnCT-Kb7U?si=YvRReXoGUAjfwW-w",
    ismp4: false,
    articles: julimayArticles.Content,
    tools: julimayArticles.Tools,
    hasLink: false,
    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

router.get("/furniture", function (req, res, next) {
  res.render("../../views/page", {
    title: "Furniture App",
    description: furnitureArticles.Intro,
    page: "furniture",
    vidsrc: "https://www.youtube.com/embed/rqQfoLefWLQ?si=DbzzPMYjJHsZXPxA",
    ismp4: false,
    articles: furnitureArticles.Content,
    tools: furnitureArticles.Tools,
    hasLink: false,

    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

module.exports = router;
