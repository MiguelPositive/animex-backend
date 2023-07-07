const { animesModel } = require("../models/animesModel.js");



const addAnime = async (req, res) => {
  try {
    const { name, description, id_user } = req.body;

    
    // console.log(description);
    // console.log(poster);

  
    // console.log(`req.file: ${req.file}`);
    // console.log(`name: ${name}`);

    // console.log("funcion add anime del servidor");

    

    let poster = req.file.originalname;  

  

    const newAnime = await animesModel({ name, description, poster, id_user });

    newAnime.save();

    res.sendStatus(200);
  } catch (error) {
    console.log(
      `ocurrio un error en el backend al intentar añadir un nuevo anime. ${error}`
    );
  }
};

const getAnimes = async (req, res) => {
  try {
    const { id_user } = req.body;

    const animesData = await animesModel.find({ id_user });

    // console.log(`funcion traer todos los animes del usuario. ${id_user}`);
    // console.log(animesData);

    res.send({ animesData });
  } catch (error) {
    console.log(
      `ocurrio un error en el backend al intentar consultar los animes. ${error}`
    );
  }
};

const deleteAnime = async (req, res) => {
  try {
    const { idTemp } = req.body;

    await animesModel.deleteOne({ _id: idTemp });
    res.sendStatus(200);
  } catch (error) {
    console.log(
      `ocurrio un error en el backend al inetentar eliminar el anime ${error}`
    );
  }
};

const updateAnime = async (req, res) => {
  try {
    const { name, description, id_user, _id } = req.body;
    let poster = req.file.originalname;

    // console.log(`name: ${name}`);
    // console.log(`description: ${description}`);
    // console.log(`poster: ${poster}`);

    await animesModel.updateOne(
      { _id },
      { $set: { name, description, poster, id_user } }
    );

    res.sendStatus(200);
  } catch (error) {
    console.log(
      `ocurrio un error en el bakend al intentar actualizar el anime. ${error}`
    );
  }
};

module.exports = {
  addAnime,
  getAnimes,
  deleteAnime,
  updateAnime,
};
