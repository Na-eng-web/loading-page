const loading = document.querySelector(".loading");
const background = document.querySelector(".bg");
let value = 0;

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const id = setInterval(() => {
  value++;
  loading.innerText = `${value}%`;
  loading.style.opacity = `${scale(value, 0, 100, 1, 0)}`;
  background.style.filter = `blur(${scale(value, 0, 100, 50, 0)}px)`;
  if (value > 99) {
    clearInterval(id);
  }
}, 100);
