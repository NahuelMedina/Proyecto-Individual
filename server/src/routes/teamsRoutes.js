const { Router } = require("express");
const { getAllTeamsHandler } = require("../handlers");

const teamsRouter = Router();

teamsRouter.get("/", getAllTeamsHandler);

module.exports = teamsRouter;
