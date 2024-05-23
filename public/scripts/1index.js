alert("¡Bienvenido a la página de fans de Dread Mar-i!");

function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    var icon = document.getElementById("mobile-menu-button").firstElementChild;
    menu.classList.toggle("hidden");

    // Cambia el ícono según el estado del menú
    if (menu.classList.contains("hidden")) {
        icon.className = "bi bi-music-note-list"; // Ícono de música
    } else {
        icon.className = "bi bi-chevron-up"; // Flecha hacia arriba
    }
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

function toggleSubmenuMobile() {
    var submenu = document.getElementById("albums-submenu-mobile");
    var icon = document.getElementById("albums-icon-mobile");
    submenu.classList.toggle("hidden");

    // Cambia la flecha según el estado del submenú móvil
    if (submenu.classList.contains("hidden")) {
        icon.className = "bi bi-chevron-down"; // Flecha hacia abajo
    } else {
        icon.className = "bi bi-chevron-up"; // Flecha hacia arriba
    }
}