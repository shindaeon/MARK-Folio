import "../scss/style.scss";
import javascriptLogo from "../assets/javascript.svg";
import viteLogo from "../vite.svg";
import { navBar } from "./components/navbar";
import Router from "./routes.js";
import * as bootstrap from 'bootstrap'

document.querySelector("#app").innerHTML = `
  <nav id="navbar" class="position-sticky fixed-top">
    <div id="navbrand" class="">
      <img src="${javascriptLogo}" class="img-fluid" alt="Javascript Logo" />
    </div>
    <div id="navlinks" class=""></div>
  </nav>
  <div id="main"></div>
  <footer id="footer">Footer</footer>
`;

navBar();
const router = new Router();
router.start();
