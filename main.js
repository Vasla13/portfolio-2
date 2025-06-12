// -------- Terminal animé (machine à écrire + bannière ASCII) --------
document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal-text");
  if (!terminal) return;

  // Bannière ASCII + texte
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
    "  #Cybersécurité #Dev #Réseaux #Linux",
    "",
    "Découvre mes compétences, projets et réalisations 👾",
    "",
    "Tape sur la touche [Entrée]… ou scroll pour continuer.",
  ];

  let line = 0,
    char = 0;
  terminal.textContent = "";

  function typeLine() {
    if (line < lines.length) {
      if (char < lines[line].length) {
        terminal.textContent += lines[line][char++];
        setTimeout(typeLine, 16 + Math.random() * 16); // rapidité type
      } else {
        terminal.textContent += "\n";
        char = 0;
        line++;
        setTimeout(typeLine, 320);
      }
    } else {
      setTimeout(clearTerminal, 2500);
    }
  }
  function clearTerminal() {
    terminal.textContent = "";
    line = 0;
    char = 0;
    setTimeout(typeLine, 1000);
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
