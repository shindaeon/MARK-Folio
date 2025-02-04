import "../scss/style.scss";
import marklogo from "../assets/mark.svg";
import { navBar } from "./components/navbar";
import Router from "./routes.js";
import * as bootstrap from "bootstrap";

document.querySelector("#app").innerHTML = `
  <nav class="navbar navbar-expand-sm navbar-dark bg-shark-900">
      <div class="container-fluid">
            <a class="navbar-brand m-2" href="/" aria-label="Link to Home Page">
                  <img src="${marklogo}" class="img-fluid" width="30" alt="MARK Logo" />
            </a>
            <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                  <i class="fi fi-bs-menu-burger"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav
                        ms-auto" id="navlinks">
                  </ul>
            </div>
      </div>
      </nav>
  <div id="main"></div>
  <footer>
  <div class="container-fluid p-5">
  <div class="row">
        <div class="col-md-4 col-sm-12 col-12">
              <object data="img/mark.svg" width="60" height="60" aria-label="Logo of the Artist's Art Brand"></object>
              <div class="mt-3 mb-3 me-3">
                    <h5 aria-label="Art brand name of the Artist">ART BY MARK ©️</h5>
                    <a href="mailto:artbymark.business@gmail.com" aria-label="A link to the E-mail of the Artist"><i
                                class="fi-bs-envelope me-2"></i>artbymark.business@gmail.com</a>
                    <address aria-label="Address of the Artist"><i class="fi fi-bs-marker me-2"></i>Bayombong, Nueva Vizcaya, Philippines 3700
                    </address>
                    <p class="fst-italic" aria-label="Copyright Statement of the works listed on this website">
                          All works displayed are owned by Dion Mark Corales,
                          unauthorized distribution is strictly prohibited.
                    </p>
              </div>
        </div>

        <div class="col-md-4 col-sm-6 col-6 ps-3">
              <h5 aria-label="A list of Pages of the Website">PAGES</h5>
              <ul class="list-unstyled ps-2">
                    <li><a href="/" aria-label="A link to Home Page">Home</a></li>
                    <li><a href="/works" aria-label="A link to Works Page">Works</a></li>
                    <li><a href="/contact" aria-label="A link to Contact Page">Contact</a></li>
                    <li><a href="/about" aria-label="A link to About Page">About</a></li>
              </ul>
        </div>

        <div class="col-md-4 col-sm-6 col-6 ps-3">
              <h5 aria-label="A list of Social Medias of the Artist">SOCIALS</h5>
              <ul class="list-unstyled ps-2">
                    <li>
                          <a href="https://www.instagram.com/artbymark.rar/" aria-label="A link to the artist's Instagram Page" target="_blank">
                                <i class="fi fi-brands-instagram me-2"></i> Instagram
                          </a>
                    </li>
                    <li>
                          <a href="https://facebook.com/artbymark1210" aria-label=""A link to the artist's Facebook Page target="_blank">
                                <i class="fi fi-brands-facebook me-2"></i> Facebook
                          </a>
                    </li>
              </ul>
        </div>
  </div>
</div>
  </footer>
`;
const router = new Router();
router.start();
navBar();
