const { usersModel } = require("../models/usersModel.js");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { user, password } = req.body;
    const newUser = await usersModel({ user, password });

    newUser.save();

    //le indica a frontend que la función se ejecuto exitosamente,
    //en caso contrario mostrará un error en el catch del frontend.

    res.sendStatus(200);
  } catch (error) {
    console.log(`error en el backend al intentar crear el usuario. ${error}`);
  }
};

const correctCredentials = async (req, res) => {
  try {
    const { user, password } = req.body;

    let validation = null;

    (await usersModel.find()).forEach((iterator) => {
      if (iterator.user == user && iterator.password == password) {
        validation = true;
      }
    });

    res.send({ validation });
  } catch (error) {
    console.log(
      `ocurrio un error en le backend al intentar revisar si las credenciales existen o no. ${error}`
    );
  }
};

const getIdUser = async (req, res) => {
  try {
    const { user } = req.body;

    console.log(user);
    let id;

    (await usersModel.find()).forEach((iterator) => {
      if (iterator.user == user) {
        id = iterator._id;
      }
    });

    res.send({ id });
    console.log(id);
  } catch (error) {
    console.log(
      `ocurrio un error en el backend al intentar consultar el id del usuario. ${error}`
    );
  }
};

module.exports = {
  createUser,
  correctCredentials,
  getIdUser,
};
