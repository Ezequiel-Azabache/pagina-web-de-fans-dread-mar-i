const params = new URLSearchParams(window.location.search);
const albumId = params.get("album");

const getInputValues = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const yearOfRelease = document.getElementById("yearOfRelease").value;
  return { title, description, yearOfRelease };
};

const changeAlbum = async (e) => {
  e.preventDefault();
  const objectToSend = getInputValues();

  try {
    await axios.put(`/band/${albumId}`, objectToSend);
    swal({
      title: "Album edited!",
      text: "You modified the album!",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      window.location.href = `./album.html?album=${albumId}`;
    });
  } catch (error) {
    swal({
      title: "Error!",
      text: "There was an error editing the album.",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
};

const form = document.getElementById("edit-album-form");
form.addEventListener("submit", changeAlbum);

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => {
  window.location.href = `./album.html?album=${albumId}`;
});
