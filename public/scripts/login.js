document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validación de email y contraseña
    if (!email || !password) {
      if (!email && !password) {
        alert("Por favor, llene todos los campos.");
      } else if (!email) {
        alert("Falta llenar el campo del email.");
      } else if (!password) {
        alert("Falta llenar el campo de la contraseña.");
      }
    } else {
      // Si la validación es exitosa, envía el formulario
      form.submit();
    }
  });
});