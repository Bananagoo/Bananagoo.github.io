// Track the current index for each carousel
let currentIndex = {};

// Initialize the carousel
function initCarousel(carouselId) {
    const images = document.querySelectorAll(`#${carouselId} .carousel-image`);
    if (images.length > 0) {
        images.forEach((img, idx) => {
            img.classList.remove('active');
            if (idx === 0) {
                img.classList.add('active'); // Show the first image
            }
        });
        currentIndex[carouselId] = 0;
    }
}

// Show a specific image in the carousel
function showImage(carouselId, index) {
    const images = document.querySelectorAll(`#${carouselId} .carousel-image`);
    images.forEach((img, idx) => {
        img.classList.toggle('active', idx === index);
    });
    currentIndex[carouselId] = index;
}

// Show the previous image
function prevImage(carouselId) {
    const images = document.querySelectorAll(`#${carouselId} .carousel-image`);
    const newIndex = (currentIndex[carouselId] === 0) ? images.length - 1 : currentIndex[carouselId] - 1;
    showImage(carouselId, newIndex);
}

// Show the next image
function nextImage(carouselId) {
    const images = document.querySelectorAll(`#${carouselId} .carousel-image`);
    const newIndex = (currentIndex[carouselId] === images.length - 1) ? 0 : currentIndex[carouselId] + 1;
    showImage(carouselId, newIndex);
}

// Add event listeners for all carousels
document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-container");
    carousels.forEach(carousel => {
        const carouselId = carousel.getAttribute("id");
        initCarousel(carouselId);

        // Add click events for previous and next buttons
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");
        if (prevButton && nextButton) {
            prevButton.addEventListener("click", () => prevImage(carouselId));
            nextButton.addEventListener("click", () => nextImage(carouselId));
        }
    });
});
