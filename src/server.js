import "dotenv/config";
import { initWebRoutes } from "./route/web";
const express = require("express");

const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());

initWebRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
