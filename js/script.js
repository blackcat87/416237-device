var button = document.querySelector(".contacts-btn");
var modalContact = document.querySelector(".modal-contact");
var closeContact = document.querySelector(".modal-contact .modal-close");
var closeMap = document.querySelector(".modal-map .modal-close");
var modalMap = document.querySelector(".modal-map");
var buttonMap = document.querySelector(".map");

if (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modalContact.classList.add("modal-show");
  });
}

if (closeContact) {
  closeContact.addEventListener("click", function (event) {
    event.preventDefault();
    modalContact.classList.remove("modal-show");
  });
}

if (buttonMap) {
  buttonMap.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.classList.add("modal-show");
  });
}

if (closeMap) {
  closeMap.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.classList.remove("modal-show");
  });
}
