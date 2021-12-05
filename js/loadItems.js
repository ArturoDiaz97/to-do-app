import { removeItemsAndGenerateItemsSorted } from "./remove-template-todo.js";

export function loadExistingItems(listaAll, listaActivos, listaCompleted){
    let items = JSON.parse(localStorage.getItem("allItemsTODO"));
    if (items != null) {
        removeItemsAndGenerateItemsSorted(listaAll, items, 1);
        removeItemsAndGenerateItemsSorted(listaCompleted, items, 3);
        removeItemsAndGenerateItemsSorted(listaActivos, items, 2);
        return items;
    }else{
        return [];
    }

}