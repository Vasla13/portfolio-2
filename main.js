<<<<<<< HEAD
// -------- Animation texte terminal (ascii rapide puis normal) --------
const terminalText = [
  "███████╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗     ",
  "██╔════╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗    ",
  "█████╗█████╗██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║    ",
  "██╔══╝╚════╝██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║    ",
  "███████╗    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝    ",
  "╚══════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝     ",
  "                                                                                        ",
  "Bienvenue sur le <span class='color-miami'>portfolio</span> d'<b>Eric Petersen</b>.",
  "",
  "Clique sur <span style='color:#00faff;'>Projets</span> en haut à gauche pour voir mes réalisations.",
  "Ou fais simplement défiler la page pour explorer mes projets.",
];
let currLine = 0;

function printTerminalLine(line, i = 0) {
  const el = document.getElementById("terminal-text");
  if (!el) return;
  // Lignes 0 à 6 = ascii ultra rapide
  let fast = currLine <= 6;
  let charSpeed = fast ? 1 + Math.random() * 2 : 13 + Math.random() * 25;
  let lineDelay = fast ? 18 : 240;

  if (i <= line.length) {
    el.innerHTML =
      terminalText.slice(0, currLine).join("\n") +
      "\n" +
      line.slice(0, i) +
      "<span class='cursor'>_</span>";
    setTimeout(() => printTerminalLine(line, i + 1), charSpeed);
  } else {
    currLine++;
    if (currLine < terminalText.length) {
      setTimeout(() => printTerminalLine(terminalText[currLine], 0), lineDelay);
    } else {
      el.innerHTML = terminalText.join("\n");
    }
  }
}

// -------- CRT Projects --------
const crtProjects = [
  {
    title: "SAE 3.02 – Développer des applications communicantes",
    content: `
      <div class="crt-proj">
        <div style="text-align:center;">
          <img src="sae302.png" alt="SAE 3.02" style="max-width:200px; border-radius:12px; margin-bottom:1em; box-shadow:0 3px 22px #00faff99;" loading="lazy">
        </div>
        <h3 style="color:#ff62d6; font-family:'Press Start 2P', monospace; margin-bottom:0.7em;">Projet : Cluster TCP Sécurisé</h3>
        <div style="margin-bottom:0.5em;">
          <span style="color:#00faff;">Langages :</span> Python, Bash<br>
          <span style="color:#00faff;">Compétences :</span> Réseau, Cybersécurité, Scripting
        </div>
        <div>
          <p>Développement d'une application capable d'exécuter des programmes à distance sur un cluster TCP sécurisé, gestion d'accès, logs, automatisation, sécurité réseau...</p>
          <a href="sae302.html" class="press-start-btn" target="_blank" style="margin-top:1.4em; margin-bottom:0.7em;">VOIR LE PROJET</a>
        </div>
      </div>
    `,
  },
  {
    title: "SAE – Parcours Root-Me PRO",
    content: `
      <div class="crt-proj">
        <div style="text-align:center;">
          <img src="root-me.png" alt="RootMe" style="max-width:160px; border-radius:12px; margin-bottom:1em; box-shadow:0 3px 22px #ff62d699;" loading="lazy">
        </div>
        <h3 style="color:#ff62d6; font-family:'Press Start 2P', monospace; margin-bottom:0.7em;">Projet : Challenge CTF</h3>
        <div style="margin-bottom:0.5em;">
          <span style="color:#00faff;">Stack :</span> Linux, Python, OSINT<br>
          <span style="color:#00faff;">Missions :</span> Exploitation, Reverse, Pentest
        </div>
        <div>
          <p>Réalisation d’un parcours complet sur Root-Me PRO, résolutions de challenges orientés cyber, automatisation d’outils de veille et reporting.</p>
          <a href="rootme.html" class="press-start-btn" target="_blank" style="margin-top:1.4em; margin-bottom:0.7em;">VOIR LE PROJET</a>
        </div>
      </div>
    `,
  },
  {
    title: "Stage – DORNER Health IT Solutions",
    content: `
      <div class="crt-proj">
        <div style="text-align:center;">
          <img src="dorner-stage.png" alt="Stage" style="max-width:170px; border-radius:12px; margin-bottom:1em; box-shadow:0 3px 22px #00faff99;" loading="lazy">
        </div>
        <h3 style="color:#ff62d6; font-family:'Press Start 2P', monospace; margin-bottom:0.7em;">Projet : Infrastructure Santé</h3>
        <div style="margin-bottom:0.5em;">
          <span style="color:#00faff;">Stack :</span> Windows Server, VMware<br>
          <span style="color:#00faff;">Domaines :</span> Réseau, Virtualisation, Sécurité
        </div>
        <div>
          <p>Participation à la mise en place et à la sécurisation de l’infrastructure IT pour un acteur du secteur santé, documentation, backup, support utilisateurs.</p>
          <a href="stage.html" class="press-start-btn" target="_blank" style="margin-top:1.4em; margin-bottom:0.7em;">VOIR LE PROJET</a>
        </div>
      </div>
    `,
  },
];

