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
const box = document.querySelectorAll(".box");
const boxes = [
  {
    title: "ERP Solution",
    subTitle: "The Hero of Business Transformation ",
    description:
      "Our ERP solution is the cornerstone of our service offerings, celebrated for its transformative impact on enterprises and MSMEs alike.",
  },
  {
    title: "Business Application ",
    subTitle: "Redefining Future of Business  ",
    description:
      "Our business applications are designed to address a wide range of challenges with customized solutions. By streamlining processes and adapting to evolving market trends,",
  },
  {
    title: "Web Development",
    subTitle: "Crafting experiences that Wow..! ",
    description:
      "Enthusiastic web team create visually stunning, user-friendly websites that position your brand. Our skilled developers are dedicated to meeting your unique needs and delivering exceptional results.",
  },
  {
    title: "Digital Marketing",
    subTitle: "Get Found, Get Leads, Get Sales",
    description:
      "Our enhanced digital marketing strategies are designed to achieve your brand’s marketing objectives with suite of SEO, Social media marketing, Google Ads, content marketing, and email marketing.",
  },
  {
    title: "UI/UX Designing",
    subTitle: "Designing for Impact ",
    description:
      "Our UI/UX designers create intuitive interfaces that enhance user experience, improve customer satisfaction, and drive business growth.",
  },
  {
    title: "Branding",
    subTitle: "Building Your Brand Identity",
    description:
      "We help you develop a strong, memorable brand identity that resonates with your target audience and sets you apart from competitors.",
  },
  {
    title: "WhatsApp API",
    subTitle: "Engage Customers on WhatsApp",
    description:
      " From automated chatbots to personalized campaigns, we provide the tools and expertise to maximize the potential of WhatsApp for your business.",
  },
  {
    title: "Ecommerce Solution",
    subTitle: "Power Your Online Store ",
    description:
      "Our ecommerce solutions provide a robust platform for selling products and services online, offering features like secure payments, inventory management, and marketing tools.",
  },
];

const portData = [
  {
    subTitle:
      "Sygmetiv successfully implemented Odoo ERP for Gulf Crafts, streamlining their operations and enhancing efficiency. This comprehensive solution integrated various business processes,",
  },
  {
    subTitle:
      "Sygmetiv successfully implemented Odoo ERP for Gulf Crafts, streamlining their operations and enhancing efficiency. This comprehensive solution integrated various business processes,",
  },
  {
    subTitle:
      "Sygmetiv successfully implemented Odoo ERP for Gulf Crafts, streamlining their operations and enhancing efficiency. This comprehensive solution integrated various business processes,",
  },
  {
    subTitle:
      "Sygmetiv successfully implemented Odoo ERP for Gulf Crafts, streamlining their operations and enhancing efficiency. This comprehensive solution integrated various business processes,",
  },
  {
    subTitle:
      "Sygmetiv successfully implemented Odoo ERP for Gulf Crafts, streamlining their operations and enhancing efficiency. This comprehensive solution integrated various business processes,",
  },
  {
    subTitle:
      "Sygmetiv successfully implemented Odoo ERP for Gulf Crafts, streamlining their operations and enhancing efficiency. This comprehensive solution integrated various business processes,",
  },
  {
    subTitle:
      "Sygmetiv successfully implemented Odoo ERP for Gulf Crafts, streamlining their operations and enhancing efficiency. This comprehensive solution integrated various business processes,",
  },
];

