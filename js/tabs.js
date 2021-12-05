export function agregarFuncionalidadTabs(tabs, listas){
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tab, index) => {
                tab.classList.remove("activo");
                listas[index].classList.remove("activo");
            });
            tab.classList.add("activo");
            listas[index].classList.add("activo");
        })
    });
}