const sliderWrapper = document.querySelector('.customer-slider-wrapper');
const sliderItems = document.querySelectorAll('.customer-image');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');

let currentSlide = 0;

const visibleItems = 4;

function updateSlide() {    
    sliderWrapper.style.transform = `translateX(-${(currentSlide) * (100 / visibleItems)}%)`;
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? sliderItems.length - visibleItems : currentSlide - 1;
    updateSlide();
}

function nextSlide() {
    currentSlide = (currentSlide === sliderItems.length - visibleItems) ? 0 : currentSlide + 1;
    updateSlide();
}

prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

updateSlide();