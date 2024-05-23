const express = require("express");

const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/burgers", (req, res) => {
  client.query("SELECT * FROM burger limit 10").then((burgers) => {
    res.status(200).json(burgers[0]);
  });
});

router.get("/burgers/:id", (req, res) => {
  client
    .query("SELECT * FROM burger where id = ?", [req.params.id])
    .then((burgers) => {
      res.status(200).json(burgers[0][0]);
    });
});

/* ************************************************************************* */

module.exports = router;
