const express = require("express");
const cors = require("cors");

const leadRoutes = require("./routes/leadRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Enable CORS for all origins
app.use(cors({
  origin: "*", // Allow requests from any origin
  credentials: false,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Automated Lead Management System API",
    version: "1.0.0",
  });
});

// Routes
app.use("/api/leads", leadRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 LMS Backend running on http://0.0.0.0:${PORT}`);
});