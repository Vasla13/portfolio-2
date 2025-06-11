// ====================
// --- Vice Terminal --
// ====================
const terminalLines = [
  "███████╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗     ",
  "██╔════╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗    ",
  "█████╗█████╗██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║    ",
  "██╔══╝╚════╝██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║    ",
  "███████╗    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝    ",
  "╚══════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝     ",
  "",
  "Salut, je suis Eric Petersen.",
  "Bienvenue sur mon portfolio rétro synthwave !",
  "",
  "Étudiant R&T CYBER | IUT Colmar",
  "Projets, challenges & stage ci-dessous.",
];
function typeTerminal(lines, el, delay = 34) {
  let txt = "",
    line = 0,
    char = 0;
  function type() {
    if (line < lines.length) {
      if (char < lines[line].length) {
        txt += lines[line][char++];
        el.textContent = txt + (char % 2 === 0 ? "_" : "");
        setTimeout(type, delay);
      } else {
        txt += "\n";
        char = 0;
        line++;
        setTimeout(type, delay * 3);
      }
    } else {
      el.textContent = txt;
    }
  }
  type();
}
document.addEventListener("DOMContentLoaded", function () {
  const term = document.getElementById("terminal-text");
  if (term) typeTerminal(terminalLines, term);
});

// =====================
// -- Badges Skills ----
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const badges = document.querySelectorAll(".badge-skill");
  const desc = document.getElementById("skillDesc");
  badges.forEach((badge) => {
    badge.addEventListener("mouseenter", () => {
      desc.textContent = badge.getAttribute("data-desc");
      badges.forEach((b) => b.classList.remove("active"));
      badge.classList.add("active");
    });
    badge.addEventListener("focus", () => {
      desc.textContent = badge.getAttribute("data-desc");
      badges.forEach((b) => b.classList.remove("active"));
      badge.classList.add("active");
    });
    badge.addEventListener("mouseleave", () => {
      desc.textContent = "";
      badge.classList.remove("active");
    });
    badge.addEventListener("blur", () => {
      desc.textContent = "";
      badge.classList.remove("active");
    });
  });
});

// ===================================
// --- Overlay CRT TV pour projets ---
// ===================================
const projectsCRT = [
  {
    title: "SAE 3.02 – Développer des applications communicantes",
    content: `<b>Projet SAE 3.02</b><br>Applications communicantes distribuées (Java, Python, C).<br>
      Architecture multi-serveur, sockets, tests, dockerisation.<br>
      <a href="sae302.html" target="_blank" rel="noopener" class="press-start-btn" style="margin-top:1em;">Voir la page détaillée</a>`,
  },
  {
    title: "SAE – Parcours Root-Me PRO",
    content: `<b>Projet Root-Me PRO</b><br>Pentesting, challenges web, réseau, exploitation, forensic.<br>
      Développement d’outils scripts pour automatisation, rapport, analyse.<br>
      <a href="rootme.html" target="_blank" rel="noopener" class="press-start-btn" style="margin-top:1em;">Voir la page détaillée</a>`,
  },
  {
    title: "Stage – DORNER Health IT Solutions",
    content: `<b>Stage DORNER Health IT</b><br>Développement d’un outil de mise à jour logiciel sécurisé.<br>
      Stack : Linux, Apache, MariaDB, PHP, sécurité, automatisation.<br>
      <a href="stage.html" target="_blank" rel="noopener" class="press-start-btn" style="margin-top:1em;">Voir la page détaillée</a>`,
  },
];

