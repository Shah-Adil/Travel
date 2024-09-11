const menuBtn = document.querySelector("#menu-btn");
const menuContent = document.querySelector(".header-item");

menuBtn.onclick = function () {
  menuContent.classList.toggle("active");
  menuBtn.classList.toggle("fa-xmark");
};

window.onscroll = function () {
  menuContent.classList.remove("active");
  menuBtn.classList.remove("fa-xmark");
};

// $('#datepicker').datepicker({
//   uiLibrary: 'bootstrap5'
// });


const plus = () => {
    document.querySelector("#quantity-field").value++;
};

const mina = () => {

  let value = document.querySelector("#quantity-field");
  if (value.value > 1 ) {
    document.querySelector("#quantity-field").value--;
  }

};
