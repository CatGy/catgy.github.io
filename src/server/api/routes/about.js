import express from "express";
var router = express.Router();

export const AboutData = {
  title: "About Me",
  image: "/images/about/about-me.png",
  imgalt: "My picture",
  softskills_text:
    "I'm a creative person with self-confidence and great communication skills. I also have the following valuable softskills:",
  softskills: [
    "Problem solving & Decision making,",
    "Great communication & Observation,",
    "Multi-task & Time management, Teamwork,",
    "Reliable, Great listener, Detailed-oriented, Flexible,",
    "Organized, Team-leader, Self-motivated, Adaptable.",
  ],
  hardskills_text:
    "I'm Bilingual and fluent in french and english. I have a strong background in customer service and I'm proficient in the following:",
  hardskills: [
    "<b>Graphic design</b>:</b> Adobe Photoshop, Illustrator,",
    "<b>Motion Design (Animation/ AR)</b>: Adobe After Effects, Adobe Aero,",
    "<b>3D Graphic Design</b>: Adobe Substance 3D sampler,",
    "<b>Video/ audio Production</b>: Adobe Premier Pro, Adobe Audition,",
    "<b>UX UI Design</b>: Figma, Adobe XD,",
    "<b>Admin</b>: Microsoft word, excel, iMis,",
    "<b>Customer Service</b>: Phone/email inquiries, data processing, schedule meeting, process payment.",
  ],
  content:
    "I'm Cathy,<br><br> I'm a creative and adventurous person with a passion for design and music. I like exploring new design trend and collaborating with others to help them bring their visions to life in a fun and unique way. <br><br>A little more of my background. I'm a French bilingual (French & English) Designer based in Toronto ON. After many years in the Customer Services industry, I have decided to change career and finally embrace my passion for digital graphic designs and started a \"Multimedia Design and Development\" program at Humber College.<br> Whether it's designing a name brand to creating a website prototype or animation, I am always enthusiastic to work with others and create visually stunning and memorable designs. It's all about the user experience!",
  content_next: "",
  content_image: "/images/about/about-me.png",
  content_imgalt: "My picture",
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
