const slides = document.getElementsByClassName("item");
let activeSlide = 0;
const dots = document.querySelectorAll(".dots li");

function setSlide(activeIndex) {
  for (let index = 0; index < slides.length; index++) {
    if (index === activeIndex) {
      slides[index].classList.remove("displayNone");
      slides[index].classList.add("displayBlock");
      dots[index].classList.add("active");
    } else {
      slides[index].classList.add("displayNone");
      slides[index].classList.remove("displayBlock");
      dots[index].classList.remove("active");
    }
  }
}

function startLoop() {
  activeSlide += 1;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setSlide(activeSlide);
}

function setPreviousSlide() {
  console.log(activeSlide);
  clearInterval(slideInterval);

  activeSlide -= 1;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setSlide(activeSlide);
  startInterval();
}

function setNextSlide() {
  clearInterval(slideInterval);
  activeSlide += 1;
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
  setSlide(activeSlide);
  startInterval();
}

function startInterval(mSeconds) {
    slideInterval = setInterval(startLoop, 2000);
  }

function stopInterval() {
  clearInterval(slideInterval);
  slideInterval = null;
}



let slideInterval = setInterval(startLoop, 2000);
console.log(slideInterval);
