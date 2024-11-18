const sliderWrapper = document.querySelector('.customer-slider-wrapper');
        const sliderItems = document.querySelectorAll('.customer-image');
        const prevArrow = document.querySelector('.arrow.prev');
        const nextArrow = document.querySelector('.arrow.next');

        let currentSlide = 0;
        const visibleItems = 4;

        function updateSlide() {
            sliderWrapper.querySelector('.customer-slider').style.transform = `translateX(-${currentSlide * (100 / visibleItems)}%)`;
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

        // Carousel Slider
        const carouselSlide = document.querySelector('.carousel-slide');
        const carouselItems = document.querySelectorAll('.slider-item');

        let currentIndex = 0;
        const totalItems = carouselItems.length;
        const itemWidth = carouselItems[0].clientWidth;

        function nextCarouselSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            carouselSlide.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }

        setInterval(nextCarouselSlide, 7000);

        nextCarouselSlide();