const { Drivers, Teams } = require("../db");

const createNewDriver = async (
  name,
  lastName,
  description,
  image,
  nationality,
  date_of_birth,
  teams
) => {
  const repeat = await Drivers.findOne({
    where: {
      name,
      lastName,
      description,
      image,
      nationality,
      date_of_birth,
    },
  });

  if (!repeat) {
    const newDriver = await Drivers.create({
      name,
      lastName,
      description,
      image,
      nationality,
      date_of_birth,
    });

    teams.forEach(async (t) => {
      let teamsDB = await Teams.findAll({
        where: { teams_name: t },
      });
      await newDriver.addTeams(teamsDB);
    });
    return newDriver;
  }
};

module.exports = createNewDriver;
