import { createTemplateTODO } from "./create-template-todo.js";

export function removeItemsAndGenerateItemsSorted(container, allItemsTODO, tipoContainer){
    let itemsActive = [];
    let itemsCompleted = [];
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    allItemsTODO.forEach(item => {
        (item.estado == 1) ?itemsActive.push(item) :itemsCompleted.push(item);
    });
    switch (tipoContainer) {
        case 1: // all items container
            allItemsTODO.forEach(item => {
                createTemplateTODO(document, container, item.valor, item.id, item.estado);
            });
            break;
        case 2: // active items container
            if (itemsActive.length > 0) {
                itemsActive.forEach(item => {
                    createTemplateTODO(document, container, item.valor, item.id, item.estado);
                });
            }
            break;
        case 3: // completed items container
            if (itemsCompleted.length > 0) {
                itemsCompleted.forEach(item => {
                    createTemplateTODO(document, container, item.valor, item.id, item.estado);
                });
            }
            break;
        default:
            break;
    }

}