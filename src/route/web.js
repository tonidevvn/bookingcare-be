import express from "express";
import { getUsers } from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("hello world with Toni");
  });

  router.get("/users", getUsers);

  return app.use("/", router);
};

module.exports = { initWebRoutes };
