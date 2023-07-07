const express = require("express");
const {
  addAnime,
  getAnimes,
  deleteAnime,
  updateAnime,
} = require("../controllers/animeController.js");
const multer = require("multer");
const path = require("path");

const animesRouter = express.Router();

//configuracion de multer para subir el poster

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${process.cwd()}/public/imgsAnime`);
  },
  filename: function (req, file, cb) {

    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage });

animesRouter.post("/add-anime", upload.single("poster"), addAnime);
animesRouter.post("/get-animes", getAnimes);
animesRouter.post("/delete-anime", deleteAnime);
animesRouter.post("/update-anime", upload.single("poster"), updateAnime);

module.exports = {
  animesRouter,
};
