document.addEventListener("DOMContentLoaded", function () {
    const scrollingImages = document.querySelector(".faq-images-wrapper");
    const largeImage = document.querySelector(".faq-largeimage");
    const imageWidth = scrollingImages.querySelector("img").clientWidth;
    const gap = 3.611;
    const numImages = scrollingImages.querySelectorAll("img").length;

    // Clone the images and append them to the end
    for (let i = 0; i < numImages; i++) {
        const img = scrollingImages.querySelectorAll("img")[i].cloneNode(true);
        scrollingImages.appendChild(img);
    }

    const totalImagesWidth = (imageWidth + gap) * scrollingImages.querySelectorAll("img").length;
    scrollingImages.style.width = totalImagesWidth + "px"; // Set container width to fit all images

    let currentScrollIndex = 0;
    let isScrolling = false;

    const scrollImages = (index) => {
        if (!isScrolling) {
            isScrolling = true;
            const scrollAmount = (imageWidth + gap) * index;
            scrollingImages.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });

            setTimeout(() => {
                isScrolling = false;
                currentScrollIndex = index;
                updateLargeImage(scrollingImages.querySelectorAll("img")[index].src);
            }, 500); // Adjust the delay as needed
        }
    };

    const scrollLeftBtn = document.querySelector(".scroll-left");
    const scrollRightBtn = document.querySelector(".scroll-right");

    scrollLeftBtn.addEventListener("click", () => {
        currentScrollIndex = (currentScrollIndex - 1 + numImages) % numImages;
        scrollImages(currentScrollIndex);
    });

    scrollRightBtn.addEventListener("click", () => {
        currentScrollIndex = (currentScrollIndex + 1) % numImages;
        scrollImages(currentScrollIndex);
    });

    scrollingImages.addEventListener("scroll", () => {
        const newImageIndex = Math.floor((scrollingImages.scrollLeft + gap) / (imageWidth + gap)) % numImages;
        if (newImageIndex !== currentScrollIndex) {
            currentScrollIndex = newImageIndex;
            updateLargeImage(scrollingImages.querySelectorAll("img")[newImageIndex].src);
        }
    });

    scrollingImages.querySelectorAll("img").forEach((smallImage, index) => {
        smallImage.addEventListener("click", () => {
            scrollImages(index);
        });
    });

    const updateLargeImage = (src) => {
        largeImage.src = src;
    };
});