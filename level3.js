(function () {
  const container = document.getElementById("captcha-container");

  container.innerHTML = `
<div class="captcha-card">

<h2>Click the Verify button</h2>

<div class="arena">

<button id="a" class="verify">Verify</button>
<button id="b" class="verify">Verify</button>
<button id="c" class="verify">Verify</button>
<button id="d" class="verify">Verify</button>

</div>

<p id="msg"></p>

</div>
`;

  const arena = document.querySelector(".arena");

  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");
  const d = document.getElementById("d");

  /* random move */

  function rand(btn) {
    btn.style.left = Math.random() * 300 + "px";
    btn.style.top = Math.random() * 150 + "px";
  }

  /* button A runs away */

  a.addEventListener("mouseenter", () => {
    rand(a);
  });

  /* button B teleports */

  b.addEventListener("mouseover", () => {
    rand(b);
  });

  /* button C diagonal move */

  let x = 100;
  let y = 100;

  setInterval(() => {
    x += 3;
    y += 2;

    if (x > arena.clientWidth - 80) x = 0;
    if (y > arena.clientHeight - 40) y = 0;

    c.style.left = x + "px";
    c.style.top = y + "px";
  }, 50);

  /* button D correct */

  d.onclick = () => {
    document.getElementById("msg").innerText =
      "Verification successful. Human observation detected.";

    setTimeout(() => {
      window.location.href = "journal.html";
    }, 1500);
  };
})();
