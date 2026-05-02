const express = require('express');
const app = express();

const vehicleRoutes = require('./routes/vehicleRoutes');

app.use(express.json());
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "vehicle-maintenance-api" });
});
app.use('/api', vehicleRoutes);

app.get('/test', (_req, res) => {
  res.json({ message: "Server working" });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
