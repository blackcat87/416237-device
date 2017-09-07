var button = document.querySelector(".contacts-btn");
var modalContact = document.querySelector(".modal-contact");
var closeContact = document.querySelector(".modal-contact .modal-close");
var nameUser = modalContact.querySelector("[name=name-user]");
var emailUser = modalContact.querySelector("[name=user-email]");
var closeMap = document.querySelector(".modal-map .modal-close");
var modalMap = document.querySelector(".modal-map");
var buttonMap = document.querySelector(".map");
var form = document.querySelector("form");

var storage = localStorage.getItem("name-user");

if (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modalContact.classList.add("modal-show");
    nameUser.focus();
    if (storage) {
      nameUser.value = storage;
      emailUser.focus();
    } else {
      nameUser.focus();
    }
  });
}


form.addEventListener("submit", function (event) {
  if (!nameUser.value || !emailUser.value) {
    event.preventDefault();
    modalContact.classList.add("modal-error");
  } else {
    localStorage.setItem("nameUser", nameUser.value);
  }
});


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

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modalContact.classList.contains("modal-show")) {
      modalContact.classList.remove("modal-show");
    }
  }
});
