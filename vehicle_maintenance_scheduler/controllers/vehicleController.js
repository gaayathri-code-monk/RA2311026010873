const Log = require('../../logging_middleware/logger');
const vehicleService = require('../services/vehicleService');

async function addVehicle(req, res) {
  await Log("backend", "info", "controller", "Add vehicle request received");

  try {
    const result = vehicleService.addVehicle(req.body);

   await Log("backend", "info", "controller", "Vehicle created successfully");

    res.json(result);
  } catch (err) {
  await Log("backend", "error", "controller", err.message);
  res.status(400).json({ error: err.message });
}
}

async function getVehicles(req, res) {
  try {
    await Log("backend",
       "info", 
       "controller",
        `Request received at ${new Date().toISOString()}`
      );

    const result = vehicleService.getVehicles(req.query);
    res.json({
  success: true,
  data: result,
  message: "Vehicles fetched successfully"
});
  } catch (err) {
    await Log("backend", "error", "controller", err.message);
    res.status(500).json({ error: "Error fetching vehicles" });
  }
}

module.exports = { addVehicle, getVehicles };
