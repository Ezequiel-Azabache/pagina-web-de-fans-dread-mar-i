// Función para validar la edad del usuario
function isAgeValid(age) {
  return !isNaN(age) && age >= 0 && age <= 100;
}

// Solicitar la edad del usuario
let edad;
while (!isAgeValid(edad)) {
  edad = parseInt(prompt("Por favor, ingresa tu edad (entre 0 y 100):"), 10);
}

// Variable para controlar si los botones deben estar deshabilitados
const esMenorDeEdad = edad < 18;

// Mostrar mensaje de bienvenida si es mayor de edad
if (!esMenorDeEdad) {
  Swal.fire({
    title: "¡Bienvenido!",
    text: "Ya puedes comprar tus tickets.",
    icon: "success",
    confirmButtonText: "Aceptar"
  }).then(() => {
    // Mostrar el contenido de la web
    mostrarContenidoWeb();
  });
} else {
  Swal.fire({
    title: "Acceso restringido",
    text: "Eres menor de edad. Puedes acceder al contenido de la página, pero debes ser mayor de edad para comprar entradas.",
    icon: "warning",
    confirmButtonText: "Aceptar"
  }).then(() => {
    // Mostrar el contenido de la web
    mostrarContenidoWeb();
  });
}

// Función para mostrar el contenido de la web
function mostrarContenidoWeb() {
  // Aquí puedes agregar cualquier lógica adicional para mostrar el contenido de la web si es necesario
  document.getElementById("contenido").style.display = "block"; // Ejemplo de mostrar contenido oculto
}

// Objeto para almacenar la disponibilidad de entradas
const disponibilidad = {
  argentina: 2000,
  paraguay: 2,
  bolivia: 300,
  brasil: 10,
  usa: 0,
  mexico: 300
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[type='button']");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const location = button.dataset.location;

      // Verificar si el usuario es menor de edad
      if (esMenorDeEdad) {
        event.preventDefault();
        mostrarAccesoRestringido();
        return;
      }

      // Obtener la disponibilidad actualizada de entradas
      let availableTickets = disponibilidad[location];

      // Verificar si hay entradas disponibles
      if (availableTickets > 0) {
        updateTicketAvailability(location, 1);
        availableTickets = disponibilidad[location];

        Swal.fire({
          title: "Compra exitosa",
          text: `¡Ya tienes tu ticket para ${location}! Quedan ${availableTickets} entradas disponibles.`,
          icon: "success",
          confirmButtonText: "Aceptar"
        }).then(() => {
          if (availableTickets === 0) {
            mostrarSoldOut(location);
            marcarComoAgotado(button);
          }
        });
      } 
    });
  });
});

// Función para actualizar la disponibilidad de entradas
function updateTicketAvailability(location, quantity) {
  if (disponibilidad[location] >= quantity) {
    disponibilidad[location] -= quantity;
    return true;
  }
  return false;
}

// Función para mostrar el mensaje de acceso restringido
function mostrarAccesoRestringido() {
  Swal.fire({
    title: "Acceso restringido",
    text: "Eres menor de edad. Puedes acceder al contenido de la página, pero debes ser mayor de edad para comprar entradas.",
    icon: "warning",
    confirmButtonText: "Aceptar"
  });
}

// Función para mostrar el mensaje de sold out
function mostrarSoldOut(location) {
  Swal.fire({
    title: "Sold Out",
    text: `Lo sentimos, las entradas para ${location} se han agotado.`,
    icon: "error",
    confirmButtonText: "Aceptar"
  });
}

// Función para marcar un botón como agotado
function marcarComoAgotado(button) {
  const soldOutIcon = button.querySelector(".sold-out-icon");
  soldOutIcon.style.display = "inline";
  button.disabled = true;
  button.querySelector("span:first-child").textContent = "Sold Out";
}