import express from "express";
var router = express.Router();

const AboutData = {
  title: "About Me",
  image: "/images/about/about-me.png",
  imgalt: "My picture",
  content:
    "I'm Cathy,<br><br> I'm a creative and adventurous person with a passion for design and music. I love creating cool graphics, animations and videos! Turning ideas into awesome visuals is my thing. <br><br>A little more of my background. I'm a French bilingual (French & English) Designer based in Toronto ON. After many years in the Customer Services industry, I have decided to change career and finally embrace my passion for digital graphic designs and started a \"Multimedia Design and Development\" program at Humber College.<br><br>I'm all about assisting others bring their visions & stories to life in a fun and unique way! Whether it's designing a name brand to creating a website prototype or animation, I am always enthusiastic to work with others and create visually stunning and memorable designs. With my keen eye for detail, design knowledge and techniques, I am committed to delivering high-quality and engaging designs that meet my clients' expectations. It's all about the user experience!",
};

/* GET endpoints */
router.get("/", function (req, res, next) {
  res.render("about", {
    title: AboutData.title,
    page: "about",
    data: AboutData,
  });
});

export default router;
