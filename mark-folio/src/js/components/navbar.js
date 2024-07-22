import Router from "../routes.js";

export function navBar() {
  const router = new Router();
  const navbar = document.querySelector(".navbar-nav");
  navbar.innerHTML = `
    <li class="nav-item">
      <a class="nav-link" href="/" aria-label="Link to Home Page" data-link>Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about" aria-label="Link to About Page" data-link>About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/works" aria-label="Link to the Artist's Works Page" data-link>Works</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/contact" aria-label="Link to the Artist's Contact Details Page" data-link>Contact</a>
    </li>
  `;

  navbar.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const url = e.target.getAttribute("href");
      router.navigate(url);
      e.target.classList.add("active");
      window.scrollTo(0, 0);
      Array.from(navbar.children).forEach((item) => {
        const link = item.querySelector("a");
        if (link.getAttribute("href") !== url) {
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
