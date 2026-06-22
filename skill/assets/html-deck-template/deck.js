const slides = [...document.querySelectorAll(".deck-slide")];
const counter = document.querySelector("[data-deck-counter]");
let activeIndex = 0;

function setSlide(index) {
  activeIndex = Math.min(Math.max(index, 0), slides.length - 1);
  slides.forEach((slide, slideIndex) => {
    slide.hidden = slideIndex !== activeIndex;
    slide.setAttribute("aria-hidden", String(slideIndex !== activeIndex));
  });
  if (counter) counter.textContent = `${activeIndex + 1} / ${slides.length}`;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") setSlide(activeIndex + 1);
  if (event.key === "ArrowLeft" || event.key === "PageUp") setSlide(activeIndex - 1);
  if (event.key === "Home") setSlide(0);
  if (event.key === "End") setSlide(slides.length - 1);
});

document.querySelectorAll("[data-deck-next]").forEach((button) => button.addEventListener("click", () => setSlide(activeIndex + 1)));
document.querySelectorAll("[data-deck-prev]").forEach((button) => button.addEventListener("click", () => setSlide(activeIndex - 1)));

setSlide(0);
