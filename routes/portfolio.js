var express = require("express");
var router = express.Router();
var content = require("../server/data");

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
  res.render("portfolio", {
    title: "Portfolio",
    page: "portfolio",
    data: PortfolioData,
  });
});

router.get("/greenthermique", function (req, res, next) {
  res.render("page", {
    title: "Green Thermique",
    description:
      "My objective was to craft a logo for an emerging entrepreneur within the renewable energy sector. I wanted to convey a clear message of sustainability in a world powered by various natural sources. During my ideation process, I focused on creating one impactful image to catch people's attention in a busy world.",
    page: "greenthermique",
    hasLink: false,
    vidsrc: "https://www.youtube.com/embed/2ZHehrLd2Sg?si=fyUS0zYW0n2ehPdn",
    ismp4: false,
    articles: content.GreenthermiquePortfolioArticles,
  });
});

router.get("/caribfood", function (req, res, next) {
  res.render("page", {
    title: "CaribFood",
    description:
      "My aim for this project was to develop an engaging brand video for the Paw Patrol tv show, using bright colors, graphics and designed for the Paw Patrol brand to cater to a wide audience, During the process, I create a complete motion graphics package, including a logo animation, lower thirds, and transition bumpers. Each element was carefully designed to reflect the brand's identity and offer a great viewer experience.",
    page: "caribfood",
    vidsrc: "https://www.youtube.com/embed/1YwwnlAmkLU?si=xWWL8nwuwSzSuFtX",
    ismp4: false,
    hasLink: false,
    articles: content.CaribfoodPortfolioArticles,
  });
});

router.get("/pawpatrol", function (req, res, next) {
  res.render("page", {
    title: "Paw Patrol",
    description:
      "My aim for this project was to develop an engaging brand video for the Paw Patrol tv show, using bright colours, graphics and designed for the Paw Patrol brand to cater to a wide audience, During the process, I create a complete motion graphics package, including a logo animation, lower thirds, and transition bumpers. Each element was carefully designed to reflect the brand's identity and offer a great viewer experience.",
    page: "pawpatrol",
    vidsrc: "https://www.youtube.com/embed/lI-HcSv-3CY?si=WRGYk0_teEkf_4Eb",
    ismp4: false,
    articles: content.PawpatrolArticles,
    hasLink: false,
    creditSrc:
      "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    linkName: "Image by starline on Freepik",
  });
});

router.get("/helpo", function (req, res, next) {
  res.render("page", {
    title: "Helpo",
    description:
      "This project aims to develop a routine application that immerses children in interactive, educational adventures related to daily routines; but overall helps them self-regulate and understand the importance of routines.",
    page: "helpo",
    vidsrc: "https://www.youtube.com/embed/rqQfoLefWLQ?si=DbzzPMYjJHsZXPxA",
    ismp4: false,
    articles: content.HelpoArticles,
    hasLink: false,
    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

router.get("/julimay", function (req, res, next) {
  res.render("page", {
    title: "Julimay Grocery Shop",
    description:
      "My aim for this project was to develop an engaging brand video for the Paw Patrol tv show, using bright colours, graphics and designed for the Paw Patrol brand to cater to a wide audience, During the process, I create a complete motion graphics package, including a logo animation, lower thirds, and transition bumpers. Each element was carefully designed to reflect the brand's identity and offer a great viewer experience.",
    page: "julimay",
    vidsrc: "https://www.youtube.com/embed/E4rnCT-Kb7U?si=YvRReXoGUAjfwW-w",
    ismp4: false,
    articles: content.JulimayArticles,
    hasLink: false,
    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

router.get("/furniture", function (req, res, next) {
  res.render("page", {
    title: "Furniture App",
    description:
      "My goal for this project was to create 3d Furniture pieces in 3d stager. Once the furnitures were created and rendered, I exported them into Adobe Aero to create the Augmented Reality Animation allowing users to visualize and manipulate the furnitures in their own space. This concept is similar to other existing App offering you the similar in-person shopping experience.",
    page: "furniture",
    vidsrc: "https://www.youtube.com/embed/rqQfoLefWLQ?si=DbzzPMYjJHsZXPxA",
    ismp4: false,
    articles: content.HelpoArticles,
    hasLink: false,
    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

module.exports = router;
