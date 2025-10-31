// Zryptic Studio Website Script
document.addEventListener("DOMContentLoaded", () => {

  // --- Handle "Upcoming Games" dropdown toggle ---
  const upcomingGamesBtn = document.getElementById("upcoming-games-btn");
  const gameMenu = document.getElementById("game-menu");

  if (upcomingGamesBtn && gameMenu) {
    upcomingGamesBtn.addEventListener("click", () => {
      gameMenu.classList.toggle("visible");
    });
  }

  // --- Handle navigation buttons (redirects to correct pages) ---
  const homeLinks = document.querySelectorAll('.nav-home');
  const aboutLinks = document.querySelectorAll('.nav-about');
  const contactLinks = document.querySelectorAll('.nav-contact');

  homeLinks.forEach(link => link.addEventListener("click", () => {
    window.location.href = "index.html";
  }));

  aboutLinks.forEach(link => link.addEventListener("click", () => {
    window.location.href = "about.html";
  }));

  contactLinks.forEach(link => link.addEventListener("click", () => {
    window.location.href = "contact.html";
  }));

  // --- Optional: Smooth scroll for internal anchor links (if added later) ---
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // --- Optional: Add a small glow effect when dropdown opens ---
  if (gameMenu) {
    const observer = new MutationObserver(() => {
      if (gameMenu.classList.contains("visible")) {
        gameMenu.style.boxShadow = "0 0 25px rgba(31, 111, 235, 0.5)";
      } else {
        gameMenu.style.boxShadow = "none";
      }
    });
    observer.observe(gameMenu, { attributes: true });
  }

});
