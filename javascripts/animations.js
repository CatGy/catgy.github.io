window.onload = function () {
  console.log("animations.js loaded");

  var theater = theaterJS();
  let options = { accuracy: 1, speed: 1, minSpeed: 0.6, maxSpeed: 1.2 };
  theater
    .addActor("text1", { ...options, maxSpeed: 2, speed: 1.2 })
    .addActor("text2", options)
    .addActor("text3", options)
    .addActor("pt1", options)
    .addActor("pt2", options)
    .addActor("pt3", options)
    .addActor("pt4", options)
    .addActor("pt5", options);

  theater
    .addScene("text1: Hi, I'm Cathy! ", 400)
    .addScene("text2:I am a Multimedia Designer", 100)
    .addScene("text3:mainly in:", 100)
    .addScene("pt1:• Graphic Designs", 100)
    .addScene("pt2:• Motion Design", 100)
    .addScene("pt3:• 3D Design", 100)
    .addScene("pt4:• Animation", 100)
    .addScene("pt5:• Video Production", 100);
};
