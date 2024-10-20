const express = require("express"); //este express va a tener un enrutador

const router = express.Router();
const userSchema = require("../models/user");

//create user

//para crear un usuario sera con el metodo post

router.post("/users", (req, res) => {
  const user = userSchema(req.body);

  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); //para que esta ruta funcione la tenermos que llamar en el archivo del servidor en index en la seccion de middelware

//obtener todos los usuarios

router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener solo un usuario

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un usuario

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar un usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findByIdAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
