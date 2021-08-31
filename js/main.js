import { agregarFuncionalidadTabs } from "./tabs.js";
import { activateDarkTheme } from "./dark-theme.js";
import { setListenersToItemsCheckboxes } from "./checkbox-mark.js";
import { createTemplateTODO } from "./create-template-todo.js";
import { loadExistingItems } from "./loadItems.js";
import { removeItemsAndGenerateItemsSorted } from "./remove-template-todo.js";
import { loadThemeSaved } from "./load-theme-saved.js";
import { updateTotalLeftItems } from "./total-left-items.js";

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
    const descriptionContainer = d.querySelector(".description-container span");
    let totalItemsActive = 0;

    loadThemeSaved(iconMoon, iconSun, sections);
    
    allTodoItems = loadExistingItems(listaAll, listaActivos, listaCompleted);
    updateTotalLeftItems(totalItemsActive, allTodoItems, descriptionContainer);

    d.addEventListener("DOMContentLoaded", () => {
        setListenersToItemsCheckboxes(d, listaAll, listaCompleted, listaActivos, totalItemsActive, descriptionContainer);

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

            allTodoItems = JSON.parse(localStorage.getItem("allItemsTODO"));

            if (allTodoItems == null) {
                allTodoItems = []
            }
            
            allTodoItems.push(itemAgregado);
            updateTotalLeftItems(totalItemsActive, allTodoItems, descriptionContainer);
            localStorage.setItem("allItemsTODO", JSON.stringify(allTodoItems))
        };
    })

    clearCompletedButton.addEventListener("click", () => {
        let allItems = JSON.parse(localStorage.getItem("allItemsTODO"));
        if (allItems != null) {
            allTodoItems = allItems.filter(item => item.estado != 2);
            updateTotalLeftItems(totalItemsActive, allTodoItems, descriptionContainer);
            removeItemsAndGenerateItemsSorted(listaAll, allTodoItems, 1);
            removeItemsAndGenerateItemsSorted(listaActivos, allTodoItems, 2);
            removeItemsAndGenerateItemsSorted(listaCompleted, allTodoItems, 3);
            localStorage.setItem("allItemsTODO", JSON.stringify(allTodoItems));
        }
    })
    
})(document);