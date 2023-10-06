import "dotenv/config";
import { initWebRoutes } from "./route/web";
import { connectDB } from "./config/connectDB";
const express = require("express");

const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());

initWebRoutes(app);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
