import "../scss/style.scss";
import marklogo from "../assets/mark.svg"
import { navBar } from "./components/navbar";
import Router from "./routes.js";
import * as bootstrap from 'bootstrap'
import { buttonConf } from "./components/buttonConfig.js";

document.querySelector("#app").innerHTML = `
  <nav id="navbar" class="position-sticky fixed-top">
    <div id="navbrand" class="">
      <img src="${marklogo}" class="img-fluid" alt="MARK Logo" />
    </div>
    <div id="navlinks" class=""></div>
  </nav>
  <div id="main"></div>
  <footer id="footer">Footer</footer>
`;

navBar();
const router = new Router();
router.start();
setTimeout(() => {
  buttonConf();
}, 500);