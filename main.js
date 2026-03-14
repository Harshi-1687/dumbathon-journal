const levels = [
  "levels/level1.js",
  "levels/level2.js",
  "levels/level3.js"
];

let currentLevel = 0;

function loadLevel() {

  const container = document.getElementById("captcha-container");
  container.innerHTML = "";

  const oldScript = document.getElementById("levelScript");
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.src = levels[currentLevel];
  script.id = "levelScript";

  document.body.appendChild(script);
}

function nextLevel() {

  currentLevel++;

  if (currentLevel < levels.length) {
    loadLevel();
  } else {
    document.getElementById("captcha-container").innerHTML =
      "<h2>All Challenges Completed. Human Verified.</h2>";
  }
}

window.nextLevel = nextLevel;

loadLevel();