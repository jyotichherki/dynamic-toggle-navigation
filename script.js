
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".nav-button");

function toggleMenu(forceClose = false) {
  const shouldOpen =
    !forceClose && !navLinks.classList.contains("show");

  navLinks.classList.toggle("show", shouldOpen);
  menuToggle.classList.toggle("open", shouldOpen);

  menuToggle.setAttribute("aria-expanded", shouldOpen);
  menuToggle.setAttribute(
    "aria-label",
    shouldOpen ? "Close navigation" : "Open navigation"
  );
}

menuToggle.addEventListener("click", () => {
  toggleMenu();
});


links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (window.innerWidth <= 768) {
      toggleMenu(true);
    }
  });
});


navButton.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    toggleMenu(true);
  }
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleMenu(true);
  }
});


window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    toggleMenu(true);
  }
});
