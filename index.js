import { app } from "./src/app.js";
import dotenv from "dotenv";
import { sequelize } from "./src/database/database.js";
import "./src/models/Airlines.js";

dotenv.config({ path: "./src/config/config.env" });

(async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection to DATABASE successfully");
    app.listen(process.env.PORT, () => {
      console.log("server listening on port:", process.env.PORT);
    });
  } catch (error) {
    console.error("Unable to connecto to database:", error);
  }
})();
