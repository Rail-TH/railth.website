let themeToggle = document.querySelector(".themeToggle_button")
let homePage = document.querySelector(".home_page")
let mainName = document.querySelector(".main_name")
let tegName = document.querySelector(".teg_name")
let button = document.querySelectorAll(".button")
let portButton = document.querySelector(".portButton")
let buttonName = document.querySelectorAll(".button_name")

themeToggle.addEventListener("click", () => {
    if (themeToggle.innerHTML === '<img src="icons/icons8_sun.svg" alt="" class="themeToggle_ico">') {
        themeToggle.innerHTML=('<img src="icons/icons8_crescent_moon.svg" alt="" class="themeToggle_ico">');
        homePage.style.backgroundColor=("white");
        portButton.style.backgroundColor=("white");
        buttonName.style.color=("black");
    }
    else {
        themeToggle.innerHTML=('<img src="icons/icons8_sun.svg" alt="" class="themeToggle_ico">');
        homePage.style.backgroundColor=("rgb(32, 32, 32)");
        portButton.style.backgroundColor=("#3d3d3d");
        buttonName.style.color=("white");
    }
})