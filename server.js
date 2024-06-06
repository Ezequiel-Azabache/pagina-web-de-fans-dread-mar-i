const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose.connect('mongodb+srv://ezequielazabache:Ezequiel_2003@cluster0.wsf0in2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Añade esta opción para evitar advertencias de deprecación
});

// Rutas estáticas para servir HTML, CSS, imágenes, audios y scripts
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('../fotos', express.static(path.join(__dirname, 'fotos')));
app.use('../audiosAlbums', express.static(path.join(__dirname, 'audiosAlbums')));
app.use('../estilos', express.static(path.join(__dirname, 'estilos')));
app.use('../scripts', express.static(path.join(__dirname, 'scripts')));

// Rutas específicas para cada página HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '1index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tours.html'));
});
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signUp.html'));
});
app.get('/addAlbum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addAlbum.html'));
});
app.get('/editAlbum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'editAlbum.html'));
});
app.get('/sencillos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sencillos.html'));
});

// Rutas específicas para cada álbum
app.get('/album10Años', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'album10Años.html'));
});
app.get('/albumAmores', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumAmores.html'));
});
app.get('/albumcaminaraCaminos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumcaminarasCaminos.html'));
});
app.get('/albumHermanos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumHermanos.html'));
});
app.get('/albumJahguía', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumJahguía.html'));
});
app.get('/albumLaberintos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumLaberintos.html'));
});
app.get('/albumLuz', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumLuz.html'));
});
app.get('/albumTranquilo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumTranquilo.html'));
});
app.get('/albumTransparente', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumTransparente.html'));
});
app.get('/albumVivíendo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumVivíendo.html'));
});
app.get('/albumYo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'albumYo.html'));
});

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)});