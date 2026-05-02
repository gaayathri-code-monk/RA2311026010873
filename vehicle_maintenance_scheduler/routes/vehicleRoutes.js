const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController');

router.post('/vehicles', controller.addVehicle);
router.get('/vehicles', controller.getVehicles);

module.exports = router;
