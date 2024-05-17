const express = require("express");

const burgers = require("../database/data");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/burgers", (req, res) => {
  res.status(200).json(burgers);
});

/* ************************************************************************* */

module.exports = router;
