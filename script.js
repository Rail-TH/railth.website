let themeToggle = document.querySelector(".themeToggle_button")
let homePage = document.querySelector(".home_page")
let mainName = document.querySelector(".main_name")
let tegName = document.querySelector(".teg_name")
let button = document.querySelectorAll(".button")
let portButton = document.querySelector(".portButton")

themeToggle.addEventListener("click", () => {
    if (themeToggle.innerHTML === '<img src="icons/icons8_crescent_moon.svg" alt="" class="themeToggle_ico">') {
        themeToggle.innerHTML=('<img src="icons/icons8_sun.svg" alt="" class="themeToggle_ico">');
        homePage.style.backgroundColor=("white");
        mainName.style.color=("black");
        tegName.style.color=("black");
        button.forEach(button => {
            button.style.backgroundColor=("white");
        })
        portButton.style.backgroundColor=("white");
    }
    else {
        themeToggle.innerHTML=('<img src="icons/icons8_crescent_moon.svg" alt="" class="themeToggle_ico">');
        homePage.style.backgroundColor=("rgb(32, 32, 32)");
        mainName.style.color=("white");
        tegName.style.color=("white");
        button.forEach(button => {
            button.style.backgroundColor=("#3d3d3d");
        })
        portButton.style.backgroundColor=("#3d3d3d");
    }
})