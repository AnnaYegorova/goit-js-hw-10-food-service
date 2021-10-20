import './sass/main.scss';
import data from "./menu.json"
import template from "./templates/photoByArray.hbs"
import refs from "./js/refs"

const {photoList, checkboxBtn} = refs

const result = template(data)
photoList.insertAdjacentHTML("beforeend", result)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const {LIGHT, DARK} = Theme

checkboxBtn.addEventListener("change", changeTheme)

function changeTheme(e){
    const theme = e.target.checked
    if(theme){
        document.querySelector("body").classList.add(DARK)
        document.querySelector("body").classList.remove(LIGHT)
        localStorage.setItem('theme', DARK)
        
    } else {document.querySelector("body").classList.add(LIGHT)
    document.querySelector("body").classList.remove(DARK)
    localStorage.setItem('theme', LIGHT)
  }
}

let theme = localStorage.getItem('theme')

 if(!theme){
     theme = LIGHT
     localStorage.setItem('theme', theme)
     } 
     document.querySelector('body').classList.add(theme)
     checkboxBtn.checked = theme === LIGHT ? false : true


 
