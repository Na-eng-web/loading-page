let value = 0;
const a = document.querySelector(".abc");
const b = document.querySelector(".bg");
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const id = setInterval(()=>{
  value++;
  a.innerText = `${value}%`;
  // a.style.opacity = `${scale(value, 0, 100, 1, 0)}`;
  b.style.filter = `blur(${scale(value, 0, 100, 25, 0)}px)`;


  if(value>=90){
    a.classList.add("xyz");
    a.classList.remove("abc");
  }
  if(value==100){
    clearInterval(id);
  }
},100)