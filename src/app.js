const express = require ("express");
const path = require ("path");
const app = express();

// Registrar como publica la carpeta public

app.use(express.static(path.join(__dirname, "../public")));
app.use("/prefijo", express.static(path.join(__dirname, "../publica")));

// Registrar carpetas estaticas con "prefijos"
app.use("/desktop", express.static("desktop"));
app.use("/mobile", express.static("mobile"));

app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal");
});





app.listen(3000, () => console.log("Proyecto en el puerto 3000"));

