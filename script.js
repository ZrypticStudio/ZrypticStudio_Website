document.addEventListener("DOMContentLoaded", () => {
  const showGamesBtn = document.getElementById("showGamesBtn");
  const gameMenu = document.getElementById("gameMenu");

  showGamesBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    gameMenu.classList.toggle("visible");
  });

  document.addEventListener("click", (event) => {
    if (!gameMenu.contains(event.target) && event.target !== showGamesBtn) {
      gameMenu.classList.remove("visible");
    }
  });
});