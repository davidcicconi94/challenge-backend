import express, { Router } from "express";
import { Airlines } from "../models/Airlines.js";

export const airlinesRouter = Router();

airlinesRouter.get("/", async (req, res) => {
  try {
    const airlines = await Airlines.findAll();
    res.json(airlines);
  } catch (error) {
    console.error(error);
  }
});

airlinesRouter.post("/create", async (req, res) => {
  const { iata_code, airline } = req.body;
  try {
    const newAirline = await Airlines.create({
      iata_code,
      airline,
    });

    res.json(newAirline);
  } catch (error) {
    console.error(error);
  }
});
