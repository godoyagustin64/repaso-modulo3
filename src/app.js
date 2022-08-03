const express = require ("express");
const path = require ("path");
const app = express();

// Registrar como publica la carpeta public

app.use(express.static(path.join(__dirname, "../public")));

// Registrar carpetas estaticas con "prefijos"
app.use("/desktop", express.static("desktop"));
app.use("/mobile", express.static("mobile"));

// Registrar ejs como motor de plantilla
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal");
});


app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/index2", (req, res) => {
    res.render("index2");
});



app.listen(3000, () => console.log("Proyecto en el puerto 3000"));

