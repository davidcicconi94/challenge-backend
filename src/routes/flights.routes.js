import { Router } from "express";
import {
  createFlight,
  deleteFlight,
  getFlights,
  getFlightsById,
  updateFlight,
} from "../controllers/controllers.js";

export const flightsRouter = Router();

flightsRouter.get("/", getFlights);

flightsRouter.get("/:id", getFlightsById);

flightsRouter.post("/", createFlight);

flightsRouter.put("/:id", updateFlight);

flightsRouter.delete("/:id", deleteFlight);
