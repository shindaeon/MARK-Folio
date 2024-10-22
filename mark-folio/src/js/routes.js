import { homePage } from "./home";
import { aboutPage } from "./about";
import { worksPage } from "./works";
import { contactPage } from "./contact";
import { notFoundPage } from "./404";

class Router {
  constructor() {
    this.routes = {
      "/": homePage,
      "/about": aboutPage,
      "/works": worksPage,
      "/contact": contactPage,
    };
    this.scripts = {
      "/about": "js/about.js",
      "/works": "js/works.js",
    };
    this.notFoundView = notFoundPage;
    this.mainview = document.getElementById("main");
  }

  loadView(viewHTML) {
    this.mainview.innerHTML = viewHTML;
    const path = window.location.pathname;
    if (this.scripts[path]) {
      // Check if the script already exists in the document
      if (!document.querySelector(`script[src="${this.scripts[path]}"]`)) {
        const script = document.createElement("script");
        script.src = this.scripts[path];
        document.body.appendChild(script);
      }
    }
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
