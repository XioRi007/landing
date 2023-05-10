const carousel = document.querySelector('.drag-n-drop_carousel');
const slides = carousel.querySelectorAll('.carousel_content');
const prevBtn = document.querySelector('#left');
const nextBtn = document.querySelector('#right');
let currentPosition = 0;
prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition -= slides[0].offsetWidth; // ширина слайда
    } else {
        currentPosition = (slides.length - 1) * slides[0].offsetWidth;
    }
    carousel.style.transform = `translateX(-${currentPosition}px)`;
});

nextBtn.addEventListener('click', () => {
    if (currentPosition < (slides.length - 1) * slides[0].offsetWidth) {
        currentPosition += slides[0].offsetWidth;
    } else {
        currentPosition = 0;
    }
    carousel.style.transform = `translateX(-${currentPosition}px)`;
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});