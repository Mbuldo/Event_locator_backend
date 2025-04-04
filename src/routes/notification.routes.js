const express = require("express");
const router = express.Router();

// Example route for notifications
router.get("/", (req, res) => {
    res.send("Notification route is working!");
});

module.exports = router;
