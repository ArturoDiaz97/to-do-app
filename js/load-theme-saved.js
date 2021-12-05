export function loadThemeSaved(iconMoon, iconSun, sections){
    let lightTheme = localStorage.getItem("lightTheme");
    if (lightTheme != null) {
        if (lightTheme.toString() == "true") {
            iconMoon.classList.remove("none");
            iconSun.classList.add("none");
            sections.forEach(section => {
                section.classList.remove("dark");
            });
        }else{
            iconMoon.classList.add("none");
            iconSun.classList.remove("none");
            sections.forEach(section => {
                section.classList.add("dark");
            });
        }
    }
}