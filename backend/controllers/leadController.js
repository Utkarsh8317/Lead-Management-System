const fs = require("fs");
const path = require("path");
const leads = require("../data/leads");
const { Parser } = require("json2csv");

const leadsFilePath = path.join(__dirname, "../data/leads.js");

const saveLeads = () => {
  const fileContent = `const leads = ${JSON.stringify(leads, null, 2)};\n\nmodule.exports = leads;\n`;
  fs.writeFileSync(leadsFilePath, fileContent);
};

const getFilteredLeads = (query) => {
  let result = [...leads];

  const { source, status, search } = query;

  if (source) {
    result = result.filter(
      (lead) => lead.source.toLowerCase() === source.toLowerCase()
    );
  }

  if (status) {
    result = result.filter(
      (lead) => lead.status.toLowerCase() === status.toLowerCase()
    );
  }

  if (search) {
    const keyword = search.toLowerCase();

    result = result.filter(
      (lead) =>
        lead.name.toLowerCase().includes(keyword) ||
        lead.email.toLowerCase().includes(keyword) ||
        lead.phone.includes(keyword)
    );
  }

  return result;
};

// Get all leads with optional filters
const getLeads = (req, res) => {
  const result = getFilteredLeads(req.query);

  res.json({
    success: true,
    total: result.length,
    data: result,
  });
};

const allowedStatuses = [
  "New",
  "Contacted",
  "Qualified",
  "Follow Up",
  "Converted",
];

// Update lead status
const updateLeadStatus = (req, res) => {
  const leadId = Number(req.params.id);
  const { status } = req.body;

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid lead status",
    });
  }

  const lead = leads.find((item) => item.id === leadId);

  if (!lead) {
    return res.status(404).json({
      success: false,
      message: "Lead not found",
    });
  }

  lead.status = status;
  saveLeads();

  return res.json({
    success: true,
    data: lead,
  });
};

const escapePdfText = (value) =>
  String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");

const buildPdf = (reportLeads) => {
  const rows = [
    "Urban Cruise Lead Report",
    `Total leads: ${reportLeads.length}`,
    "",
    "ID  Name                 Phone       Source       Status       Date",
    "--------------------------------------------------------------------",
    ...reportLeads.map((lead) =>
      [
        String(lead.id).padEnd(3),
        lead.name.padEnd(20).slice(0, 20),
        lead.phone.padEnd(11).slice(0, 11),
        lead.source.padEnd(12).slice(0, 12),
        lead.status.padEnd(12).slice(0, 12),
        lead.createdAt,
      ].join(" ")
    ),
  ];

  const content = rows
    .map((row, index) => `BT /F1 9 Tf 42 ${750 - index * 16} Td (${escapePdfText(row)}) Tj ET`)
    .join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n",
    `5 0 obj\n<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream\nendobj\n`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += object;
  });

  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf);
};

// Dashboard stats
const getStats = (req, res) => {
  res.json({
    success: true,
    data: {
      total: leads.length,
      website: leads.filter((l) => l.source === "Website").length,
      meta: leads.filter((l) => l.source === "Meta Ads").length,
      google: leads.filter((l) => l.source === "Google Ads").length,
      new: leads.filter((l) => l.status === "New").length,
      contacted: leads.filter((l) => l.status === "Contacted").length,
      converted: leads.filter((l) => l.status === "Converted").length,
    },
  });
};

// CSV/PDF download
const downloadReport = (req, res) => {
  const result = getFilteredLeads(req.query);
  const format = req.query.format === "pdf" ? "pdf" : "csv";

  if (format === "pdf") {
    const pdf = buildPdf(result);

    res.header("Content-Type", "application/pdf");
    res.attachment("leads-report.pdf");
    return res.send(pdf);
  }

  const parser = new Parser();
  const csv = parser.parse(result);

  res.header("Content-Type", "text/csv");
  res.attachment("leads-report.csv");
  return res.send(csv);
};

module.exports = {
  getLeads,
  getStats,
  downloadReport,
  updateLeadStatus,
};
