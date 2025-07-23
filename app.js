const slides = document.querySelectorAll(".slide")
var counter = 0;
const totalSlides = slides.length;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
const goNext = () => {
    counter++;
    if (counter >= totalSlides) {
        counter = 0;
    }
    slideImage();
}
const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1;
    }
    slideImage();
}


// IMAGE SLIDER WITH MULTIPLE IMAGE 
const trackMultiple = document.querySelector(".track-multiple");
const multiSlides = document.querySelectorAll(".multiple-slide");

let multiIndex = 0;
const visibleSlides = 3;

const goNextMulti = () => {
    multiIndex++;
    if (multiIndex >= multiSlides.length) {
        multiIndex = 0;
    }
    updateMultipleSlider();
};

const goPrevMulti = () => {
    multiIndex--;
    if (multiIndex < 0) {
        multiIndex = multiSlides.length - visibleSlides;
    }
    updateMultipleSlider();
};
const updateMultipleSlider = () => {
    trackMultiple.style.transform = `translateX(-${multiIndex * 100 / 3}%)`;
};


// image slider with animation mouse hover 
const slider = document.querySelector('.slider-animation');
slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});
slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});



// swiper JS 
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

});