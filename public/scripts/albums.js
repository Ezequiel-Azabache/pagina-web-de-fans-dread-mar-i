document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("album");

  const getAlbum = async () => {
    try {
      const response = await axios.get(`/band/${albumId}`);
      renderAlbum(response.data);
    } catch (error) {
      swal({
        title: "Error!",
        text: "Error al cargar el álbum",
        icon: "error",
        confirmButtonText: "Ok",
      }).then(() => {
        window.location.href = "./index.html";
      });
    }
  };

  const renderAlbum = (album) => {
    const div = document.getElementById("view-album");
    const h1 = document.createElement("h1");
    h1.classList.add(
      "text-white",
      "text-5xl",
      "mt-20",
      "mb-4",
      "ml-4",
      "font-bold"
    );
    h1.textContent = album.titulo;
    div.appendChild(h1);
    const p = document.createElement("p");
    p.classList.add("text-white", "mb-4", "ml-4", "w-1/2");
    p.textContent = album.descripcion;
    div.appendChild(p);

    if (album.canciones.length) {
      album.canciones.forEach((cancion, index) => renderSong(cancion, index));
    }
  };

  const renderSong = (cancion, index) => {
    const div = document.getElementById("view-album");
    const songDiv = document.createElement("div");
    songDiv.classList.add("song-item");
    const songTitle = document.createElement("p");
    songTitle.textContent = `${index + 1}. ${cancion.titulo} (${
      cancion.duracion
    })`;
    songDiv.appendChild(songTitle);
    const musicIcon = document.createElement("i");
    musicIcon.classList.add("music-icon");
    musicIcon.addEventListener("click", () =>
      window.open(cancion.url, "_blank")
    );
    songDiv.appendChild(musicIcon);
    div.appendChild(songDiv);
  };

  getAlbum();
});
