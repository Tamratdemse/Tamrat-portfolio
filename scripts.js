document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        let currentIndex = 0;

        const showImage = (index) => {
            images.forEach((img, idx) => {
                img.style.display = idx === index ? 'block' : 'none';
            });
        };

        const nextImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        };

        const prevImage = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        };

        carousel.querySelector('.next').addEventListener('click', nextImage);
        carousel.querySelector('.prev').addEventListener('click', prevImage);

        showImage(currentIndex);
    });
});
