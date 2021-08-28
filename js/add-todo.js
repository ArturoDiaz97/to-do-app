import { createTemplateTODO } from "./create-template-todo.js";

export function addItem(d, inputTODO, listaActivos, listaAll){
    let itemFragment = new DocumentFragment();
    inputTODO.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            createTemplateTODO(d, listaActivos, listaAll, itemFragment, e.target);
        };
    })
}