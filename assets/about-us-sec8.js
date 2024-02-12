let slideIndex__ = 1;
showSlides(slideIndex__);

function plusSlides(n) {
  console.log("forward");

  showSlides((slideIndex__ += n));
}

function currentSlide(n) {
  showSlides((slideIndex__ = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-8_");
  let dots = document.getElementsByClassName("dot-8");
  if (n > slides.length) {
    slideIndex__ = 1;
  }
  if (n < 1) {
    slideIndex__ = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex__ - 1].style.display = "block";
  dots[slideIndex__ - 1].className += " active";
}
