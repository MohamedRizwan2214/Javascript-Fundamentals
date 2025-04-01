const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
// console.log(thumbnails)
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = thumbnail.src;
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
