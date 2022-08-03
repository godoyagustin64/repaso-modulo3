const express = require ("express");
const path = require ("path");
const app = express();

// Registrar como publica la carpeta public

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../publica")));


app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal");
});





app.listen(3000, () => console.log("Proyecto en el puerto 3000"));

