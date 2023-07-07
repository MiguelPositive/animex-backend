const mongoose = require("mongoose");

const animesSchema = mongoose.Schema({
  //trim elimina los espacios en blanco de una cadena de texto

  name: {
    type: String,
    trim: false,
  },

  description: {
    type: String,
    trim: false,
  },

  poster: {
    type: String,
  },

  id_user: {
    type: String,
  },
});

const animesModel = mongoose.model("animes", animesSchema);

module.exports = { animesModel };
