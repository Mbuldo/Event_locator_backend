const express = require("express");
const router = express.Router();

// Define user routes
router.get("/", (req, res) => {
  res.send("User route working!");
});

module.exports = router;
