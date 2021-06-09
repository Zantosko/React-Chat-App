const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("working properly")
})

module.exports = router;