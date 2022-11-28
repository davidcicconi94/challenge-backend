import { Router } from "express";
import {
  createAirline,
  deleteAirline,
  getAirlineById,
  getAirlines,
  updateAirline,
} from "../controllers/controllers.js";

export const airlinesRouter = Router();

airlinesRouter.get("/", getAirlines);

airlinesRouter.get("/:id", getAirlineById);

airlinesRouter.post("/", createAirline);

airlinesRouter.put("/:id", updateAirline);

airlinesRouter.delete("/:id", deleteAirline);
