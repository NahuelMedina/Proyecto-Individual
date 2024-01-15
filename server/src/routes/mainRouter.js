const { Router } = require("express");
const driversRouter = require("./driversRoutes");
const teamsRouter = require("./teamsRoutes");

const mainRouter = Router();

mainRouter.use("/drivers", driversRouter);
mainRouter.use("/teams", teamsRouter);

module.exports = mainRouter;
