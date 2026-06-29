import { useEffect, useState } from "react";

const statuses = [
  "New",
  "Contacted",
  "Qualified",
  "Follow Up",
  "Converted",
];

export default function LeadModal({
  lead,
  onClose,
  onUpdateStatus,
}) {
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setStatus(lead?.status ?? "");
  }, [lead]);

  if (!lead) return null;

  const details = [
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["Source", lead.source],
    ["Campaign", lead.campaign],
    ["Assigned", lead.assignedTo],
    ["Created", lead.createdAt],
  ];

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await onUpdateStatus(lead.id, status);
      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="eyebrow">Lead profile</span>
            <h2>{lead.name}</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close">
            X
          </button>
        </div>

        <div className="detail-grid">
          {details.map(([label, value]) => (
            <div className="detail-item" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <label className="field status-update-field">
          <span>Status</span>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            {statuses.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="modal-actions">
          <button className="button subtle" onClick={onClose}>
            Cancel
          </button>
          <button
            className="button primary"
            onClick={handleSave}
            disabled={isSaving || status === lead.status}
          >
            {isSaving ? "Saving..." : "Update status"}
          </button>
        </div>
      </div>
    </div>
  );
}
