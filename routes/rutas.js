const express = require('express');
const router = express.Router();
const path = require('path');
const Album = require('../models/Album');

// Ruta para la página principal
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', '1index.html'));
});

// Otras rutas para tus archivos HTML
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Login.html'));
});

router.get('/tours', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Tours.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'signUp.html'));
});

router.get('/addAlbum', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'addAlbum.html'));
});

router.get('/editAlbum', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'editAlbum.html'));
});

router.get('/sencillos', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'sencillos.html'));
});

// Rutas específicas para cada álbum
router.get('/album10Años', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'album10Años.html'));
});

// Agrega aquí las rutas específicas para cada álbum restante

// Ruta que devuelve "Hello World!"
router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;