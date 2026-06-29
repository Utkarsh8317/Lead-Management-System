export default function StatusBadge({ status }) {
  const classes = {
    New: "status-new",
    Contacted: "status-contacted",
    Qualified: "status-qualified",
    "Follow Up": "status-follow",
    Converted: "status-converted"
  };

  return (
    <span className={`status-badge ${classes[status] || "status-default"}`}>
      {status}
    </span>
  );
}
