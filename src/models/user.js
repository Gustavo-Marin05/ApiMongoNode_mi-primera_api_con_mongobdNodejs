const mongoose = require("mongoose");

//en esta seccion ira todo lo que es sobre la tabla de usuarios en este caso
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
