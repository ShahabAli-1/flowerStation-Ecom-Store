let slideIndex_ = 1;
showSlides(slideIndex_);

function plusSlides(n) {
  showSlides((slideIndex_ += n));
}

function currentSlide(n) {
  showSlides((slideIndex_ = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-hotel");
  let dots = document.getElementsByClassName("dot-hotel");
  if (n > slides.length) {
    slideIndex_ = 1;
  }
  if (n < 1) {
    slideIndex_ = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_ - 1].style.display = "block";
  dots[slideIndex_ - 1].className += " active";
}
