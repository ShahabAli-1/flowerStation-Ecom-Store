const toggleButton = document.getElementById("seemorecard");
const extraContent = document.querySelector(".seemorecard");

toggleButton.addEventListener("click", function () {
  if (extraContent.style.display === "none" || extraContent.style.display === "") {
    extraContent.style.display = "block";
    toggleButton.textContent = "see less";
  } else {
    extraContent.style.display = "none";
    toggleButton.textContent = "see more";
  }
});
