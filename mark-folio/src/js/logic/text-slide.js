function textSlide(){
      const art = ["DIGITAL ART", "TRADITIONAL ART", "ILLUSTRATION", "GRAPHIC DESIGN", "CONCEPT ART"];
      setInterval(() => {
        const text = document.querySelector("#text-slide");
        let i = Math.floor(Math.random() * art.length);
        text.innerHTML = art[i];
      }, 1500);
}

export default textSlide;