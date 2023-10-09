import express from "express";
import { getUsers } from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.render("home", {
      title: "Home",
    });
  });

  router.get("/toni", (req, res) => {
    return res.render("toni", {
      title: "By Toni",
    });
  });

  router.get("/yell", (req, res) => {
    return res.render("yell", {
      title: "Yell",

      // This `message` will be transformed by our `yell()` helper.
      message: "hello world",
    });
  });

  router.get("/users", getUsers);

  return app.use("/", router);
};

module.exports = { initWebRoutes };
