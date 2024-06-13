const { Router } = require("express");
const apiModel = require("../model/api-model");
const {
  getAllAtr,
  getOneArt,
  addNewArt,
  updateArt,
  deleteArt,
} = require("../controllers/api-controllers");

const router = Router();

router.get("/", getAllAtr);
router.get("/:id", getOneArt);
router.post("/add-new-art", addNewArt);
router.put("/:id", updateArt);
router.delete("/:id", deleteArt);

module.exports = router;
