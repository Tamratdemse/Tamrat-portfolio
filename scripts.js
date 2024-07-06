document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        const videos = carousel.querySelectorAll('video');
        let currentIndex = 0;

        const showMedia = (index) => {
            images.forEach((img, idx) => {
                img.style.display = idx === index ? 'block' : 'none';
            });
            videos.forEach((video, idx) => {
                video.style.display = idx === index ? 'block' : 'none';
            });
        };

        const nextMedia = () => {
            currentIndex = (currentIndex + 1) % (images.length + videos.length);
            showMedia(currentIndex);
        };

        const prevMedia = () => {
            currentIndex = (currentIndex - 1 + (images.length + videos.length)) % (images.length + videos.length);
            showMedia(currentIndex);
        };

        carousel.querySelector('.next').addEventListener('click', nextMedia);
        carousel.querySelector('.prev').addEventListener('click', prevMedia);

        showMedia(currentIndex);
    });
});
