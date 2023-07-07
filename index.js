const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");


//conexion a la base de datos
const { connectionDb } = require("./config/connectiondb.js");

//importacion de rutas del router

const { usersRouter } = require("./routes/usersRoutes.js");
const { animesRouter } = require("./routes/animesRoutes.js");

const app = express();

// recibe los datos que envie desde el frontend con el formData y los convierte en formato json
app.use(express.urlencoded({ extended: true }));

// el servidor expone la carpeta public para poder acceder a sus archivos
app.use(express.static("public"));

// se utiliza para que el servidor entienda que los datos que se le estan pasando
//al cuerpo de la scolicitud (req.body) estarán en formato JSON y pueda procesar esta información.
app.use(express.json());

//se utiliza para ejecutar las variables de entorno
dotenv.config();

//ejecuta la conexión a la base de datos
connectionDb();

const port = process.env.PORT || 4000;

//
/*

Los cors es un sistema seguridad que por defecto bloquea el servidor del backend
para que dominios de teceros no puedan solictar recursos o accedera las funciones 
que este tiene. Por ende, el frontend no puede acceder a backend a menos que los cors se 
desactiven.

*/

// se utiliza para desactivar los cors
app.use(cors());

//rutas de acceso a las  funcionescontroaldores
app.use("/", usersRouter);
app.use("/", animesRouter);

app.listen(port, () => {
  console.log(`servidor para el backend esucuchando el puerto: ${port} `);
});
