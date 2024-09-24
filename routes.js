const User = require("./userModel");

const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "fail" });
  }
};

const readAllusers = async (req, res) => {
  try {
    const userData = await User.find({});
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ status: "fail" });
  }
};

const readByReg = async (req, res) => {
  try {
    const reg = req.params.reg;
    const user = await User.findOne({ regdno: reg });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ status: "fail" });
  }
};

const updateUserByReg = async (req, res) => {
  try {
    const reg = req.params.reg;
    const user = await User.findOneAndUpdate({ regdno: reg }, req.body, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.send(user);
  } catch (error) {
    res.status(500).json({ status: "fail" });
  }
};
const deleteByReg = async (req, res) => {
  try {
    const reg = req.params.reg;
    await User.findOneAndDelete({ regdno: reg });
    res.json({ status: "success", message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: "fail" });
  }
};

module.exports = {
  createUser,
  deleteByReg,
  updateUserByReg,
  readByReg,
  readAllusers,
  createUser,
};
