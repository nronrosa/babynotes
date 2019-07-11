const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const actRoute = require("./api/activitiesRoute");
const userRoute = require("./api/userRoute");
const childRoute = require("./api/childRoute");

//API routes
router.use("/", actRoute);
router.use("/", userRoute);
router.use("/", childRoute);
// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;