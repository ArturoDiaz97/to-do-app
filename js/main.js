import { agregarFuncionalidadTabs } from "./tabs.js";
import { activateDarkTheme } from "./dark-theme.js";
import { addItem } from "./add-todo.js";
import { setListenersToItemsCheckboxes } from "./checkbox-mark.js";

((d)=>{
    setListenersToItemsCheckboxes(d);

    const tabs = d.querySelectorAll(".tab");
    const listas = d.querySelectorAll(".list-container");
    agregarFuncionalidadTabs(tabs, listas);

    const iconMoon = d.querySelector(".icon-moon");
    const iconSun = d.querySelector(".icon-sun");
    const sections = d.querySelectorAll("section");
    activateDarkTheme(iconMoon, iconSun, sections)

    const inputTODO = d.querySelector(".input-container input")
    const listaActivos = d.querySelector(".list-container.active")
    const listaAll = d.querySelector(".list-container.all")
    //const listaCompleted = d.querySelector(".list-container.completed")
    addItem(d, inputTODO, listaActivos, listaAll);
    
})(document);