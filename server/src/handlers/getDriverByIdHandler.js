const { getDriverById } = require("../controllers");

const getDriverByIdHandler = async (req, res) => {
  try {
    const { idDriver } = req.params;
    const driverFound = await getDriverById(idDriver);
    res.status(200).json(driverFound);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDriverByIdHandler;
