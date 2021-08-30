import { removeItemsAndGenerateItemsSorted } from "./remove-template-todo.js";

export function setListenersToItemsCheckboxes(d, allTodoItems, listaCompleted, listaActivos){
    d.addEventListener("click", (e) => {
        if (e.target.className == "checkbox-item") {
            let textItemContainer = e.target.parentNode.parentNode.parentNode.lastChild.firstChild.firstChild;
            setTodoCompleted(allTodoItems, textItemContainer.id, listaCompleted ,listaActivos)
            if (e.target.checked) {
                textItemContainer.style.textDecorationLine = "line-through";
            }else{
                textItemContainer.style.textDecorationLine = "none";
            }
        }
    })
}

function setTodoCompleted(items, itemID, listaCompleted, listaActivos){
    items.find(item => {
        if (item.id == itemID) {
            if(item.estado == 1){
                item.estado = 2;
            }else{
                item.estado = 1;
            }
            removeItemsAndGenerateItemsSorted(listaActivos, items, 2);
            removeItemsAndGenerateItemsSorted(listaCompleted, items, 3);
        }
    })
    console.log(items);
    localStorage.setItem("allItemsTODO", JSON.stringify(items));
}