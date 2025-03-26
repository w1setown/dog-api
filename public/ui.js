class UI {
  static displayBreedList(breeds) {
    const select = document.getElementById("breed-select");
    Object.keys(breeds).forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed;
      option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
      select.appendChild(option);
    });
  }

  static displayImages(images) {
    this.slideImages = images;
    this.currentSlide = 0;
    const gallery = document.getElementById("dog-gallery");
    gallery.innerHTML = `
            <div class="slideshow-container">
                <img src="${images[0]}" alt="Dog" class="slide-image" id="current-slide">
                <button class="slide-btn prev" onclick="UI.changeSlide(-1)">❮</button>
                <button class="slide-btn next" onclick="UI.changeSlide(1)">❯</button>
                <div class="slide-counter">1 / ${images.length}</div>
            </div>
        `;
  }

  static changeSlide(direction) {
    this.currentSlide += direction;
    if (this.currentSlide >= this.slideImages.length) this.currentSlide = 0;
    if (this.currentSlide < 0) this.currentSlide = this.slideImages.length - 1;

    const slideImage = document.getElementById("current-slide");
    const counter = document.querySelector(".slide-counter");

    slideImage.src = this.slideImages[this.currentSlide];
    counter.textContent = `${this.currentSlide + 1} / ${
      this.slideImages.length
    }`;
  }
}
