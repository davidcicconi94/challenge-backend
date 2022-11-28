import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { airlinesRouter } from "./routes/airlines.routes.js";
import { airportsRouter } from "./routes/airports.routes.js";
import { flightsRouter } from "./routes/flights.routes.js";
import { Airlines } from "./models/Airlines.js";
import { Airports } from "./models/Airports.js";
import { Flights } from "./models/Flights.js";

export const app = express();

app.use(express.json({ limit: "50mb" }));

//Routes
app.use("/airlines", airlinesRouter);
app.use("/airports", airportsRouter);
app.use("/flights", flightsRouter);

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

Airports.hasMany(Airlines, {
  foreignKey: "airportId",
  sourceKey: "id",
});

Airlines.belongsTo(Airports, { foreignKey: "airportId", targetId: "id" });

Airports.hasMany(Flights, {
  foreignKey: "flightsId",
  targetId: "id",
});

Flights.belongsTo(Airports, {
  foreignKey: "flightsId",
  targetId: "id",
});
