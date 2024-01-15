const { Drivers } = require("../db");
const axios = require("axios");

const imageDefault =
  "https://www.imperiumtapet.com/public/uploads/preview/sport-tapeta-na-telefon-75-3115351065621srn4huxxw.jpg";

const getDriversDB = async () => {
  const driversDB = await Drivers.findAll();
  return driversDB;
};

const getDriversAPI = async () => {
  const { data } = await axios("http://localhost:5000/drivers");
  return data;
};

const getAllDrivers = async (name) => {
  const driversDB = await getDriversDB();
  const driversAPI = await getDriversAPI();
  const allDrivers = [...driversDB, ...driversAPI];

  allDrivers.map((d) => {
    !d.image.url ? (d.image.url = imageDefault) : d.image.url;
    !d.image ? (d.image = imageDefault) : d.image.url;
  });

  if (name) {
    const driverNameFound = allDrivers.filter((driver) =>
      driver.name.forename.toUpperCase().includes(name.toUpperCase())
    );
    return driverNameFound.splice(0, 15);
  }

  return allDrivers;
};

module.exports = getAllDrivers;