let crtIndex = 0;

// --------- Logique d'affichage TV rétro ---------
function showCRTProject(idx) {
  crtIndex = idx;
  document.getElementById("crt-title").innerHTML = crtProjects[crtIndex].title;
  document.getElementById("crt-content").innerHTML =
    crtProjects[crtIndex].content;
  document.getElementById("crt-overlay").classList.add("active");
  document.body.style.overflow = "hidden"; // empêche scroll page

  // Flicker CRT TV (feedback visuel)
  setTimeout(() => {
    const crtTv = document.querySelector(".crt-tv");
    crtTv.classList.add("flicker-in");
    setTimeout(() => crtTv.classList.remove("flicker-in"), 320);
  }, 30);

  trapFocusCRT();
}

function closeCRT() {
  document.getElementById("crt-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

// -------- Focus trap CRT / accessibilité modale --------
function trapFocusCRT() {
  const overlay = document.getElementById("crt-overlay");
  const focusableSelectors =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableEls = overlay.querySelectorAll(focusableSelectors);
  const firstFocusable = focusableEls[0];
  const lastFocusable = focusableEls[focusableEls.length - 1];

  function handleTab(e) {
    if (!overlay.classList.contains("active")) return;
    if (e.key !== "Tab") return;
    if (focusableEls.length === 0) return;
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }
  overlay.addEventListener("keydown", handleTab);

  // Focus direct sur le bouton close à l'ouverture
  setTimeout(() => {
    firstFocusable && firstFocusable.focus();
  }, 120);
}

// -------- Navigation “changer de chaîne” --------
=======
// -------- Animation simple du terminal : ligne unique d'accueil --------
>>>>>>> 2d73c04f3f7c801efc09c49902fa643664b07080
document.addEventListener("DOMContentLoaded", function () {
  const terminalEl = document.getElementById("terminal-text");
  if (terminalEl) {
    terminalEl.textContent =
      "Bienvenue sur le portfolio Miami Vice d'Eric Petersen.\nDécouvre mes projets ci-dessous !";
  }

  // Badges compétences interactifs
  badgeSkillEvents();

  // Menu sticky shrink au scroll
  window.addEventListener("scroll", function () {
    const menu = document.querySelector(".retro-menu");
    const title = document.querySelector(".retro-title");
    if (window.scrollY > 60) {
      menu.classList.add("shrink");
      title.classList.add("shrink");
    } else {
      menu.classList.remove("shrink");
      title.classList.remove("shrink");
    }
  });

  // Section active dans le menu (scroll spy)
  setupMenuActive();

  // CRT overlay gestion
  document.querySelectorAll(".project-card").forEach((el) => {
    el.addEventListener("click", function (e) {
      if (window.innerWidth > 550) {
        e.preventDefault();
        const idx = parseInt(el.dataset.project, 10);
        showCRTProject(idx);
      }
    });
  });

  document.getElementById("crt-close").onclick = closeCRT;
  document.getElementById("crt-overlay").onclick = function (e) {
    if (e.target === this) closeCRT();
  };
  window.addEventListener("keydown", function (e) {
    if (
      document.getElementById("crt-overlay").classList.contains("active") &&
      e.key === "Escape"
    )
      closeCRT();
  });

  // Animation reveal au scroll
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // Timer footer
  let seconds = 0;
  setInterval(() => {
    seconds++;
    let m = String(Math.floor(seconds / 60)).padStart(2, "0");
    let s = String(seconds % 60).padStart(2, "0");
    const timer = document.getElementById("timer");
    if (timer) timer.textContent = m + ":" + s;
  }, 1000);

  // Notification au clic menu
  document.querySelectorAll(".retro-menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const label = link.textContent.trim();
      showNotif("Changement de section : " + label);
    });
  });

  // Grille Tron animée (canvas)
  tronGrid();

  // Etoiles filantes
  starField();
});

