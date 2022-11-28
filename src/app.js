import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { airlinesRouter } from "./routes/airlines.routes.js";
import { airportsRouter } from "./routes/airports.routes.js";

export const app = express();

app.use(express.json({ limit: "50mb" }));

//Routes
app.use("/airlines", airlinesRouter);
app.use("/airports", airportsRouter);

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
