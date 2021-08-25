export function addItem(d, inputTODO, listaActivos, listaAll){
    let itemFragment = new DocumentFragment();
    inputTODO.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
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
            $itemText.textContent = e.target.value;

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
            let itemFramentClone = itemFragment.cloneNode(true);


            listaActivos.appendChild(itemFragment);
            listaAll.appendChild(itemFramentClone);

            e.target.value = "";
        };
    })
}