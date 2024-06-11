class Router {
  constructor() {
    this.routes = {
      "/": "src/views/home.html",
      "/about": "src/views/about.html",
      "/works": "src/views/works.html",
      "/commission": "src/views/commission.html",
    };
    this.notFoundView = "src/views/404.html";
    this.mainview = document.getElementById("main");
  }

  loadView(url) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        this.mainview.innerHTML = html;
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
