"use strict";
// -----------BURGER BTN-----------
var bodyEl = document.querySelector("body");
var headerEl = document.querySelector(".header");
var burgerBtnEl = document.querySelector(".burger");
var headerListEl = document.querySelector(".header__list");
if (burgerBtnEl && headerListEl && headerEl) {
    burgerBtnEl.addEventListener("click", function () {
        if (this.classList.contains("burger--active")) {
            this.classList.remove("burger--active");
            headerListEl.style.right = "-100%";
            headerEl.style.overflow = "hidden";
        }
        else {
            this.classList.add("burger--active");
            headerListEl.style.right = "0";
            headerEl.style.overflow = "visible";
        }
    });
}
// ------------Validatoin Form
var formEl = document.querySelector(".form");
var formInputEl = document.querySelector("#form-input");
var formErrorMessageEl = document.querySelector(".form__error-message");
var formBtn = document.querySelector(".form__btn");
var sendFlag = false;
if (formInputEl && formErrorMessageEl && formBtn) {
    formInputEl.addEventListener("input", function () {
        var inputValue = this.value;
        if (inputValue.trim().length < 3) {
            formInputEl.classList.add("form__input--error");
            formErrorMessageEl.style.top = "0";
            sendFlag = false;
            formBtn.disabled = true;
        }
        else {
            formInputEl.classList.remove("form__input--error");
            formErrorMessageEl.style.top = "-100%";
            sendFlag = true;
            formBtn.disabled = false;
        }
    });
}
if (formEl) {
    formEl.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (sendFlag && formInputEl) {
            alert("Your message " + formInputEl.value.trim() + " has been sent");
            formInputEl.value = "";
        }
    });
}
//# sourceMappingURL=main.js.map