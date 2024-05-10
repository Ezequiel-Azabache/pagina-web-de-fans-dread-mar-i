// Solicitar la edad del usuario
const edad = parseInt(prompt("¿Qué edad tenes?"), 10);

// Variable para controlar si los botones deben estar deshabilitados
let esMenorDeEdad = false;

// Validar la edad del usuario
if (isNaN(edad)) {
  Swal.fire({
    title: "Error",
    text: "Por favor, ingresa un número válido.",
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  esMenorDeEdad = true; // Tratar como menor de edad si no es un número válido
} else if (edad < 18) {
  Swal.fire({
    title: "No podes comprar entradas",
    text: "Porque sos menor de edad.",
    icon: "warning",
    confirmButtonText: "Aceptar",
  });
  esMenorDeEdad = true; // El usuario es menor de edad
} else {
  Swal.fire({
    title: "Bienvenido",
    text: "Puedes comprar entradas.",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
}

// Cantidad de boletos disponibles para cada lugar
const disponibilidad = {
  brasil: 10,
  argentina: 2000,
  paraguay: 2,
  mexico: 300
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todos los botones
  const buttons = document.querySelectorAll("button");

  if (esMenorDeEdad) {
    // Deshabilitar todos los botones si es menor de edad
    buttons.forEach((button) => {
      button.disabled = true; // Deshabilitar el botón
      button.style.color = "red"; // Cambiar el color del texto a rojo
      button.addEventListener("click", () => {
        Swal.fire({
          title: "Acceso Restringido",
          text: "No puedes interactuar con este botón.",
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
      });
    });
  } else {
    // Agregar eventos de clic para usuarios mayores de edad
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const texto = button.innerText.toLowerCase();
        let mensaje = "";

        if (texto.includes("comprar ticket")) {
          if (texto.includes("brasil")) {
            if (disponibilidad.brasil > 0) {
              disponibilidad.brasil -= 1;
              mensaje = "¡Você já tem sua passagem para o Brasil, espero que goste.!";
            } else {
              mensaje = "Sold Out en Brasil.";
            }
          } else if (texto.includes("argentina, movistar arena")) {
            if (disponibilidad.argentina > 0) {
              disponibilidad.argentina -= 1;
              mensaje = "¡Ya tienes tu ticket para Argentina espero que lo disfrutes!";
            } else {
              mensaje = "Sold Out en Argentina.";
            }
          } else if (texto.includes("paraguay")) {
            if (disponibilidad.paraguay > 0) {
              disponibilidad.paraguay -= 1;
              mensaje = "¡Ya tienes tu ticket para Paraguay espero que lo disfrutes!";
            } else {
              mensaje = "Sold Out en Paraguay.";
            }
          } else if (texto.includes("mexico")) {
            if (disponibilidad.mexico > 0) {
              disponibilidad.mexico -= 1;
              mensaje = "¡Ya tienes tu ticket para México espero que lo disfrutes!";
            } else {
              mensaje = "Sold Out en México.";
            }
          }

          Swal.fire({
            title: "tickets disponibles",
            text: mensaje,
            icon: disponibilidad.brasil > 0 ? "success" : "error",
            confirmButtonText: "Aceptar",
          });
        } else {
          Swal.fire({
            title: "Acción realizada",
            text: "Has hecho clic en el botón.",
            icon: "info",
            confirmButtonText: "Aceptar",
          });
        }
      });
    });
  }
});