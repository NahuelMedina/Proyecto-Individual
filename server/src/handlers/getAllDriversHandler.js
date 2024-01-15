const { getAllDrivers } = require("../controllers");

const getAllDriversHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const allDrivers = await getAllDrivers(name);
    res.status(200).json(allDrivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllDriversHandler;
