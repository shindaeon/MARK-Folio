let intervalId = null;

function textSlide() {
  if (window.location.href.indexOf("about") > -1) {
    const art = [
      "DIGITAL ART",
      "TRADITIONAL ART",
      "ILLUSTRATION",
      "GRAPHIC DESIGN",
      "CONCEPT ART",
    ];
    intervalId = setInterval(() => {
      const text = document.querySelector("#text-slide");
      if (text) {
        let i = Math.floor(Math.random() * art.length);
        text.innerText = art[i];
      }
    }, 1500);
  } else if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

// Call textSlide initially
textSlide();