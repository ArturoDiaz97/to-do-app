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
})(document);