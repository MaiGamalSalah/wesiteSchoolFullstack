const carousel = document.querySelector(".image-list"),
    fristImg = carousel.querySelectorAll("img")[0];
arrowIcon = document.querySelectorAll(".slider_wrapper i");
let isDragStart = false;
let f = fristImg.clientWidth + 14;
arrowIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -f : f;
    });

});
const dragStart = (e) => {
    isDragStart = true;
}
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging)

