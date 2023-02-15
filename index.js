const navButton = document.querySelector(".menu__button");

navButton.addEventListener("click", toggleNav);

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
}
