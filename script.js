let themeToggle = document.querySelector(".themeToggle_button");
let homePage = document.querySelector(".home_page");
let mainName = document.querySelector(".main_name");
let tegName = document.querySelector(".teg_name");
let button = document.querySelectorAll(".button");
let portButton = document.querySelector(".portButton");
let buttonName = document.querySelectorAll(".button_name");
let body = document.querySelector("body")
let icon = document.querySelectorAll(".path")

// Проверяем, есть ли сохраненная тема в Local Storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }
});

function applyTheme(theme) {
  if (theme === "dark") {
    themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="46" height="46" class="themeToggle_ico"><path d="M23.976562 3.9785156 A 1.50015 1.50015 0 0 0 22.5 5.5L22.5 8.5 A 1.50015 1.50015 0 1 0 25.5 8.5L25.5 5.5 A 1.50015 1.50015 0 0 0 23.976562 3.9785156 z M 10.902344 9.4042969 A 1.50015 1.50015 0 0 0 9.8574219 11.980469L11.978516 14.101562 A 1.5012202 1.5012202 0 0 0 14.101562 11.978516L11.980469 9.8574219 A 1.50015 1.50015 0 0 0 10.902344 9.4042969 z M 37.050781 9.4042969 A 1.50015 1.50015 0 0 0 36.019531 9.8574219L33.898438 11.978516 A 1.5012202 1.5012202 0 0 0 36.021484 14.101562L38.142578 11.980469 A 1.50015 1.50015 0 0 0 37.050781 9.4042969 z M 24 13C17.942632 13 13 17.942636 13 24C13 30.057364 17.942632 35 24 35C30.057368 35 35 30.057364 35 24C35 17.942636 30.057368 13 24 13 z M 24 16C28.436049 16 32 19.563954 32 24C32 28.436046 28.436049 32 24 32C19.563951 32 16 28.436046 16 24C16 19.563954 19.563951 16 24 16 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5L8.5 25.5 A 1.50015 1.50015 0 1 0 8.5 22.5L5.5 22.5 z M 39.5 22.5 A 1.50015 1.50015 0 1 0 39.5 25.5L42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5L39.5 22.5 z M 13.009766 33.445312 A 1.50015 1.50015 0 0 0 11.978516 33.898438L9.8574219 36.019531 A 1.501221 1.501221 0 1 0 11.980469 38.142578L14.101562 36.021484 A 1.50015 1.50015 0 0 0 13.009766 33.445312 z M 34.943359 33.445312 A 1.50015 1.50015 0 0 0 33.898438 36.021484L36.019531 38.142578 A 1.5012209 1.5012209 0 1 0 38.142578 36.019531L36.021484 33.898438 A 1.50015 1.50015 0 0 0 34.943359 33.445312 z M 23.976562 37.978516 A 1.50015 1.50015 0 0 0 22.5 39.5L22.5 42.5 A 1.50015 1.50015 0 1 0 25.5 42.5L25.5 39.5 A 1.50015 1.50015 0 0 0 23.976562 37.978516 z" fill="#E7E7E7" /></svg>';
    themeToggle.style.backgroundColor = "#3d3d3d";
    homePage.style.backgroundColor = "rgb(32, 32, 32)";
    mainName.style.color = "white";
    tegName.style.color = "white";
    if (portButton != undefined) {
      portButton.style.backgroundColor = "#3d3d3d";
    }
    button.forEach((button) => {
      button.style.backgroundColor = "#3d3d3d";
    });

    buttonName.forEach((buttonName) => {
      buttonName.style.color = "white";
    });
    icon.forEach((icon) => {
      icon.setAttribute("fill", "#E7E7E7")
    })

    body.style.backgroundImage = "url(img/dark.png)";
  } else {
    themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="46" height="46"><path d="M25 4C13.972292 4 5 12.972292 5 24C5 35.027708 13.972292 44 25 44C32.766004 44 39.502746 39.551873 42.810547 33.070312 A 1.50015 1.50015 0 0 0 41.632812 30.896484C32.843153 29.96408 26 22.551125 26 13.5C26 10.888238 26.585599 8.4242842 27.615234 6.1914062 A 1.50015 1.50015 0 0 0 26.355469 4.0664062C25.956343 4.039542 25.505742 4 25 4 z M 24.162109 7.0839844C23.481271 9.1143757 23 11.238294 23 13.5C23 23.235424 29.84153 31.325265 38.960938 33.404297C35.910089 37.92811 30.878133 41 25 41C15.593708 41 8 33.406292 8 24C8 14.880797 15.155394 7.5281505 24.162109 7.0839844 z" fill="#141414" /></svg>';
    themeToggle.style.backgroundColor = "white";
    homePage.style.backgroundColor = "white";
    mainName.style.color = "#141414";
    tegName.style.color = "#141414";
    if (portButton != undefined) {
      portButton.style.backgroundColor = "white";
    }
    button.forEach((button) => {
      button.style.backgroundColor = "white";
    });

    buttonName.forEach((buttonName) => {
      buttonName.style.color = "#141414";
    });

    icon.forEach((icon) => {
      icon.setAttribute("fill", "#141414")
    })

    body.style.backgroundImage = "url(img/light.png)";
  }

  // Сохраняем выбранную тему в Local Storage
  localStorage.setItem("theme", theme);
}