const { getDriversByName } = require("../controllers");

const getDriversByNameHandler = async (req, res) => {
  try {
    const driverNameFound = await getDriversByName(req.query);
    if (driverNameFound) {
      return res.status(200).json(driverNameFound);
    }
    res.status(404).send("Driver no encontrado");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDriversByNameHandler;
