import { Router } from "express";
import {
  createFlight,
  deleteFlight,
  getFlights,
  getFlightsById,
  updateFlight,
} from "../controllers/controllers.js";
import { Flights } from "../models/Flights.js";

export const flightsRouter = Router();

flightsRouter.get("/", getFlights);

flightsRouter.get("/:id", getFlightsById);

flightsRouter.post("/create", createFlight);

flightsRouter.put("/update/:id", updateFlight);

flightsRouter.delete("/delete/:id", deleteFlight);
