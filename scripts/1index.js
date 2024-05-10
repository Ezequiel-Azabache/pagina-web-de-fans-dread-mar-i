function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}
function toggleSubmenu() {
    var submenu = document.getElementById("albums-submenu");
    var icon = document.getElementById("albums-icon");
    submenu.classList.toggle("hidden");
    // Cambia la flecha según el estado del submenú
    if (submenu.classList.contains("hidden")) {
        icon.className = "bi bi-chevron-down"; // Flecha hacia abajo
    } else {
        icon.className = "bi bi-chevron-up"; // Flecha hacia arriba
    }
}