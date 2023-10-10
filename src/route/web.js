import express from "express";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  // middleware that is specific to this router
  router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  });

  router.get("/", (req, res) => {
    return res.render("home", {
      title: "Home",
    });
  });

  router.get("/yell", (req, res) => {
    return res.render("yell", {
      title: "Yell",

      // This `message` will be transformed by our `yell()` helper.
      message: "hello world",
    });
  });

  router.post("/user", userController.createNewUser);
  router.get("/users", userController.getUsers);

  return app.use("/", router);
};

module.exports = { initWebRoutes };
