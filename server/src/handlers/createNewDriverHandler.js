const { createNewDriver } = require("../controllers");

const createNewDriverHandler = async (req, res) => {
  try {
    const {
      name,
      lastName,
      description,
      image,
      nationality,
      date_of_birth,
      teams,
    } = req.body;
    const driverCreated = await createNewDriver(
      name,
      lastName,
      description,
      image,
      nationality,
      date_of_birth,
      teams
    );
    res.status(201).json(driverCreated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createNewDriverHandler;
