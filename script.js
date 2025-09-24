onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // Play music
    bgMusic.currentTime = 0;
    bgMusic.play();
});

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";

    // Stop music
    bgMusic.pause();
    bgMusic.currentTime = 0;
});
