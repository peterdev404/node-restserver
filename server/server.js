require("./config/config");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//USUARIOS
//URL:http://localhost:3000/usuario

//OBTENER
app.get("/usuario", function (req, res) {
  res.json("get usuario");
});

//CREAR
app.post("/usuario", function (req, res) {
  console.log("POST Usuario");
  let body = req.body;
  if (body.nombre === undefined) {
    res.status(400).json({
      status: false,
      msg: "El nombre es necesario",
    });
  }
  res.json({ persona: body });
});

//ACTUALAZAR
//URL:http://localhost:3000/usuario/<id>
app.put("/usuario/:id", function (req, res) {
  let id = req.params.id;
  console.log("PUT Usuario");
  res.json({ id });
});

//DELETE
app.delete("/usuario", function (req, res) {
  res.json("delete usuario");
});

app.listen(process.env.PORT, () => {
  console.log(`Escuchando en el puerto ${process.env.PORT}`);
});
