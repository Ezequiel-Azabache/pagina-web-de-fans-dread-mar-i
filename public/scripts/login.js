const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validación de email y contraseña

  // Si la validación es exitosa, envía el formulario
  this.submit();
});
