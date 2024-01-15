const axios = require("axios");
const { Teams } = require("../db");
const getAllDrivers = async () => {
  const teamsDB = await Teams.findAll();
  if (!teamsDB.length) {
    const { data } = await axios("http://localhost:5000/drivers");
    let teams = [];
    data.forEach((driver) => teams.push(driver.teams));

    const teamsChange = teams.flat().join().split(" ").join("").split(",");

    let filteredTeams = teamsChange.filter((el) => el != null && el != "");

    let teamsUnique = new Set(filteredTeams);

    let arrTeams = [...teamsUnique];
    arrTeams.forEach(async (t) => {
      await Teams.findOrCreate({
        where: { teams_name: t },
      });
    });
    return arrTeams;
  }
  return teamsDB.map((team) => team.teams_name);
};

module.exports = getAllDrivers;
