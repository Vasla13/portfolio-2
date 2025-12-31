/**
 * Main.js - Optimisé
 * Gestion des animations, du terminal et de l'interactivité
 */

document.addEventListener("DOMContentLoaded", () => {
  initTerminal();
  initSkillBadges();
  initScrollEffects();
  initStarfield();
  initPageTransitions();
  initKeyboardAccessibility();
});

/* --- 1. Terminal Animé --- */
function initTerminal() {
  const terminal = document.getElementById("terminal-text");
  if (!terminal) return;

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
    "Découvrez mes compétences, projets et réalisations ",
    "",
    "Appuyez sur la touche [Barre d'espace]… ou faites défiler pour continuer.",
  ];

  let lineIndex = 0;
  let charIndex = 0;
  terminal.textContent = "";

  function typeLine() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        terminal.textContent += currentLine[charIndex++];
        // Vitesse de frappe aléatoire pour effet réaliste
        setTimeout(typeLine, 5 + Math.random() * 10);
      } else {
        terminal.textContent += "\n";
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 150); // Pause entre les lignes
      }
    }
  }
  typeLine();
}

/* --- 2. Badges de Compétences --- */
function initSkillBadges() {
  const badges = document.querySelectorAll(".badge-skill");
  const descDisplay = document.getElementById("skillDesc");
  
  if (!badges.length || !descDisplay) return;

  const updateDesc = (text) => descDisplay.textContent = text;
  const clearDesc = () => descDisplay.textContent = "";

  badges.forEach(badge => {
    const text = badge.getAttribute("data-desc");
    
    // Souris
    badge.addEventListener("mouseenter", () => {
      badges.forEach(b => b.classList.remove("active"));
      badge.classList.add("active");
      updateDesc(text);
    });
    badge.addEventListener("mouseleave", () => {
      badge.classList.remove("active");
      clearDesc();
    });

    // Clavier (Tabulation)
    badge.addEventListener("focus", () => {
      badges.forEach(b => b.classList.remove("active"));
      badge.classList.add("active");
      updateDesc(text);
    });
    badge.addEventListener("blur", () => {
      badge.classList.remove("active");
      clearDesc();
    });
  });
}

/* --- 3. Scroll & Navbar --- */
function initScrollEffects() {
  const menu = document.querySelector(".retro-menu");
  
  // Sticky Navbar
  if (menu) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) menu.classList.add("scrolled");
      else menu.classList.remove("scrolled");
    }, { passive: true });
  }

  // Smooth Scroll pour les ancres
  document.querySelectorAll('.retro-menu a[href^="#"], .skip-link').forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if(href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true }); 
      }
    });
  });
}

/* --- 4. Starfield (Optimisé) --- */
function initStarfield() {
  const starfield = document.getElementById("starfield");
  // Si on est sur mobile ou préférence mouvement réduit, on ne lance pas l'anim
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!starfield || window.innerWidth < 450 || prefersReducedMotion) return;

  const STAR_COUNT = 70; // Réduit légèrement pour la perf
  const stars = [];

  // Configuration initiale
  starfield.style.position = "fixed";
  starfield.style.inset = "0"; // remplace top/left/width/height: 100%
  starfield.style.height = "260px";
  starfield.style.pointerEvents = "none";
  starfield.style.zIndex = "2";

  const width = window.innerWidth;
  const height = 260;

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 1.5 + 1;
    
    // Style statique
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Position aléatoire
    const x = Math.random() * width;
    const y = Math.random() * height;
    
    star.style.transform = `translate(${x}px, ${y}px)`;
    star.style.opacity = Math.random() * 0.6 + 0.4;
    
    // Couleurs
    if (Math.random() < 0.15) {
      star.style.background = "#ff62d6";
      star.style.boxShadow = "0 0 8px #ff62d6cc";
    } else if (Math.random() < 0.18) {
      star.style.background = "#00faff";
      star.style.boxShadow = "0 0 8px #00faffaa";
    }

    starfield.appendChild(star);
    stars.push({ el: star, x, y, z: size, speed: Math.random() * 0.2 + 0.1 });
  }

  // Boucle d'animation optimisée
  function animate() {
    for (const s of stars) {
      s.y += s.speed * (s.z * 1.5); // Effet de parallaxe basé sur la taille
      if (s.y > height) {
        s.y = -5;
        s.x = Math.random() * width;
      }
      // Utiliser translate est plus performant que top/left
      s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* --- 5. Transitions de Page --- */
function initPageTransitions() {
  document.querySelectorAll("a").forEach(link => {
    if (link.href && link.href.endsWith(".html") && link.target !== "_blank") {
      link.addEventListener("click", function(e) {
        // Empêcher l'effet si on télécharge un fichier ou ancre interne
        if (link.hostname === window.location.hostname && !link.hasAttribute("download") && !link.hash) {
            e.preventDefault(); // On attend la fin de l'anim
            document.body.classList.add("fadeout");
            setTimeout(() => {
                window.location = link.href;
            }, 400); // Doit correspondre à la transition CSS
        }
      });
    }
  });
}

/* --- 6. Accessibilité Clavier --- */
function initKeyboardAccessibility() {
  document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Empêcher le scroll sur espace
        card.click();
      }
    });
  });
}