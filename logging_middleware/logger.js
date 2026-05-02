const axios = require('axios');

const LOG_API = "http://20.207.122.201/evaluation-service/logs";
const TOKEN = "PASTE_YOUR_TOKEN_HERE";

const allowedStacks = ["backend", "frontend"];
const allowedLevels = ["debug", "info", "warn", "error", "fatal"];

async function Log(stack, level, pkg, message) {
  try {
    if (!allowedStacks.includes(stack) || !allowedLevels.includes(level)) {
      console.error("Invalid log values");
      return;
    }

    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}

module.exports = Log;