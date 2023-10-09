import express from "express";
import { create, engine } from "express-handlebars";
import * as path from "path";

const hbs = create({
  // Uses multiple partials dirs, templates in "shared/templates/" are shared
  // with the client-side of the app (see below).
  partialsDir: ["src/views/partials/"],
});

const configViewEngine = (app) => {
  app.use(express.static("./public"));
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");
  app.set("views", "./src/views");
};

module.exports = { configViewEngine };
