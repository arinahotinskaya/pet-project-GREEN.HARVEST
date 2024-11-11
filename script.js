const form = document.querySelector(".order__form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");

function validateField(field, isValid) {
  if (isValid) {
    field.style.border = "1px solid #3CBC81";
  } else {
    field.style.border = "1px solid #E74A3B";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  if (fullName.value.length < 2) {
    valid = false;
    validateField(fullName, valid);
  } else {
    validateField(fullName, true);
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email.value)) {
    valid = false;
    validateField(email, valid);
  } else {
    validateField(email, true);
  }

  if (comment.value.length > 1024) {
    valid = false;
    validateField(comment, valid);
  } else {
    validateField(comment, true);
  }

  if (valid) {
    form.reset();
    fullName.style.border = "1px solid rgba(20, 20, 20, 0.2)";
    email.style.border = "1px solid rgba(20, 20, 20, 0.2)";
    comment.style.border = "1px solid rgba(20, 20, 20, 0.2)";
  }
});

function toggleMenu() {
  const menu = document.getElementById("burgerMenu");
  const burger = document.querySelector(".header__burger");
  menu.classList.toggle("active");
  burger.classList.toggle("active");
}
