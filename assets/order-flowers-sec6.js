// const carouselContainer = document.querySelector(".carousel-container");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const carouselItems = document.querySelectorAll(".carousel-item");

// let currentIndex = 0;

// prevBtn.addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//   updateCarousel();
// });

// nextBtn.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   updateCarousel();
// });

// function updateCarousel() {
//   carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// updateCarousel();

// const dots = document.querySelectorAll(".dot");

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     currentIndex = index;
//     updateCarousel();
//     updateActiveDot();
//   });
// });

// function updateActiveDot() {
//   dots.forEach((dot, index) => {
//     if (index === currentIndex) {
//       dot.classList.add("active-dot");
//     } else {
//       dot.classList.remove("active-dot");
//     }
//   });
// }

// updateActiveDot(); // Call this after creating dot listeners to set initial active dot

// document.addEventListener("DOMContentLoaded", function () {
//   const prevBtns = document.querySelectorAll(".prevBtn");
//   const nextBtns = document.querySelectorAll(".nextBtn");

//   const dots = document.querySelectorAll(".dot");

//   let currentIndex = 0;

//   prevBtns.forEach((prevBtn) => {
//     prevBtn.addEventListener("click", () => {
//       currentIndex =
//         (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//       updateCarousel();
//       updateActiveDot();
//     });
//   });

//   nextBtns.forEach((nextBtn) => {
//     nextBtn.addEventListener("click", () => {
//       currentIndex = (currentIndex + 1) % carouselItems.length;
//       updateCarousel();
//       updateActiveDot();
//     });
//   });

//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       currentIndex = index;
//       updateCarousel();
//       updateActiveDot();
//     });
//   });

//   function updateCarousel() {
//     const carouselContainer = document.querySelector(".carousel-container");
//     carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//   }

//   function updateActiveDot() {
//     dots.forEach((dot, index) => {
//       if (index === currentIndex) {
//         dot.classList.add("active-dot");
//       } else {
//         dot.classList.remove("active-dot");
//       }
//     });
//   }

//   // Call this after creating dot listeners to set initial active dot
//   updateActiveDot();

//   // Rest of your carousel JavaScript code

//   updateCarousel();
// });

document.addEventListener("DOMContentLoaded", function () {
  const prevBtns = document.querySelectorAll(".nav-btn#prevBtn");
  const nextBtns = document.querySelectorAll(".nav-btn#nextBtn");
  const dots = document.querySelectorAll(".dot");
  const carouselContainer = document.querySelector(".carousel-container");

  let currentIndex = 0;

  prevBtns.forEach((prevBtn) => {
    prevBtn.addEventListener("click", () => {
      if (currentIndex == 0) {
        console.log("Previous Click");
      } else {
        // currentIndex =
        //   (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        currentIndex = (currentIndex - 1) % 2;
        updateCarousel();
        updateActiveDot();
      }
    });
  });

  nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener("click", () => {
      if (currentIndex == 1) {
        console.log("Next Clicked");
        // console.log(carouselItems);
      } else {
        // currentIndex = (currentIndex + 1) % carouselItems.length;
        currentIndex = (currentIndex + 1) % 2;
        updateCarousel();
        updateActiveDot();
      }
    });
  });

  // dots.forEach((dot, index) => {
  //   dot.addEventListener("click", () => {
  //     currentIndex = index;
  //     updateCarousel();
  //     updateActiveDot();
  //   });
  // });

  function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function updateActiveDot() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }

  // Call this after creating dot listeners to set initial active dot
  updateActiveDot();
});
