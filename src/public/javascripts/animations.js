import * as PIXI from "pixi";

const smokeImage =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png";
const app = new Application(window.innerWidth, window.innerHeight, {
  backgroundAlpha: 0,
});
let canvas = document.getElementById("smokeCanvas");
canvas.appendChild(app.view);

window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

const smokes = new Container();
app.stage.addChild(smokes);

const smokeTexture = await Texture.fromImage(smokeImage);

smokeTexture.baseTexture.width = window.innerWidth;
smokeTexture.baseTexture.height = window.innerHeight;
const smokeParticles = [];

for (let p = 0; p < 40; p++) {
  const particle = new Sprite(smokeTexture);
  particle.position.set(
    window.innerWidth / 2 - (Math.random() * 800 - 400),
    window.innerHeight / 2 - (Math.random() * 800 - 400)
  );
  particle.anchor.set(0.5);
  particle.rotation = Math.random() * 360;
  particle.scale.set(1.5 + Math.random() * 0.5);
  particle.alpha = 0.5;
  particle.blendMode = PIXI.BLEND_MODES.SCREEN;
  particle.tint = 0xffffff;
  particle._speed = (r(0, 100) - 50) / 10000;
  smokes.addChild(particle);
  smokeParticles.push(particle);
}

app.ticker.speed = 0.5;
app.ticker.add((delta) => {
  animate(delta);
});

function animate(delta) {
  let sp = smokeParticles.length;
  while (sp--) {
    const x = smokeParticles[sp]._speed;
    smokeParticles[sp].rotation += delta * x;
  }
}

function r(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}
