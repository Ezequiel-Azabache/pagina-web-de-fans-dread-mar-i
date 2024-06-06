const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

// Agregar un álbum
router.post('/', async (req, res) => {
  try {
    const album = new Album(req.body);
    await album.save();
    res.status(201).json(album);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Editar un álbum
router.put('/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!album) return res.status(404).json({ message: 'Álbum no encontrado' });
    res.json(album);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Agregar una canción
router.post('/:id/song', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) return res.status(404).json({ message: 'Álbum no encontrado' });
    album.canciones.push(req.body);
    await album.save();
    res.status(201).json(album);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una canción
router.delete('/:id/song/:songId', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) return res.status(404).json({ message: 'Álbum no encontrado' });
    album.canciones.id(req.params.songId).remove();
    await album.save();
    res.json(album);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todos los álbumes
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener la información de un álbum específico
router.get('/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) return res.status(404).json({ message: 'Álbum no encontrado' });
    res.json(album);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un álbum
router.delete('/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (!album) return res.status(404).json({ message: 'Álbum no encontrado' });
    res.json({ message: 'Álbum eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;