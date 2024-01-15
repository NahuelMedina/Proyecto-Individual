const { axios } = require("axios");

const getDriversByName = async (name) => {
  const { data } = axios(`http://localhost:5000/drivers?name.forename=${name}`);
  const arrDrivers = [...data];
};

module.exports = getDriversByName;
