const apiModel = require("../model/api-model");

const getAllAtr = async (req, res) => {
  try {
    const getAllImg = await apiModel.find();

    res.status(200).json({
      message: "sucsecc",
      getAllImg,
    });
  } catch (error) {
    res.send(error);
  }
};

const getOneArt = async (req, res) => {
  try {
    const getoneImg = await apiModel.findById(req.params.id);

    res.status(200).json({
      message: "sucsecc",
      getoneImg,
    });
  } catch (error) {
    res.send(error);
  }
};

const addNewArt = async (req, res) => {
  try {
    const { title, desc, img_url } = req.body;
    const createNewArt = await apiModel.create({
      title,
      desc,
      img_url,
    });

    res.json({
      message: "created",
      createNewArt,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateArt = async (re, res) => {
  try {
    const { title, desc, img_url } = req.body;
    const update = await apiModel.findByIdAndUpdate(req.params.id, {
      title,
      desc,
      img_url,
    });

    res.status(200).json({
      message: "updated",
      update,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteArt = async (req, res) => {
  try {
    await apiModel.findOneAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllAtr,
  getOneArt,
  addNewArt,
  updateArt,
  deleteArt,
};
