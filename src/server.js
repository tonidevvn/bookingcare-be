import "dotenv/config";
import { initWebRoutes } from "./route/web";
import { connectDB } from "./config/connectDB";
import { configViewEngine } from "./config/viewEngine";
const express = require("express");

const app = express();
const port = process.env.PORT || 6969;

// support parsing of application/json type post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoutes(app);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
