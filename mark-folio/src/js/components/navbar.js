import Router from '../routes.js';

export function navBar(){
  const router = new Router(); // Create a new Router instance
  const navbar = document.querySelector('#navbar');
  navbar.innerHTML = `
    <a href="/" data-link>Home</a>
    <a href="/about" data-link>About</a>
    <a href="/works" data-link>Works</a>
    <a href="/commission" data-link>Commission</a>
  `;

  navbar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const url = e.target.getAttribute('href');
      router.navigate(url); // Call navigate on the router instance
    }
  });
}