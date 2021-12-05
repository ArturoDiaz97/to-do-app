import { getTotalItemsActive } from "./total-items-active.js";

export function updateTotalLeftItems(totalItemsActive, allTodoItems, descriptionContainer){
    totalItemsActive = getTotalItemsActive(allTodoItems);
    descriptionContainer.textContent = totalItemsActive + " items left";
}