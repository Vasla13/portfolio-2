// -------- Terminal animé (machine à écrire, une seule fois, rapide) --------
document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal-text");
  if (!terminal) return;

  // Bannière ASCII + texte (en vouvoiement)
  const lines = [
    "███████╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗     ",
    "██╔════╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗    ",
    "█████╗█████╗██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║    ",
    "██╔══╝╚════╝██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║    ",
    "███████╗    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝    ",
    "╚══════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝     ",
    "",
    "Bienvenue sur mon portfolio rétro synthwave !",
    "Je suis Eric Petersen.",
    ">> Étudiant Réseaux & Télécoms, option Cyber.",
    "",
    "Découvrez mes compétences, projets et réalisations 👾",
    "",
    "Appuyez sur la touche [Entrée]… ou faites défiler pour continuer.",
  ];

  let line = 0,
    char = 0;
  terminal.textContent = "";

  function typeLine() {
    if (line < lines.length) {
      if (char < lines[line].length) {
        terminal.textContent += lines[line][char++];
        setTimeout(typeLine, 7 + Math.random() * 9); // Plus rapide !
      } else {
        terminal.textContent += "\n";
        char = 0;
        line++;
        setTimeout(typeLine, 100); // Petite pause ligne
      }
    }
    // FIN : ne fait rien, plus de boucle/effacement
  }
  typeLine();
});

// -------- Badges de compétences : affichage dynamique --------
document.addEventListener("DOMContentLoaded", function () {
  const badges = document.querySelectorAll(".badge-skill");
  const desc = document.getElementById("skillDesc");
  if (!badges || !desc) return;
  badges.forEach(function (badge) {
    badge.addEventListener("mouseenter", function () {
      badges.forEach((b) => b.classList.remove("active"));
      badge.classList.add("active");
      desc.textContent = badge.getAttribute("data-desc");
    });
    badge.addEventListener("mouseleave", function () {
      badge.classList.remove("active");
      desc.textContent = "";
    });
    badge.addEventListener("focus", function () {
      badges.forEach((b) => b.classList.remove("active"));
      badge.classList.add("active");
      desc.textContent = badge.getAttribute("data-desc");
    });
    badge.addEventListener("blur", function () {
      badge.classList.remove("active");
      desc.textContent = "";
    });
  });
});

// -------- Menu sticky : shrink et couleur au scroll --------
window.addEventListener("scroll", function () {
  const menu = document.querySelector(".retro-menu");
  if (!menu) return;
  if (window.scrollY > 40) menu.classList.add("scrolled");
  else menu.classList.remove("scrolled");
});

// -------- Effet fade-out lors du changement de page --------
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach((link) => {
    // Ne fade-out que pour les liens internes HTML sans target _blank
    if (
      link.href &&
      link.href.endsWith(".html") &&
      (!link.target || link.target === "_self")
    ) {
      link.addEventListener("click", function (e) {
        if (
          link.hostname === window.location.hostname &&
          !link.hasAttribute("download")
        ) {
          document.body.classList.add("fadeout");
        }
      });
    }
  });
});

// -------- Scroll fluide vers les ancres du menu --------
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.retro-menu a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Ajoute un focus visuel sur la section
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        setTimeout(() => target.removeAttribute("tabindex"), 900);
      }
    });
  });
});

// -------- Focus clavier visible sur cartes compétences/projets --------
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        card.click();
      }
    });
  });
});

// -------- Starfield animé synthwave --------
document.addEventListener("DOMContentLoaded", function () {
  const starfield = document.getElementById("starfield");
  if (!starfield) return;

  const STAR_COUNT = 90; // Plus il y en a, plus c’est dense
  const SPEED = 0.32; // Vitesse (0.2 = lent / 0.6 = rapide)
  const stars = [];

  // Dimensionner le starfield
  starfield.style.position = "fixed";
  starfield.style.top = "0";
  starfield.style.left = "0";
  starfield.style.width = "100vw";
  starfield.style.height = "260px";
  starfield.style.pointerEvents = "none";
  starfield.style.zIndex = "2";

  // Responsive adaptation
  function getWidth() { return window.innerWidth; }
  function getHeight() { return 260; } // Hauteur du bandeau

  // Création des étoiles
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    // Taille aléatoire
    const size = Math.random() * 1.7 + 0.8;
    star.style.width = star.style.height = size + "px";
    // Position initiale
    star.style.left = Math.random() * getWidth() + "px";
    star.style.top = Math.random() * getHeight() + "px";
    // Opacité et couleur
    star.style.opacity = Math.random() * 0.6 + 0.4;
    if (Math.random() < 0.15) {
      star.style.background = "#ff62d6"; // 1/6 en rose
      star.style.boxShadow = "0 0 8px #ff62d6cc, 0 0 2px #fff";
    } else if (Math.random() < 0.18) {
      star.style.background = "#00faff"; // 1/6 en bleu fluo
      star.style.boxShadow = "0 0 8px #00faffaa, 0 0 2px #fff";
    }
    starfield.appendChild(star);
    stars.push({el: star, x: parseFloat(star.style.left), y: parseFloat(star.style.top), z: size});
  }

  function animate() {
    for (let star of stars) {
      star.y += SPEED * (star.z * 0.8 + 0.7);
      if (star.y > getHeight()) {
        // Recycle
        star.x = Math.random() * getWidth();
        star.y = -4 - Math.random() * 18;
      }
      star.el.style.left = star.x + "px";
      star.el.style.top = star.y + "px";
    }
    requestAnimationFrame(animate);
  }

  animate();
  window.addEventListener("resize", () => {
    for (let star of stars) {
      if (star.x > getWidth()) star.x = Math.random() * getWidth();
    }
  });
});
