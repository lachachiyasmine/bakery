window.addEventListener("load", function () {
    const images = ["images/photo1.jpg", "images/photo2.jfif"];
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const slider = document.getElementById("slider");
        slider.src = images[currentIndex];
        slider.style.height = document.querySelector(".gallery").offsetHeight + "px"; // Ensure image height matches the gallery
    }

    setInterval(changeImage, 2000); // Change image every 2 seconds
});

function clickAndCollect() {
    alert("La fonction Click & Collect est en cours de développement.");
}
