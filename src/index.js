import css from "./styles.css";

const refs = {
  input: document.querySelector(".theme-switch__toggle"),
  body: document.querySelector("body"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.input.addEventListener("change", onChangeTheme);

checkTheme();

function checkTheme() {
  if (localStorage.getItem('darkThemeSettings')) {
  refs.body.classList.add(Theme.DARK);
  refs.input.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
  refs.input.checked = false;
}
}

function onChangeTheme() {
  if (refs.input.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    console.log(refs.input.checked);

    localStorage.setItem('darkThemeSettings', JSON.stringify(Theme.DARK))
  }
  else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
localStorage.removeItem('darkThemeSettings')
  }
  
};
