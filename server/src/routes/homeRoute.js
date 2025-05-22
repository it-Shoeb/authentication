import express from "express";
const route = express.Router();

import homeController from "../controllers/homeController.js";

route.get("/", homeController);

export default route;
