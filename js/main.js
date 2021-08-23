import { agregarFuncionalidadTabs } from "./tabs.js";
((d)=>{
    const tabs = d.querySelectorAll(".tab");
    const listas = d.querySelectorAll(".list-container");
    agregarFuncionalidadTabs(tabs, listas);
})(document);