function showCRTProject(idx) {
  const overlay = document.getElementById("crt-overlay");
  const title = document.getElementById("crt-title");
  const content = document.getElementById("crt-content");
  if (!overlay || !title || !content) return;
  title.innerHTML = projectsCRT[idx].title;
  content.innerHTML = projectsCRT[idx].content;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  document.querySelector(".crt-tv").classList.add("flicker-in");

  // Focus trap
  setTimeout(() => {
    document.getElementById("crt-close").focus();
  }, 220);

  // Boutons navigation
  document.getElementById("crt-prev").onclick = () =>
    showCRTProject((idx + projectsCRT.length - 1) % projectsCRT.length);
  document.getElementById("crt-next").onclick = () =>
    showCRTProject((idx + 1) % projectsCRT.length);
  document.getElementById("crt-close").onclick = closeCRT;

  // Keyboard nav
  overlay.onkeydown = (e) => {
    if (e.key === "Escape") closeCRT();
    if (e.key === "ArrowLeft")
      showCRTProject((idx + projectsCRT.length - 1) % projectsCRT.length);
    if (e.key === "ArrowRight") showCRTProject((idx + 1) % projectsCRT.length);
  };
}
function closeCRT() {
  const overlay = document.getElementById("crt-overlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  overlay.onkeydown = null;
}

// Ferme overlay au clic hors TV
document.addEventListener("mousedown", function (e) {
  const overlay = document.getElementById("crt-overlay");
  if (overlay && overlay.classList.contains("active")) {
    const tv = overlay.querySelector(".crt-tv");
    if (!tv.contains(e.target)) closeCRT();
  }
});

// =======================
// --- Timer Vice Time ---
// =======================
function updateViceTime() {
  const t = new Date();
  const h = String(t.getHours()).padStart(2, "0");
  const m = String(t.getMinutes()).padStart(2, "0");
  const timer = document.getElementById("timer");
  if (timer) timer.textContent = `${h}:${m}`;
}
setInterval(updateViceTime, 6000);
updateViceTime();

// =======================
// ---- Notification ----
// =======================
function showNotif(msg) {
  const notif = document.getElementById("popupNotif");
  if (!notif) return;
  notif.textContent = msg;
  notif.classList.add("show");
  setTimeout(() => notif.classList.remove("show"), 2400);
}

// ==========================
// ---- TronGrid (Canvas) ---
// ==========================
function tronGridAnim() {
  const canvas = document.getElementById("tronGrid");
  if (
    !canvas ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.innerWidth < 450
  )
    return;
  const ctx = canvas.getContext("2d");
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = 240;
  }
  resize();
  window.addEventListener("resize", resize);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Route perspective
    ctx.save();
    for (let i = 0; i < 15; i++) {
      let y = 230 - i * 15;
      ctx.strokeStyle = "#00faff" + (i % 3 === 0 ? "cc" : "44");
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    // Lignes verticales perspective
    for (let i = 0; i <= 12; i++) {
      let x = (canvas.width / 12) * i;
      ctx.strokeStyle = "#ff62d6" + (i % 2 === 0 ? "99" : "33");
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 240);
      ctx.lineTo(x, 50);
      ctx.stroke();
    }
    ctx.restore();
    requestAnimationFrame(draw);
  }
  draw();
}
document.addEventListener("DOMContentLoaded", tronGridAnim);

// ==========================
// ---- Starfield Anim -----
// ==========================
function starfieldAnim() {
  const field = document.getElementById("starfield");
  if (
    !field ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.innerWidth < 450
  )
    return;
  field.innerHTML = "";
  function randomStar() {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 1.2 + 0.5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * 200 + "px";
    star.style.opacity = Math.random() * 0.8 + 0.2;
    field.appendChild(star);
    setTimeout(() => {
      star.style.left = window.innerWidth + 90 + "px";
      star.style.opacity = 0;
      setTimeout(() => field.removeChild(star), 1300);
    }, Math.random() * 800 + 500);
  }
  setInterval(randomStar, 250);
  for (let i = 0; i < 45; i++) randomStar();
}
document.addEventListener("DOMContentLoaded", starfieldAnim);

// ==============================
// ---- Reveal on scroll -------
// ==============================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  function checkReveal() {
    const wh = window.innerHeight;
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < wh - 50) el.classList.add("active");
      else el.classList.remove("active");
    });
  }
  window.addEventListener("scroll", checkReveal);
  checkReveal();
}
document.addEventListener("DOMContentLoaded", revealOnScroll);

// ==============================
// ---- Adapt menu sticky shrink (optionnel) ----
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".retro-menu");
  if (!menu) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) menu.classList.add("shrink");
    else menu.classList.remove("shrink");
  });
});

// ==============================
// ---- Reduce motion / mobile : stop effects ----
// ==============================
if (
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  window.innerWidth < 450
) {
  document
    .querySelectorAll(
      ".scanlines, #tronGrid, #starfield, .glitch-type, .vice-glitch, .miami-sun"
    )
    .forEach((el) => {
      if (el) el.style.display = "none";
    });
}
