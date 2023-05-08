{
    const welcome = () => {
        console.log("Witam! Nie nie, proszę nie ściągaj butów.");
    }

    const toggleBackground = () => {
        const background = document.querySelector(".body");
        const theme = document.querySelector(".header__themeName")
        background.classList.toggle("body--dark");
        theme.innerText = background.classList.contains("body--dark") ? "jasny🌞" : "ciemny🌛"
    }

    const init = () => {
        const buttonChangeTheme = document.querySelector(".js-buttonChangeTheme");
        buttonChangeTheme.addEventListener("click", toggleBackground)

        welcome();
    }

    init();
}