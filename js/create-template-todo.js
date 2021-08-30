export function createTemplateTODO(d, container, itemValor, itemID, estado){
    let itemFragment = new DocumentFragment();

    let $inputCheckboxContainer = d.createElement("div");
    $inputCheckboxContainer.classList.add("input-checkbox-container");
    $inputCheckboxContainer.classList.add("item")
    
    let $checkboxContainer = d.createElement("div");
    $checkboxContainer.classList.add("checkbox-container");
    
    let $checkBoxCircle = d.createElement("label");
    $checkBoxCircle.classList.add("checkbox-circle");
    
    let $input = d.createElement("input");
    $input.classList.add("checkbox-item");
    $input.type = "checkbox";
    
    let $checkboxText = d.createElement("span");
    $checkboxText.classList.add("checkbox-text");
    let $checkboxCircleCenter = d.createElement("div");
    $checkboxCircleCenter.classList.add("checkbox-circle-center");
    
    $checkBoxCircle.appendChild($input);
    $checkBoxCircle.appendChild($checkboxText);
    $checkBoxCircle.appendChild($checkboxCircleCenter);
    
    $checkboxContainer.appendChild($checkBoxCircle); // se armo el checkbox
    
    let $inputContainer = d.createElement("div");
    $inputContainer.classList.add("input-container");
    
    let $textIconContainer = d.createElement("div");
    $textIconContainer.classList.add("text-icon-container");
    
    let $itemText = d.createElement("div");
    $itemText.classList.add("item-text");
    $itemText.id = itemID;
    $itemText.textContent = itemValor;

    if (estado == 1) {
        $input.checked = false;
        $itemText.style.textDecorationLine = "none";
    } else if(estado == 2){
        $input.checked = true;
        $itemText.style.textDecorationLine = "line-through"
    }
    
    let $icon = d.createElement("img");
    $icon.classList.add("icon");
    $icon.src = "assets/img/icon-cross.svg";
    $icon.alt = "cross-icon";
    
    $textIconContainer.appendChild($itemText);
    $textIconContainer.appendChild($icon);
    
    $inputContainer.appendChild($textIconContainer); // se armo el input
    
    $inputCheckboxContainer.appendChild($checkboxContainer);
    $inputCheckboxContainer.appendChild($inputContainer);
    
    itemFragment.appendChild($inputCheckboxContainer);
    
    container.appendChild(itemFragment);

    let textoAgregado = itemValor;

    return {
        id: itemID,
        valor: textoAgregado,
        estado: estado
    };
}
