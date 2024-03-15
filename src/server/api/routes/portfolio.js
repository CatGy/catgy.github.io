import express from "express";
var router = express.Router();
import julimayArticles from "../../julimay_articles.js";
import pawpatrolArticles from "../../pawpatrol_articles.js";
import helpoArticles from "../../helpo_articles.js";
import greenthermiqueArticles from "../../greenthermique_articles.js";
import caribfoodArticles from "../../caribfood_articles.js";
import furnitureArticles from "../../furniture_articles.js";
/**
 * Portfolio page data
 */
const PortfolioData = [
  {
    link: "/portfolio/greenthermique",
    img: "/images/greenthermique/green_thermique.png",
    alt: "portfolio image 1",
    caption: "Branding material, Animation",
    title: "Green Thermique",
    text: "",
  },
  {
    link: "/portfolio/caribfood",
    img: "/images/caribfood/caribfood.png",
    alt: "portfolio image 2",
    caption: "UI/UX, App prototype",
    title: "CaribFood Restaurant",
    text: "",
  },
  {
    link: "/portfolio/pawpatrol",
    img: "/images/pawpatrol/paw_patrol.png",
    alt: "portfolio image 3",
    caption: "Animation, Video production",
    title: "Paw Patrol",
    text: "",
  },
  {
    link: "/portfolio/helpo",
    img: "/images/helpo/helpo_poster.png",
    alt: "portfolio image 4",
    caption: "UI/UX, Video production, App prototype",
    title: "Helpo",
    text: "",
  },
  {
    link: "/portfolio/julimay",
    img: "/images/julimay/julimay.png",
    alt: "portfolio image 5",
    caption: "Video/Audio production",
    title: "Julimay",
    text: "",
  },
  {
    link: "/portfolio/furniture",
    img: "/images/furnitureapp/catgy_furn.png",
    alt: "portfolio image 6",
    caption: "App prototype, 3D modeling, AR experience",
    title: "Catgy Furn",
    text: "",
  },
];

const other_projects = [
  {
    link: "https://youtu.be/3ScW_ZBirfU",
    imgSrc: "/images/furnitureapp/Catgy_Furn_App.png",
    imgAlt: "CatGy Furn AR Experience video",
    label: "CatGy Furn AR Experience",
    text: "AR Experience",
  },
  {
    link: "https://youtu.be/e4xK4S4OlRQ",
    imgSrc: "/images/pawpatrol/paw_patrol_AR_experience.png",
    imgAlt: "Paw Patrol AR Experience video",
    label: "Paw Patrol AR Experience",
    text: "AR Experience",
  },
  {
    link: "https://youtu.be/E3jxq3OzaDI",
    imgSrc: "/images/helpo/helpo_poster.png",
    imgAlt: "Helpo routines app video",
    label: "Helpo routines",
    text: "Helpo App",
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
    subtitle: "Overview",
    description: greenthermiqueArticles.Intro,
    page: "greenthermique",
    hasLink: false,
    vidsrc: "https://www.youtube.com/embed/iS1BQzv_Syk?si=1kfnv_Lq7Yuuqe09",
    ismp4: false,
    articles: greenthermiqueArticles.Content,
    tools: greenthermiqueArticles.Tools,
    other_projects: other_projects,
  });
});

router.get("/caribfood", function (req, res, next) {
  res.render("page", {
    title: "CaribFood",
    subtitle: "Overview",
    description: caribfoodArticles.Intro,
    page: "caribfood",
    vidsrc: "https://www.youtube.com/embed/1YwwnlAmkLU?si=xWWL8nwuwSzSuFtX",
    ismp4: false,
    hasLink: false,
    articles: caribfoodArticles.Content,
    tools: caribfoodArticles.Tools,
    other_projects: other_projects,
  });
});

router.get("/pawpatrol", function (req, res, next) {
  res.render("page", {
    title: "Paw Patrol",
    subtitle: "Overview",
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
    other_projects: other_projects,
  });
});

router.get("/helpo", function (req, res, next) {
  res.render("page", {
    title: "Helpo",
    subtitle: "Overview",
    description: helpoArticles.Intro,
    page: "helpo",
    vidsrc: "https://www.youtube.com/embed/rqQfoLefWLQ?si=DbzzPMYjJHsZXPxA",
    ismp4: false,
    articles: helpoArticles.Content,
    tools: helpoArticles.Tools,
    hasLink: false,
    other_projects: other_projects,
    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

router.get("/julimay", function (req, res, next) {
  res.render("page", {
    title: "Julimay Grocery Shop",
    subtitle: "Overview",
    description: julimayArticles.Intro,
    page: "julimay",
    vidsrc: "https://www.youtube.com/embed/E4rnCT-Kb7U?si=YvRReXoGUAjfwW-w",
    ismp4: false,
    articles: julimayArticles.Content,
    tools: julimayArticles.Tools,
    hasLink: false,
    other_projects: other_projects,
    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

router.get("/furniture", function (req, res, next) {
  res.render("page", {
    title: "Furniture App",
    subtitle: "Overview",
    description: furnitureArticles.Intro,
    page: "furniture",
    vidsrc: "https://www.youtube.com/embed/3ScW_ZBirfU?si=nLLXzDlPpnejIX0x",
    ismp4: false,
    articles: furnitureArticles.Content,
    tools: furnitureArticles.Tools,
    hasLink: false,
    other_projects: other_projects,

    //creditSrc: "https://www.freepik.com/free-vector/abstract-blue-business-collateral-set_3009933.htm",
    //linkName: "Image by starline on Freepik",
  });
});

export default router;
