const express = require("express");
const cors = require("cors");
const path = require("path");

const leadRoutes = require("./routes/leadRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Enable CORS for all origins
app.use(cors({
  origin: "*",
  credentials: false,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "ngrok-skip-browser-warning",
  ],
}));

// Add ngrok bypass headers for all responses
app.use((req, res, next) => {
  res.header("ngrok-skip-browser-warning", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use(express.json());

// API Routes
app.use("/api/leads", leadRoutes);

// ===============================
// Serve React Production Build
// ===============================

// Change "../frontend/build" if your React folder has a different name
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 LMS running on http://0.0.0.0:${PORT}`);
});