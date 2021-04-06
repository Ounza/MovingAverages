// index.js

/**
 * Required External Modules
 */

 const express = require("express");
 const path = require("path");


/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8080";

/**
 *  App Configuration
 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

 app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

  //GET methods to view moving averages
  app.get("/eurtousd", (req, res) => {
    res.render("eurtousd", { title: "EURO/USD" });
  });
  app.get("/gbptousd", (req, res) => {
    res.render("gbptousd", { title: "GBP/USD" });
  });
  app.get("/usdtojpy", (req, res) => {
    res.render("usdtojpy", { title: "USD/JPY" });
  });
/**
 * Server Activation
 */

 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });