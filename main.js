// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const totalImages = slider.querySelectorAll('img').length;
    const imagesPerView = 4;
    let currentIndex = 0;

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    next.addEventListener('click', () => {
        if (currentIndex < totalImages - imagesPerView) {
            currentIndex++;
            updateSlider();
        }
    });

    function updateSlider() {
        const offset = -currentIndex * (100 / imagesPerView);
        slider.style.transform = `translateX(${offset}%)`;
    }
});
