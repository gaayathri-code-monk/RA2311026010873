const Log = require('../../logging_middleware/logger');

let vehicles = [];

function addVehicle(data) {
  if (!data.name) {
    Log("backend", "warn", "service", "Vehicle name missing");
    throw new Error("Vehicle name required");
  }

  vehicles.push(data);
  return { message: "Vehicle added", data };
}

function getVehicles(query) {
  let filtered = vehicles;

  if (query.name) {
    filtered = filtered.filter(v =>
      v.name.toLowerCase().includes(query.name.toLowerCase())
    );
  }

  if (query.serviceDate) {
    filtered = filtered.filter(v =>
      v.serviceDate === query.serviceDate
    );
  }

  return filtered;
}


module.exports = { addVehicle, getVehicles };
