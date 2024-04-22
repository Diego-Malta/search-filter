document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const cards = document.querySelectorAll(".cards");

  function filterIcons(searchQuery) {
    const nothingFound = document.getElementById("nothing-alert");
    let number = 0;

    cards.forEach(card => {
      const name = card.querySelector("h2").textContent.toLowerCase();
      if (name.includes(searchQuery.toLowerCase())) {
        nothingFound.style.display = "none";
        card.style.display = "flex";
        number++;
      } else {
        card.style.display = "none";
      }
    });
    if (number === 0) {
      nothingFound.style.display = "block";
    }
  }

  searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value.trim();
    filterIcons(searchQuery);
  });
});