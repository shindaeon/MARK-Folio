export function Footer() {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
  <div class="container-fluid p-5">
      <div class="row">
            <div class="col-md-4 col-sm-12 col-12">
                  <object data="img/mark.svg" width="60" height="60"></object>
                  <div class="mt-3 mb-3 me-3">
                        <h5>ART BY MARK ©️</h5>
                        <a href="mailto:artbymark.business@gmail.com"><i
                                    class="fi-bs-envelope me-2"></i>artbymark.business@gmail.com</a>
                        <address><i class="fi fi-bs-marker me-2"></i>Bayombong, Nueva Vizcaya, Philippines 3700
                        </address>
                        <p class="fst-italic">
                              All works displayed are owned by Dion Mark Corales,
                              unauthorized distribution is strictly prohibited.
                        </p>
                  </div>
            </div>

            <div class="col-md-4 col-sm-6 col-6 ps-3">
                  <h5>PAGES</h5>
                  <ul class="list-unstyled ps-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="/works">Works</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                  </ul>
            </div>

            <div class="col-md-4 col-sm-6 col-6 ps-3">
                  <h5>SOCIALS</h5>
                  <ul class="list-unstyled ps-2">
                        <li>
                              <a href="https://www.instagram.com/artbymark.rar/" target="_blank">
                                    <i class="fi fi-brands-instagram me-2"></i> Instagram
                              </a>
                        </li>
                        <li>
                              <a href="https://facebook.com/artbymark1210" target="_blank">
                                    <i class="fi fi-brands-facebook me-2"></i> Facebook
                              </a>
                        </li>
                  </ul>
            </div>
      </div>
</div>
  `;
}
