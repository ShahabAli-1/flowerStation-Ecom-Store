let currentIndex = 0;
const images = [
  "../assets/hotel-carousal.png",
  "../assets/carousal-thumbnail.png",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "../assets/hotel-carousal.png",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "../assets/hotel-carousal.png",
];

function selectImage(index) {
  currentIndex = index;
  updateSelectedImage();
}

function updateSelectedImage() {
  const selectedImage = document.getElementById("selected-image");
  selectedImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSelectedImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSelectedImage();
}

// Event listeners for arrow keys navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
});

// Initial image display
updateSelectedImage();
