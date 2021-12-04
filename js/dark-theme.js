export function activateDarkTheme(iconMoon, iconSun, sections){
    iconMoon.addEventListener("click", () => {
        localStorage.setItem("lightTheme", false);
        iconMoon.classList.add("none");
        iconSun.classList.remove("none");
        sections.forEach(section => {
            section.classList.add("dark");
        });
    })
    iconSun.addEventListener("click", () => {
        localStorage.setItem("lightTheme", true);
        iconSun.classList.add("none");
        iconMoon.classList.remove("none");
        sections.forEach(section => {
            section.classList.remove("dark");
        });
    })
}