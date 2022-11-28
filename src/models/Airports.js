import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Airports = sequelize.define(
  "airports",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IATA_CODE: {
      type: DataTypes.STRING,
    },
    AIRPORT: {
      type: DataTypes.STRING,
    },
    CITY: {
      type: DataTypes.STRING,
    },
    STATE: {
      type: DataTypes.STRING,
    },
    COUNTRY: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
