function closetwo() {
  document.querySelector(".menu2").classList.toggle("hide");
}

function closeone() {
  document.querySelector(".menu1").classList.toggle("hide");
}
const show = document.querySelectorAll(".show");
function ani() {
  show.forEach((a) => {
    return a.classList.toggle("ani");
  });
}
