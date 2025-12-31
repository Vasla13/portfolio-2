/**
 * Main.js - Version Cyber Pro
 * Gestion des animations, du terminal, de la navigation et des effets visuels.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTerminal();
  initSkillBadges();
  initScrollEffects();
  initStarfield();
  initPageTransitions();
  initGlitchEffect();
});

/* --- 1. Terminal Animé (Effet Hacker) --- */
function initTerminal() {
  const terminal = document.getElementById("terminal-text");
  if (!terminal) return;

  // Texte à afficher ligne par ligne
  const lines = [
    "Initializing SYSTEM.CORE...",
    "Loading Cyber_Profile_v2.0...",
    "> CONNECTED to NETWORK: SECURE",
    "",
    "Bienvenue sur le terminal d'Eric Petersen.",
    "-----------------------------------------",
    "Étudiant R&T | Option Cybersécurité | Développeur",
    "",
    "> Analyse des compétences en cours...",
    "[OK] Python",
    "[OK] Linux Administration",
    "[OK] Network Security",
    "",
    "Prêt à explorer. Faites défiler pour continuer.",
    "_"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  terminal.textContent = ""; // Vide le terminal au début

  function typeLine() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      
      // Si c'est une ligne vide, on saute direct
      if (currentLine === "") {
        terminal.textContent += "\n";
        lineIndex++;
        setTimeout(typeLine, 100);
        return;
      }

      if (charIndex < currentLine.length) {
        terminal.textContent += currentLine[charIndex++];
        // Vitesse de frappe aléatoire (plus réaliste)
        setTimeout(typeLine, Math.random() * 30 + 20);
      } else {
        terminal.textContent += "\n";
        charIndex = 0;
        lineIndex++;
        // Pause entre les lignes
        setTimeout(typeLine, 150);
      }
    }
  }
  
  // Démarrage avec un petit délai
  setTimeout(typeLine, 500);
}

/* --- 2. Badges de Compétences (Info au survol) --- */
function initSkillBadges() {
  const badges = document.querySelectorAll(".badge-skill");
  const descDisplay = document.getElementById("skillDesc");
  
  if (!badges.length || !descDisplay) return;

  const originalText = ""; // Texte par défaut (vide)

  badges.forEach(badge => {
    // Récupère le texte dans l'attribut data-desc (s'il existe) ou le texte du badge
    const text = badge.getAttribute("data-desc") || "Compétence technique validée.";
    
    badge.addEventListener("mouseenter", () => {
      descDisplay.textContent = "> " + text;
      descDisplay.style.opacity = "1";
      descDisplay.style.color = "#00faff";
    });

    badge.addEventListener("mouseleave", () => {
      descDisplay.textContent = originalText;
    });
  });
}

/* --- 3. Scroll & Navbar Sticky --- */
function initScrollEffects() {
  const menu = document.querySelector(".retro-menu");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      menu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
    }
  }, { passive: true });

  // Smooth Scroll pour les ancres (#)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* --- 4. Starfield (Optimisé pour Mobile) --- */
function initStarfield() {
  const starfield = document.getElementById("starfield");
  if (!starfield) return;

  // Moins d'étoiles sur mobile pour la performance
  const isMobile = window.innerWidth < 768;
  const STAR_COUNT = isMobile ? 50 : 150; 

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    
    // Position aléatoire
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 3 + 2; // Vitesse scintillement
    const size = Math.random() * 2 + 1;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    
    // Style de base de l'étoile
    star.style.position = "absolute";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.opacity = Math.random();
    star.style.animation = `twinkle ${duration}s infinite alternate`;

    starfield.appendChild(star);
  }
  
  // Ajout de l'animation CSS dynamiquement si elle n'existe pas
  if (!document.getElementById("star-anim-style")) {
    const style = document.createElement("style");
    style.id = "star-anim-style";
    style.innerHTML = `
      @keyframes twinkle {
        0% { opacity: 0.3; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);
  }
}

/* --- 5. Transitions de Page (Fade Out) --- */
function initPageTransitions() {
  // Ajoute la classe fade-in au chargement
  document.body.classList.add("loaded");

  document.querySelectorAll("a").forEach(link => {
    // Cible uniquement les liens internes qui changent de page
    if (link.hostname === window.location.hostname && 
        link.pathname !== window.location.pathname &&
        !link.hash && 
        link.target !== "_blank" &&
        !link.hasAttribute("download")) {
      
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.href;

        // Ajoute effet de sortie
        document.body.classList.remove("loaded");
        document.body.classList.add("fade-out");

        // Attend la fin de l'anim (400ms) avant de changer de page
        setTimeout(() => {
          window.location = target;
        }, 400);
      });
    }
  });
}

/* --- 6. Petit effet Glitch sur les Titres --- */
function initGlitchEffect() {
  const titles = document.querySelectorAll(".vice-title, .window-title");
  
  titles.forEach(title => {
    title.addEventListener("mouseover", () => {
      title.style.textShadow = "2px 0 #ff00ff, -2px 0 #00ffff";
      setTimeout(() => {
        title.style.textShadow = "none"; // Reset après un court instant
      }, 200);
    });
  });
}