import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Airports } from "./Airports.js";
import { Flights } from "./Flights.js";

export const Airlines = sequelize.define(
  "airlines",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    iata_code: {
      type: DataTypes.STRING,
    },
    airline: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
