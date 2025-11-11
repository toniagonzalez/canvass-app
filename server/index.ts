const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/routes");
const errorMiddleware = require("./src/middleware/errorMiddleware");
const database = require("./src/config/database");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Handle uncaught exceptions
process.on("uncaughtException", function (err) {
  console.log(err);
});

// Middleware
app.use(bodyParser.json());

// Connect to MySQL db
database.connect((err) => {
  if (err) {
    if (err.code === "EADDRINUSE") {
      console.log(
        `Error: DB could not connect ${process.env.DB_PORT} address already in use`
      );
    }
    console.log(
      `Error: DB could not connect on PORT:${process.env.DB_PORT} - ${err?.stack}`
    );
  } else {
    console.log(`Connected to MySQL on port: ${process.env.DB_PORT}`);

    // Create new db, user, and contact tables
    database.query(
      "CREATE DATABASE IF NOT EXISTS canvassdb",
      function (err, result) {
        if (err) console.log(err);
        console.log("canvassdb created");
      }
    );

    database.query("USE canvassdb", function (err, result) {
      if (err) console.log(err);
      console.log("Using canvassdb database");
    });

    let contactTableSql = `
    CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100),
    notes VARCHAR(8000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  )`;
    database.query(contactTableSql, function (err, result) {
      if (err) throw err;
      console.log("Contact table created");
    });
  }
});

// Routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Headers", "*"); // Allow headers
  next();
});

app.use("/", routes);

// Error middleware
app.use(errorMiddleware);

// Logger middleware
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
