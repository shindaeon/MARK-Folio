export const homePage = `
<header class="container p-5">
<div class="row">
      <div class="p-5 col-md-6 col-sm-12 d-flex justify-content-center align-content-center">
            <img fetchpriority="high"
                    srcset="img/works/small/1-small.webp 800w, img/works/medium/1-medium.webp 1100w"
                  src="img/works/small/1-small.webp"
                  alt="Splash Art Render of Wanderer (Genshin Impact)" 
                  class="img-fluid d-block">
      </div>
      <div class="col-12 col-md-6 text-center align-content-center p-2">
            <h1 class="display-4 p-1 text-lima-400" aria-label="Title for Header">ALL EYES ON THE <i>PIECE</i></h1>
            <p class="text-lima-300 p-2">A Freelance Artist based in Nueva Vizcaya, Philippines</p>
            <a href="/about" aria-label="Link to About the Artist Page" class="a-btn">
                  <button class="btn b-primary mt-3">
                  <span class="b-text">MORE ABOUT ME</span>
            </button>
      </a>
      </div>
</div>
</header>

<section class="container-fluid bg-shark-900 p-4">
<div class="row d-flex mb-2">
      <div class="col align-content-center">
            <h2 class="text-shark-300" aria-label="Title for Recent Works">RECENT WORKS</h2>
      </div>
</div>
<div class="row">
      <div class="col d-inline-flex">
            <figure class="c-card">
                  <img  srcset="img/works/small/2024-1-small.webp 800w, img/works/medium/2024-1-medium.webp 1100w"
                        src="img/works/2024/small/2024-1 small.webp" alt="Art of Yechan in a Pajama Suit" class="img-fluid c-card-img">
            </figure>
            <figure class="c-card">
                  <img srcset="img/works/small/2023-3-small.webp 800w, img/works/medium/2023-3-medium.webp 1100w"
                        src="img/works/2024/small/2023-3 small.webp"
                        alt="Art of Yechan playing the Violin" class="img-fluid c-card-img">
            </figure>
            <figure class="c-card">
                  <img srcset="img/works/small/2023-1-small.webp 800w, img/works/medium/2023-1-medium.webp 1100w"
                        src="img/works/small/2023-1 small.webp"
                        alt="Splash Art of Wanderer using his Anemo Powers on the cherry blossoms" class="img-fluid c-card-img">
            </figure>
      </div>
</div>
<div class="row mt-2">
      <div class="col">
            <a href="/works" class="a-btn" aria-label="Link to See More Works">
                  <button class="btn b-secondary float-end d-flex">
                        <span class="b-text align-content-center">SEE
                              MORE WORKS</span>
                  </button>
            </a>
      </div>
</div>
</section>

<section class="container-fluid p-5">
<div class="row">
      <div class="col-sm-12 col-md-7">
            <h2 class="text-lima-400" aria-label="Title for Commission Section">WANNA COMMISSION?</h2>
            <h4 class="text-lima-300">Let me do your ideas.</h4>
            <p class="text-lima-200">You can contact me for commission, and inquiries.</p>
            <a href="/contact" class="a-btn" aria-label="Link to see the artist's contact details"><button class="btn b-primary mt-5"><span
                              class="b-text">CONTACT ME</span></button></a>
      </div>
      <div class="col-sm-12 col-md-5 p-5">
            <img fetchpriority="high"
                  srcset="img/works/small/4-small.webp 800w, img/works/medium/4-medium.webp 1100w"
                  src="img/works/small/4-small.webp"
                  alt="A black and white digital art of a person with a powerful aura" class="img-fluid d-block">
      </div>
</div>
</section>

`