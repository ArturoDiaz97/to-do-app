export function activateDarkTheme(iconMoon, iconSun, sections){
    iconMoon.addEventListener("click", () => {
        iconMoon.classList.add("none");
        iconSun.classList.remove("none");
        sections.forEach(section => {
            section.classList.add("dark");
        });
    })
    iconSun.addEventListener("click", () => {
        iconSun.classList.add("none");
        iconMoon.classList.remove("none");
        sections.forEach(section => {
            section.classList.remove("dark");
        });
    })
}