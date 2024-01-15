const { Drivers } = require("../db");
const axios = require("axios");

const imageDefault =
  "https://www.imperiumtapet.com/public/uploads/preview/sport-tapeta-na-telefon-75-3115351065621srn4huxxw.jpg";

const getDriverById = async (id) => {
  if (isNaN(id)) {
    const searchDriver = await Drivers.findByPk(id);
    return searchDriver;
  }
  const { data } = await axios(`http://localhost:5000/drivers/${id}`);
  !data.image.url ? (data.image.url = imageDefault) : data.image.url;

  return data;
};

module.exports = getDriverById;
