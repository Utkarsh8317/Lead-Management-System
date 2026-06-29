import StatusBadge from "./StatusBadge";

export default function LeadTable({
  leads,
  isLoading,
  onSelect
}) {
  if (isLoading) {
    return (
      <div className="empty-state">
        <strong>Loading leads</strong>
        <span>Fetching the latest pipeline records.</span>
      </div>
    );
  }

  if (!leads.length) {
    return (
      <div className="empty-state">
        <strong>No leads found</strong>
        <span>Try adjusting your search or filter selection.</span>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Lead</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Source</th>
            <th>Campaign</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} onClick={() => onSelect(lead)}>
              <td>
                <div className="lead-person">
                  <span>{lead.name.charAt(0)}</span>
                  <div>
                    <strong>{lead.name}</strong>
                    <small>{lead.email}</small>
                  </div>
                </div>
              </td>
              <td>{lead.phone}</td>
              <td>{lead.service}</td>
              <td>{lead.source}</td>
              <td>{lead.campaign}</td>
              <td>{lead.assignedTo}</td>
              <td>
                <StatusBadge status={lead.status} />
              </td>
              <td>{lead.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
