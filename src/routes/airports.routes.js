import { Router } from "express";
import {
  createAirport,
  deleteAirport,
  getAirportById,
  getAirports,
  updateAirport,
} from "../controllers/controllers.js";

export const airportsRouter = Router();

airportsRouter.get("/", getAirports);
airportsRouter.get("/:id", getAirportById);
airportsRouter.post("/create", createAirport);
airportsRouter.put("/update/:id", updateAirport);
airportsRouter.delete("/delete/:id", deleteAirport);
