const router = require("express").Router();
// const bookRoutes = require("./books");
const actRoute = require("./activitiesRoute");
const userRoute = require("./userRoute");
const childRoute = require("./childRoute");

// Book routes
// router.use("/books", bookRoutes);
router.use("/activities", actRoute);
router.use("/user", userRoute);
router.use("/child", childRoute);

module.exports = router;