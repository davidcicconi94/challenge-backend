import Sequelize from "sequelize";

export const sequelize = new Sequelize("challenge", "postgres", "46626645", {
  host: "localhost",
  dialect: "postgres",
});
