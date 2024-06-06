document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const fechaNacimiento = document.querySelector('input[name="fechaNacimiento"]').value;
    const genero = document.querySelector('input[name="genero"]:checked');

    // Validación de campos
    if (!nombre || !apellido || !fechaNacimiento || !genero) {
      alert("Por favor, llene todos los campos.");
      return;
    }

    // Envío del formulario si la validación es exitosa
    this.submit();
  });
});