import Router from "../routes";

export function buttonConf() {
  const router = new Router();

  // Select all anchor buttons
  const anchorButtons = document.querySelectorAll(".a-btn");

  // Add event listeners to the anchor buttons
  anchorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();  // Prevent the default action
      const url = e.target.getAttribute("href");  // Get the URL from the href attribute

      // Fetch the new page content
      fetch(url)
        .then(response => response.text())
        .then(html => {
          // Update the DOM with the new page content
          document.querySelector('#your-element').innerHTML = html;

          // Navigate to the new URL without reloading the page
          router.navigate(url);
        });
    });
  });
}