if (window.innerWidth > 1200) {
  const boxArr = document.querySelectorAll(".row2 > div"); // Selecting all boxes inside row2
  let base = 0; // Initial translateY value
  const scrollStep = 200; // Amount to move in each step (in pixels)
  let scrollInterval;

  const scrollBoxes = () => {
    base += scrollStep; // Add -200px to each box's current translateY

    boxArr.forEach((box) => {
      box.style.transform = `translateY(-${base}px)`; // Apply the transformation
    });

    console.log(`All boxes moved by -${base}px`);

    // If box4 (index 3) is at the top, reset everything
    if (base >= scrollStep * 3) {
      // 3 times scrollStep means box4 is on top
      setTimeout(() => {
        // Reset translateY for all boxes
        boxArr.forEach((box) => {
          box.style.transform = `translateY(0px)`;
        });
        base = 0; // Reset the base value
      }, 2000); // Wait for 1 second before resetting
    }
  };

  box.forEach((box) => {
    box.addEventListener("mouseenter", (box) => {
      boxes.forEach((boxes) => {
        if (boxes.title === box.target.innerText) {
          document.querySelector(".half-box-title").innerText = boxes.title;
          document.querySelector(".box-sub-title").innerText = boxes.subTitle;
          document.querySelector(".description").innerText = boxes.description;
        }
      });
    });
  });

  const startScrolling = () => {
    scrollInterval = setInterval(scrollBoxes, 2000);
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  startScrolling();

  // Stop scrolling when mouse enters the boxes

  const hoverDiv = document.querySelector(".row2");

  hoverDiv.addEventListener("mouseenter", stopScrolling);
  hoverDiv.addEventListener("mouseleave", startScrolling);
}

menuService.addEventListener("mouseover", () => {
  isServiceOpen ? (leftText.style.opacity = 0) : (leftText.style.opacity = 1),
    console.log(isServiceOpen);
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
    carousel.style.maxWidth = `${screenSize}px`;
    // console.log(`${screenSize}px`)
    mainCard.style.minWidth = `${(screenSize * 60) / 100}px`;
    cards.forEach(
      (card) => (card.style.minWidth = `${(screenSize * 40) / 100}px`)
    );
  }
};

const startCarouselLoop = () => {
  const portfolio = document.querySelectorAll(".carousel > div"); // Select all divs in the carousel
  const subTextElements = document.querySelectorAll(".port-sub-text"); // Select all port-sub-text elements
  const carousel = document.querySelector(".carousel"); // Select the entire carousel

  let currentIndex = 0; // Track the current index of the first element
  let firstDivWidth, secondDivWidth; // Variables to store the initial widths

  // Function to reset all elements' display and transform properties
  const resetCarousel = () => {
    portfolio.forEach((element) => {
      element.style.display = "block"; // Make sure all elements are visible
      element.style.transform = "translateX(0px)"; // Reset the transform to initial
      element.style.minWidth = `${secondDivWidth}px`; // Resize all divs to second div's width
    });
    portfolio[0].style.minWidth = `${firstDivWidth}px`; // Give the first div the original width
    carousel.style.transition = "none"; // Remove any transition effect after reset
    carousel.style.transform = "translateX(0px)"; // Reset carousel position
  };

  const animateCarousel = () => {
    if (portfolio.length > 0) {
      const firstElement = portfolio[currentIndex]; // Get the current first element
      const firstSubText = subTextElements[currentIndex]; // Get the corresponding sub-text

      // Store the width of the first (extended) div at the start of the loop
      if (currentIndex === 0 && !firstDivWidth) {
        firstDivWidth = firstElement.offsetWidth; // Store first div's width once
        const secondElement = portfolio[(currentIndex + 1) % portfolio.length]; // Get the second element
        secondDivWidth = secondElement.offsetWidth; // Store second div's width once
      }

      // Set the sub-text for the first element from portData array
      firstSubText.innerText = portData[currentIndex].subTitle;

      // Store the width of the first element
      const firstElementWidth = firstElement.offsetWidth;

      setTimeout(() => {
        // Move the entire carousel by the width of the first element
        carousel.style.transition = "transform 0.8s ease-in-out"; // Smoother transition for the entire carousel
        carousel.style.transform = `translateX(-${firstElementWidth}px)`; // Move the entire carousel to the left

        const nextIndex = (currentIndex + 1) % portfolio.length; // Get the next element in line
        const secondElement = portfolio[nextIndex]; // Get the next element
        const secondSubText = subTextElements[nextIndex]; // Get the corresponding sub-text element

        // Update the text for the second element from portData
        secondSubText.innerText = portData[nextIndex].subTitle;

        // Resize the second element to match the first element's width
        secondElement.style.transition = "width 0.8s ease-in-out"; // Smoother width transition
        secondElement.style.minWidth = `${firstElementWidth}px`;

        // Hide the first element after the transition
        setTimeout(() => {
          firstElement.style.transition = "none"; // Disable transitions for hiding
          firstElement.style.transform = `translateX(-${firstElementWidth}px)`; // Move it out of sight
          firstElement.style.display = "none"; // Now hide it after the move is done

          // Reset the carousel transform to start from the new first element
          carousel.style.transition = "none"; // Disable transition to avoid visual jump
          carousel.style.transform = `translateX(0)`; // Reset carousel position to the new first element

          // Move the current first element to the end of the carousel
          carousel.appendChild(firstElement); // Move the first element to the end

          // Update currentIndex to the next element
          currentIndex = nextIndex;

          // Check if we are at the end of the carousel
          if (currentIndex === 0) {
            // Before restarting, resize all divs
            portfolio.forEach((element) => {
              element.style.minWidth = `${secondDivWidth}px`; // Resize all divs to the second div's stored width
            });
            portfolio[0].style.minWidth = `${firstDivWidth}px`; // Resize the first div to its original width

            // Reset the carousel and all elements before restarting
            resetCarousel(); // Bring all elements back to the default state
            setTimeout(animateCarousel, 1000); // Restart after resetting
          } else {
            // Continue with the next iteration
            setTimeout(animateCarousel, 800); // Shorter delay for a smoother continuous loop
          }

        }, 800); // Timeout matches the transition duration of the carousel movement

      }, 1000); // Delay before the first element starts moving
    }
  };

  animateCarousel(); // Start the carousel loop
};

// Call the function to start the continuous carousel loop
startCarouselLoop();

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
