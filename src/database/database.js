import Sequelize from "sequelize";
import dotenv, { config } from "dotenv";

dotenv.config({ path: "../config/config.env" });

console.log(process.env.DB_NAME);

export const sequelize = new Sequelize("challenge", "postgres", "46626645", {
  host: "localhost",
  dialect: "postgres",
});
