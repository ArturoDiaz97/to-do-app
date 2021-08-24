import { agregarFuncionalidadTabs } from "./tabs.js";
import { activateDarkTheme } from "./dark-theme.js";

((d)=>{
    const tabs = d.querySelectorAll(".tab");
    const listas = d.querySelectorAll(".list-container");
    agregarFuncionalidadTabs(tabs, listas);

    const iconMoon = d.querySelector(".icon-moon");
    const iconSun = d.querySelector(".icon-sun");
    const sections = d.querySelectorAll("section");
    activateDarkTheme(iconMoon, iconSun, sections)

    const inputTODO = d.querySelector(".input-container input")
    inputTODO.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value);
        }
    })
})(document);