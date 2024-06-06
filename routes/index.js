const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/rutas'); // Importa el enrutador de rutas

const app = express();
const port = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose.connect('mongodb+srv://ezequielazabache:Ezequiel_2003@cluster0.wsf0in2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Añade esta opción para evitar advertencias de deprecación
});

// Middleware
app.use(cors());

// Rutas estáticas para servir HTML, CSS, imágenes, audios y scripts
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/fotos', express.static(path.join(__dirname, 'fotos')));
app.use('/audiosAlbums', express.static(path.join(__dirname, 'audiosAlbums')));
app.use('/estilos', express.static(path.join(__dirname, 'estilos')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

// Usar el enrutador de rutas
app.use('/', routes);

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});