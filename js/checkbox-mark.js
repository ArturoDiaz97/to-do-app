export function setListenersToItemsCheckboxes(d){
    d.addEventListener("click", (e) => {
        if (e.target.className == "checkbox-item") {
            let textItemContainer = e.target.parentNode.parentNode.parentNode.lastChild.firstChild.firstChild;
            if (e.target.checked) {
                textItemContainer.style.textDecorationLine = "line-through";
            }else{
                textItemContainer.style.textDecorationLine = "none";
            }
        }
    })
}