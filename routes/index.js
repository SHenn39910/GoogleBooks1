const path = require("path");
const router = require("express").Router();
const apiRoutes = require("../routes/api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React App
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));

});

module.exports = router;