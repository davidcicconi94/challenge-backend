import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

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
