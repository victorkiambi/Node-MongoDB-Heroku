const express = require('express');
const router = express.Router();
const tutorials = require("../controllers/tutorial.controller.js");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

// Create a new Tutorial
router.post("/tutorials", tutorials.create);

router.get("/tutorials", tutorials.findAll);

module.exports = router;
