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

airlinesRouter.post("/create", createAirline);

airlinesRouter.put("/update/:id", updateAirline);

airlinesRouter.delete("/delete/:id", deleteAirline);