// -------- CRT overlay TV rétro (projets) --------
const crtProjects = [
  {
    title: "SAE 3.02 – Développer des applications communicantes",
    content: `
      <div class="crt-proj">
        <img src="sae302.png" alt="SAE 3.02" style="max-width:220px; border-radius:14px; margin-bottom:1em; box-shadow:0 3px 22px #00faff99;">
        <h3 style="color:#ff62d6;font-family:'Press Start 2P',monospace;margin-bottom:0.7em;">Cluster TCP Sécurisé</h3>
        <p>Développement d'une application capable d'exécuter des programmes à distance sur un cluster TCP sécurisé.<br><br><b>Langages :</b> Python, Bash<br><b>Compétences :</b> Réseau, Cybersécurité, Scripting</p>
        <a href="sae302.html" class="press-start-btn" target="_blank" style="margin-top:1.2em;">VOIR LE PROJET</a>
      </div>
    `,
  },
  {
    title: "SAE – Parcours Root-Me PRO",
    content: `
      <div class="crt-proj">
        <img src="root-me.png" alt="RootMe" style="max-width:180px; border-radius:14px; margin-bottom:1em; box-shadow:0 3px 22px #ff62d699;">
        <h3 style="color:#ff62d6;font-family:'Press Start 2P',monospace;margin-bottom:0.7em;">Challenge CTF</h3>
        <p>Résolution de challenges Root-Me PRO orientés cybersécurité offensive.<br><br><b>Stack :</b> Linux, Python, OSINT<br><b>Missions :</b> Exploitation, Reverse, Pentest</p>
        <a href="rootme.html" class="press-start-btn" target="_blank" style="margin-top:1.2em;">VOIR LE PROJET</a>
      </div>
    `,
  },
  {
    title: "Stage – DORNER Health IT Solutions",
    content: `
      <div class="crt-proj">
        <img src="dorner-stage.png" alt="Stage" style="max-width:180px; border-radius:14px; margin-bottom:1em; box-shadow:0 3px 22px #00faff99;">
        <h3 style="color:#ff62d6;font-family:'Press Start 2P',monospace;margin-bottom:0.7em;">Infrastructure Santé</h3>
        <p>Participation à la mise en place et à la sécurisation de l’infrastructure IT pour un acteur du secteur santé.<br><br><b>Stack :</b> Windows Server, VMware<br><b>Domaines :</b> Réseau, Virtualisation, Sécurité</p>
        <a href="stage.html" class="press-start-btn" target="_blank" style="margin-top:1.2em;">VOIR LE PROJET</a>
      </div>
    `,
  },
];

function showCRTProject(idx) {
  document.getElementById("crt-title").innerHTML = crtProjects[idx].title;
  document.getElementById("crt-content").innerHTML = crtProjects[idx].content;
  document.getElementById("crt-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeCRT() {
  document.getElementById("crt-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

// -------- Badges compétences interactifs --------
function badgeSkillEvents() {
  document.querySelectorAll(".badge-skill").forEach((badge) => {
    badge.onmouseenter = (e) => {
      const desc = document.getElementById("skillDesc");
      if (desc) desc.textContent = badge.dataset.desc || "";
      badge.classList.add("active");
    };
    badge.onmouseleave = (e) => {
      const desc = document.getElementById("skillDesc");
      if (desc) desc.textContent = "";
      badge.classList.remove("active");
    };
  });
}

// -------- Reveal animation au scroll --------
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight * 0.93) {
      el.classList.add("active");
    }
  });
}

// -------- Menu sticky : section active --------
function setupMenuActive() {
  const navLinks = document.querySelectorAll(".retro-menu a");
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active-nav");
      } else {
        link.classList.remove("active-nav");
      }
    });
  });
}

// -------- Pop-up notification façon Windows 95 --------
function showNotif(txt) {
  const el = document.getElementById("popupNotif");
  if (!el) return;
  el.textContent = txt;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

// -------- Grille Tron animée (canvas) --------
function tronGrid() {
  const canvas = document.getElementById("tronGrid");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = 260;
  }
  window.addEventListener("resize", resize);
  resize();

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#00faff";
    ctx.globalAlpha = 0.29;
    for (let y = canvas.height - 18, i = 0; y > 30; y -= 22, i++) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    for (let x = 0; x < canvas.width; x += 65) {
      ctx.beginPath();
      ctx.moveTo(x, canvas.height - 18);
      ctx.lineTo(canvas.width / 2, 40);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawGrid);
  }
  drawGrid();
}

// -------- Etoiles filantes --------
function starField() {
  const el = document.getElementById("starfield");
  if (!el) return;
  el.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random() * 98 + "vw";
    s.style.top = 30 + Math.random() * 210 + "px";
    s.style.width = s.style.height = Math.random() * 1.7 + 1 + "px";
    s.style.opacity = Math.random() * 0.8 + 0.2;
    el.appendChild(s);
  }
  setInterval(() => {
    el.childNodes.forEach((star) => {
      star.style.left = ((parseFloat(star.style.left) + 0.18) % 100) + "vw";
      star.style.opacity = Math.random() * 0.6 + 0.3;
    });
  }, 60);
}
