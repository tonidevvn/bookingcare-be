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

  // C - USER
  router.post("/user", userController.createNewUser);
  // R - USER
  router.get("/user/:id", userController.getUser);
  // U - USER
  router.put("/user/:id", userController.updateUser);
  // D - USER
  router.delete("/user/:id", userController.deleteUser);

  router.get("/users", userController.getAllUsers);

  return app.use("/", router);
};

module.exports = { initWebRoutes };
