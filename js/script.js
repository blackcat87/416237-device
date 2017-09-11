var button = document.querySelector(".contacts-btn");
var modalContact = document.querySelector(".modal-contact");
var closeContact = document.querySelector(".modal-contact .modal-close");
var nameUser = document.querySelector("[name=name_user]");
var emailUser = document.querySelector("[name=user_email]");
var message = document.querySelector("[name=user_message]");
var closeMap = document.querySelector(".modal-map .modal-close");
var modalMap = document.querySelector(".modal-map");
var buttonMap = document.querySelector(".map");
var form = document.querySelector(".contact-form");
var catalog = document.querySelector(".category");

catalog.addEventListener("focus", function (event) {
  catalog.classList.add("focus-within");

}, true);

catalog.addEventListener("blur", function (event) {
  catalog.classList.remove("focus-within");
}, true);

if (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modalContact.classList.add("modal-show");
    nameUser.focus();
  });
}

if (form) {
  form.addEventListener("submit", function (event) {
    if (!nameUser.value) {
      event.preventDefault();
      nameUser.classList.add("modal-error");
    }
    if (!emailUser.value) {
      event.preventDefault();
      emailUser.classList.add("modal-error");
    }
    if (!message.value) {
      event.preventDefault();
      message.classList.add("modal-error");
    }
  })
};

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
