const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.slider-item');

let currentIndex = 0;
const totalItems = carouselItems.length;
const itemWidth = carouselItems[0].clientWidth;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    carouselSlide.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

setInterval(nextSlide, 7000);

nextSlide();