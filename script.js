//alert(export module slider.js ok)

"use strict";

let i = 0;
// list gambar di jalur folder refer by index.html
const path = [
  "assets/keyboard.png",
  "assets/mouse.png",
  "assets/monitor.png",
  "assets/member.png",
];
let interval;
// showSlide
function showSlide(index) {
  document.slider.src = path[index];
}
// nextSlide
function nextSlide() {
  i = (i + 1) % path.length;
  showSlide(i);
}
//prevSlide
function prevSlide() {
  i = (i - 1 + path.length) % path.length;
  showSlide(i);
}
//interval
function startSlider() {
  showSlide(i);
  interval = setInterval(nextSlide, 3000);
}
// muat lazy loading dom
window.onload = startSlider;
