const carousel = document.querySelector(".carousel");
const innerCarousel = document.querySelector(".main-card");
const mainCard = document.querySelector(".main-card");
const cards = document.querySelectorAll(".card");
const handberger = document.querySelector(".handberger-group");
const menu = document.querySelector(".menu");
let isHandbergerOpen = false;
let isServiceOpen = false;
const menuService = document.querySelector(".menu-service");
const leftText = document.querySelector(".menuLeft");

menuService.addEventListener("click", () => {
  isServiceOpen
    ? leftText.style.opacity= 0
    : leftText.style.opacity= 1,  
    console.log(isServiceOpen)
  isServiceOpen = !isServiceOpen;
});

handberger.addEventListener(
  "click",
  () => (
    console.log("clicked"),
    isHandbergerOpen
      ? menu.classList.add("display")
      : menu.classList.remove("display"),
    (isHandbergerOpen = !isHandbergerOpen)
  )
);

const setMaxWidth = () => {
  if (window.innerWidth < 768) {
    const screenSize = window.innerWidth;
    console.log(screenSize);
    carousel.style.maxWidth = `${screenSize}px`;
    // console.log(`${screenSize}px`)
    mainCard.style.minWidth = `${(screenSize * 60) / 100}px`;
    cards.forEach(
      (card) => (card.style.minWidth = `${(screenSize * 40) / 100}px`)
    );
  }
};

function toggleDisplayClass() {
  const tabViewportWidth = 768; // Define your tab viewport width threshold
  const serviceWrapper = document.querySelector(".service-wrapper");
  const dServiceWrapper = document.querySelector(".d-service-wrapper");
  const footer = document.querySelector(".footer");
  const Dfooter = document.querySelector(".d-footer");
  const heroBtn = document.querySelectorAll(".hero-btn");
  const aboutImg = document.querySelector(".about-img");

  // Get the current viewport width
  const viewportWidth = window.innerWidth;

  // Check the conditions and toggle the "display" class
  if (viewportWidth > tabViewportWidth) {
    // If viewport is greater than tab, add "display" class to service-wrapper
    serviceWrapper.classList.add("display");
    dServiceWrapper.classList.remove("display"); // Make sure it's removed from the other element
    footer.classList.add("display");
    Dfooter.classList.remove("display");
    heroBtn[1].classList.add("display");
    heroBtn[0].classList.remove("display");
    // aboutImg.style.display = "block";
  } else {
    // If viewport is smaller than or equal to tab, add "display" class to d-service-wrapper
    dServiceWrapper.classList.add("display");
    serviceWrapper.classList.remove("display"); // Remove it from the other element
    Dfooter.classList.add("display");
    footer.classList.remove("display");
    heroBtn[0].classList.add("display");
    heroBtn[1].classList.remove("display");
    // aboutImg.style.display = "none";

    // aboutImg.classList.add("display");
  }
}

// Run the function initially to set the correct class based on the current viewport
toggleDisplayClass();
window.addEventListener("resize", toggleDisplayClass);

// Optionally, listen for window resize events and update the classes dynamically
// window.addEventListener('resize', toggleDisplayClass);

setMaxWidth();
window.addEventListener("resize", setMaxWidth);
