const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  //trim elimina los espacios en blanco de una cadena de texto

  user: {
    type: String,
    trim: false,
  },
  password: {
    type: String,
    trim: false,
  },
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = { usersModel };
