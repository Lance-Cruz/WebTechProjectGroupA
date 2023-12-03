let currentImageIndex = 0;
const images = document.querySelectorAll('.product-image');

function changeImage(step) {
    currentImageIndex += step;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const transformValue = -currentImageIndex * 100;
    document.querySelector('.product-image-container').style.transform = `translateX(${transformValue}%)`;
}