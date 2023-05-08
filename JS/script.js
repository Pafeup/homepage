console.log("Witam! Nie nie, proszę nie ściągaj butów.");

let buttonChangeTheme = document.querySelector(".js-buttonChangeTheme");
let background = document.querySelector(".body");
let theme = document.querySelector(".header__themeName")

buttonChangeTheme.addEventListener("click", () => {
    background.classList.toggle("body--dark");
    
    theme.innerText = background.classList.contains("body--dark") ? "jasny🌞" : "ciemny🌛"
});