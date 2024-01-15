const { Router } = require("express");
const {
  createNewDriverHandler,
  getAllDriversHandler,
  getDriverByIdHandler,
  getDriversByNameHandler,
} = require("../handlers");

const driversRouter = Router();

driversRouter.get("/", getAllDriversHandler);
driversRouter.get("/:idDriver", getDriverByIdHandler);
driversRouter.get("/name", getDriversByNameHandler);
driversRouter.post("/", createNewDriverHandler);

module.exports = driversRouter;
