const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoutes = require("./routes/users");
const albumRoutes = require("./Public/indexs");

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a la base de datos
mongoose.connect(
  "mongodb+srv://ezequielazabache:Ezequiel_2003@cluster0.wsf0in2.mongodb.net/plataformaDisco?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/users", userRoutes);
app.use("/album10Años.html", albumRoutes);
app.use("/albumAmores.html", albumRoutes);
app.use("/albumcaminarasCaminos.html", albumRoutes);
app.use("/albumHermanos.html", albumRoutes);
app.use("/albumJahguía.html", albumRoutes);
app.use("/albumLaberintos.html", albumRoutes);
app.use("/albumLuz.html", albumRoutes);
app.use("/albumTranquilo.html", albumRoutes);
app.use("/albumTransparente.html", albumRoutes);
app.use("/albumVivíendo.html", albumRoutes);
app.use("/albumYo.html", albumRoutes);
app.use("/editAlbum.html", editAlbum);
app.use("/", albumRoutes);
app.use("/", albumRoutes);
app.use("/", albumRoutes);
app.use("/", albumRoutes);
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`***server iniciado ${PORT}`);
});
