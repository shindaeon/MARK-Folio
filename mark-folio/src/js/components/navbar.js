import Router from "../routes.js";

export function navBar() {
  const router = new Router();
  const navbarlinks = document.querySelector("#navlinks");
  navbarlinks.innerHTML = `<a href="/" aria-label="Link to Home Page" data-link>Home</a><a href="/about" aria-label="Link to About Page" data-link>About</a><a href="/works" aria-label="Link to the Artist's Works Page" data-link>Works</a><a href="/contact" aria-label="Link to the Artist's Contact Details Page" data-link>Contact</a>`;

  navbar.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const url = e.target.getAttribute("href");
      router.navigate(url);
      e.target.classList.add("active");
      e.target.parentElement.childNodes.forEach((link) => {
        if (link.getAttribute("href") !== e.target.getAttribute("href")) {
          link.classList.remove("active");
        }
      });
    }
  });

  document.onload = (() => {
    const path = window.location.pathname;
    const links = navbar.querySelectorAll("a");
    links.forEach((link) => {
      if (link.getAttribute("href") === path) {
        link.classList.add("active");
      }
    });
  })();
}
