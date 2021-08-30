import { agregarFuncionalidadTabs } from "./tabs.js";
import { activateDarkTheme } from "./dark-theme.js";
import { setListenersToItemsCheckboxes } from "./checkbox-mark.js";
import { createTemplateTODO } from "./create-template-todo.js";
import { loadExistingItems } from "./loadItems.js";
import { removeItemsAndGenerateItemsSorted } from "./remove-template-todo.js";
import { loadThemeSaved } from "./load-theme-saved.js";
import Utils from "../utils/utils.js";

((d)=>{
    const iconMoon = d.querySelector(".icon-moon");
    const iconSun = d.querySelector(".icon-sun");
    const sections = d.querySelectorAll("section");

    let allTodoItems = [];
    const inputTODO = d.querySelector(".input-container input");
    const listaAll = d.querySelector(".list-container.all");
    const listaActivos = d.querySelector(".list-container.active");
    const listaCompleted = d.querySelector(".list-container.completed");
    const clearCompletedButton = d.querySelector(".clear-completed-button");

    loadThemeSaved(iconMoon, iconSun, sections);
    
    allTodoItems = loadExistingItems(listaAll, listaActivos, listaCompleted);

    console.log(allTodoItems);

    d.addEventListener("DOMContentLoaded", () => {
        setListenersToItemsCheckboxes(d, listaAll, listaCompleted, listaActivos);
    
        const tabs = d.querySelectorAll(".tab");
        const listas = d.querySelectorAll(".list-container");
        agregarFuncionalidadTabs(tabs, listas);
    
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

    clearCompletedButton.addEventListener("click", () => {
        let allItems = JSON.parse(localStorage.getItem("allItemsTODO"));
        allTodoItems = allItems.filter(item => item.estado != 2);
        removeItemsAndGenerateItemsSorted(listaAll, allTodoItems, 1);
        removeItemsAndGenerateItemsSorted(listaActivos, allTodoItems, 2);
        removeItemsAndGenerateItemsSorted(listaCompleted, allTodoItems, 3);
        localStorage.setItem("allItemsTODO", JSON.stringify(allTodoItems));
    })
    
})(document);