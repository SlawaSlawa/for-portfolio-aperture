// -----------BURGER BTN-----------

const bodyEl = document.querySelector("body") as HTMLBodyElement;
const headerEl: HTMLElement | null = document.querySelector(".header");
const burgerBtnEl: HTMLButtonElement | null = document.querySelector(".burger");
const headerListEl: HTMLUListElement | null =
    document.querySelector(".header__list");

if (burgerBtnEl && headerListEl && headerEl) {
    burgerBtnEl.addEventListener("click", function (this: any) {
        if (this.classList.contains("burger--active")) {
            this.classList.remove("burger--active");
            headerListEl.style.right = "-100%";
            headerEl.style.overflow = "hidden";
        } else {
            this.classList.add("burger--active");
            headerListEl.style.right = "0";
            headerEl.style.overflow = "visible";
        }
    });
}

// ------------Validatoin Form
const formEl: HTMLFormElement | null = document.querySelector(".form");
const formInputEl: HTMLInputElement | null =
    document.querySelector("#form-input");
const formErrorMessageEl: HTMLElement | null = document.querySelector(
    ".form__error-message"
);
const formBtn: HTMLButtonElement | null = document.querySelector(".form__btn");

let sendFlag: boolean = false;

if (formInputEl && formErrorMessageEl && formBtn) {
    formInputEl.addEventListener("input", function (this: any) {
        const inputValue = this.value;
        if (inputValue.trim().length < 3) {
            formInputEl.classList.add("form__input--error");
            formErrorMessageEl.style.top = "0";
            sendFlag = false;
            formBtn.disabled = true;
        } else {
            formInputEl.classList.remove("form__input--error");
            formErrorMessageEl.style.top = "-100%";
            sendFlag = true;
            formBtn.disabled = false;
        }
    });
}

if (formEl) {
    formEl.addEventListener("submit", (evt) => {
        evt.preventDefault();
        if (sendFlag && formInputEl) {
            alert(
                "Your message " + formInputEl.value.trim() + " has been sent"
            );
            formInputEl.value = "";
        }
    });
}
