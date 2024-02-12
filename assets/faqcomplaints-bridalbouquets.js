const leftArrow = document.getElementById('bridalbouquets-left');
const rightArrow = document.getElementById('bridalbouquets-right');
const cardContainer = document.querySelector('.faq-cardcontainer');
const cards = cardContainer.querySelectorAll('.card');

// Initialize card positions
let currentCard = 0;

// Move cards to the left
function moveLeft() {
    currentCard = (currentCard + 1) % cards.length;
    updateCardOrder();
}

// Move cards to the right
function moveRight() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    updateCardOrder();
}

// Update card order and class based on currentCard index
function updateCardOrder() {
    cards.forEach((card, index) => {
        const position = (index - currentCard + cards.length) % cards.length;
        card.style.order = position;
        card.classList.remove('middlecard');
        if (position === 0) {
            card.classList.add('leftcard');
            card.style.opacity = '';
        } else if (position === 1) {
            card.classList.add('middlecard');
            card.style.opacity = '1';
        } else if (position === 2) {
            card.classList.add('rightcard');
            card.style.opacity = '';
        }
    });
}

// Add click event listeners to arrow buttons
leftArrow.addEventListener('click', moveRight);
rightArrow.addEventListener('click', moveLeft);

// Initial card order setup
updateCardOrder();

const toggleButtonbridal = document.getElementById("seemorecardbridal");
const middlecard = document.querySelector(".card.middlecard");
const leftcard = document.querySelector(".leftcard");
const rightcard = document.querySelector(".rightcard");

toggleButtonbridal.addEventListener("click", function () {
    if (toggleButtonbridal.textContent === "see more") {
        middlecard.style.display = "block";
        leftcard.style.display = "block";
        rightcard.style.display = "block";
        toggleButtonbridal.textContent = "see less";
    } else {
        middlecard.style.display = "none";
        toggleButtonbridal.textContent = "see more";
    }
});








