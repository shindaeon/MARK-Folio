class Router {
  constructor() {
    this.routes = {
      "/": "views/home.html",
      "/about": "views/about.html",
      "/works": "views/works.html",
      "/contact": "views/contact.html",
    };
    this.scripts = {
      "/about": "js/about.js",
      "/works": "js/works.js",
    };
    this.notFoundView = "views/404.html";
    this.mainview = document.getElementById("main");
  }

  loadView(url) {
    console.log(url);
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        this.mainview.innerHTML = html;
      })
      .then(() => {
        const path = window.location.pathname;
        if (this.scripts[path]) {
          // Check if the script already exists in the document
          if (!document.querySelector(`script[src="${this.scripts[path]}"]`)) {
            const script = document.createElement("script");
            script.src = this.scripts[path];
            document.body.appendChild(script);
          }
        }
      })
      .catch(() => {
        fetch(this.notFoundView)
          .then((response) => response.text())
          .then((html) => {
            this.mainview.innerHTML = html;
          });
      });
  }

  navigate(pathname) {
    if (this.routes[pathname]) {
      history.pushState({}, null, pathname);
      this.loadView(this.routes[pathname]);
    } else {
      this.loadView(this.notFoundView);
    }
  }

  start() {
    window.addEventListener("popstate", () => {
      this.navigate(window.location.pathname);
    });

    document.addEventListener("DOMContentLoaded", () => {
      this.navigate(window.location.pathname);
    });
  }
}

export default Router;
