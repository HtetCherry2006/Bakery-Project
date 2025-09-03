let index = 0;
const images = document.querySelectorAll(".slider-image");

function showImage() {
    images.forEach(img => img.style.display = "none");
    images[index].style.display = "block";
}

// Next Image
function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

// Previous Image
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}


setInterval(nextImage, 5000);


showImage();