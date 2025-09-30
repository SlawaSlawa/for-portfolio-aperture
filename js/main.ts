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
