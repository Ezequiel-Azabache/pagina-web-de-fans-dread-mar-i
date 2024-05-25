document.addEventListener("DOMContentLoaded", function() {
    const favoriteRecords = [
        "disco1", "disco2", "disco3", "disco4", "disco5",
        "disco6", "disco7", "disco8", "disco9", "disco10", "disco11"
    ];

    function addFavorites(favorites) {
        const imgs = document.querySelectorAll(".image-grid img");

        imgs.forEach((img) => {
            if (favorites.includes(img.getAttribute('name'))) {
                const icon = document.createElement("div");
                icon.innerHTML = "&#9734;"; // Estrella de favoritos
                icon.classList.add("favorite-icon");
                icon.style.position = 'absolute';
                icon.style.top = '10px';
                icon.style.right = '10px';
                icon.style.fontSize = '24px';
                icon.style.cursor = 'pointer';
                icon.style.color = 'transparent'; // Hacemos el texto transparente
                icon.style.zIndex = '1';
                icon.style.background = 'white'; // Fondo blanco
                icon.style.borderRadius = '50%'; // Borde redondeado para formar un círculo
                icon.style.width = '24px'; // Ancho de la estrella
                icon.style.height = '24px'; // Altura de la estrella
                icon.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'; // Forma de estrella

                img.parentNode.style.position = 'relative'; // Asegura que el contenedor de la imagen sea posicionable
                img.parentNode.appendChild(icon);

                let isFavorite = false;

                icon.addEventListener("click", function(e) {
                    e.preventDefault();
                    isFavorite = !isFavorite;
                    if (isFavorite) {
                        icon.style.background = 'gold'; // Fondo dorado cuando se marca como favorito
                    } else {
                        icon.style.background = 'white'; // Fondo blanco cuando se desmarca como favorito
                    }
                });
            }
        });
    }

    addFavorites(favoriteRecords);
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para validar el nombre ingresado
    function validarNombre(nombre) {
        // Verifica si el nombre es una cadena de texto no vacía
        // y si tiene al menos tres letras del alfabeto
        return typeof nombre === "string" && nombre.trim().length >= 3 && /^[a-zA-Z]+$/.test(nombre);
    }

    // Función para mostrar el mensaje de bienvenida
    function mostrarMensajeBienvenida() {
        let nombre = prompt("Por favor, ingresa tu nombre:");
        
        if (validarNombre(nombre)) {
            // Mostrar el mensaje de bienvenida utilizando Sweet Alert
            Swal.fire({
                title: '¡Bienvenido!',
                text: `¡Bienvenido a la página de fans de Dread Mar-i, ${nombre}!`,
                icon: 'success'
            });
        } else {
            // Mostrar el mensaje de error si el nombre no es válido
            Swal.fire({
                title: 'Error',
                text: 'Por favor, ingresa un nombre válido de al menos tres letras y solo letras del alfabeto.',
                icon: 'error'
            }).then((result) => {
                // Volver a solicitar el nombre si el usuario hace clic en "OK"
                if (result.isConfirmed) {
                    mostrarMensajeBienvenida();
                }
            });
        }
    }

    // Llamar a la función para mostrar el mensaje de bienvenida
    mostrarMensajeBienvenida();
});
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