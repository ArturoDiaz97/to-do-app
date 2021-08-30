import { agregarFuncionalidadTabs } from "./tabs.js";
import { activateDarkTheme } from "./dark-theme.js";
import { setListenersToItemsCheckboxes } from "./checkbox-mark.js";
import { createTemplateTODO } from "./create-template-todo.js";
import { loadExistingItems } from "./loadItems.js";
import Utils from "../utils/utils.js";

((d)=>{
    let allTodoItems = [];
    const inputTODO = d.querySelector(".input-container input");
    const listaAll = d.querySelector(".list-container.all");
    const listaActivos = d.querySelector(".list-container.active");
    const listaCompleted = d.querySelector(".list-container.completed");

    allTodoItems = loadExistingItems(listaAll, listaActivos, listaCompleted);

    console.log(allTodoItems);

    d.addEventListener("DOMContentLoaded", () => {
        setListenersToItemsCheckboxes(d, allTodoItems, listaCompleted, listaActivos);
    
        const tabs = d.querySelectorAll(".tab");
        const listas = d.querySelectorAll(".list-container");
        agregarFuncionalidadTabs(tabs, listas);
    
        const iconMoon = d.querySelector(".icon-moon");
        const iconSun = d.querySelector(".icon-sun");
        const sections = d.querySelectorAll("section");
        activateDarkTheme(iconMoon, iconSun, sections);
    })

    inputTODO.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            let itemID = Utils.generateID(24);
            let itemAgregado = createTemplateTODO(d, listaAll, e.target.value, itemID, 1);
            createTemplateTODO(d, listaActivos, e.target.value, itemID, 1);
            e.target.value = "";
            allTodoItems.push(itemAgregado);
            localStorage.setItem("allItemsTODO", JSON.stringify(allTodoItems))
        };
    })
    
})(document);