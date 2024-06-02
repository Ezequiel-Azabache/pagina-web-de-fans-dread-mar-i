const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2,
  },
  apellido: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(v);
      },
      message: "You must enter a valid email!",
    },
  },
  contraseña: {
    type: String,
    required: true,
  },
  favoritos: {
    type: [String], // Array de favoritos
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

module.exports = router;
