import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Airlines } from "./Airlines.js";

export const Airports = sequelize.define(
  "airports",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    iata_code: {
      type: DataTypes.STRING,
    },
    airport: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DECIMAL,
    },
    longitude: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    timestamps: false,
  }
);
