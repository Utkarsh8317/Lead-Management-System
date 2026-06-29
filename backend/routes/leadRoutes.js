const express = require("express");
const router = express.Router();

const {
  getLeads,
  getStats,
  downloadReport,
  updateLeadStatus,
} = require("../controllers/leadController");

// Dashboard Stats
router.get("/stats", getStats);

// CSV Report
router.get("/report", downloadReport);

// Update Lead Status
router.patch("/:id/status", updateLeadStatus);

// All Leads
router.get("/", getLeads);

module.exports = router;
