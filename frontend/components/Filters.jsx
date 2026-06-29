export default function Filters({
  search,
  setSearch,
  source,
  setSource,
  status,
  setStatus,
}) {
  return (
    <div className="filters">
      <label className="field search-field">
        <span>Search</span>
        <input
          type="text"
          placeholder="Name, email, or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      <label className="field">
        <span>Source</span>
        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="">All sources</option>
          <option value="Website">Website</option>
          <option value="Meta Ads">Meta Ads</option>
          <option value="Google Ads">Google Ads</option>
        </select>
      </label>

      <label className="field">
        <span>Status</span>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All statuses</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Follow Up">Follow Up</option>
          <option value="Converted">Converted</option>
        </select>
      </label>
    </div>
  );
}
