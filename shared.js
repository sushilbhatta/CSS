const backdrop = document.querySelector(".backdrop");
const selectPlanButtons = document.querySelectorAll("#plans .button");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
console.log(selectPlanButtons);
for (i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function (e) {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", closeModal);
modalNoButton.addEventListener("click", closeModal);
function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}
