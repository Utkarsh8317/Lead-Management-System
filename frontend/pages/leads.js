import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import LeadModal from "../components/LeadModal";
import LeadTable from "../components/LeadTable";
import AppLayout from "../components/Layout/AppLayout";
import Pagination from "../components/Pagination";
import API from "../services/api";
import useLeads from "../hooks/useLeads";

export default function LeadsPage() {
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);
  const [page, setPage] = useState(1);

  const { leads, isLoading, reloadLeads } = useLeads({ search, source, status });
  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(leads.length / pageSize));
  const paginatedLeads = leads.slice((page - 1) * pageSize, page * pageSize);
  const activeFilters = [search, source, status].filter(Boolean).length;

  const downloadReport = (format) => {
    const params = new URLSearchParams({ format });

    if (search) params.set("search", search);
    if (source) params.set("source", source);
    if (status) params.set("status", status);

    // Use API base URL instead of hardcoded localhost
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    window.open(`${apiBaseUrl}/leads/report?${params.toString()}`);
  };

  const updateLeadStatus = async (leadId, nextStatus) => {
    try {
      const response = await API.patch(`/leads/${leadId}/status`, { status: nextStatus });
      if (response.data.success) {
        alert("Status updated successfully!");
        setSelectedLead(null);
        await reloadLeads();
      } else {
        alert("Failed to update status: " + response.data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status: " + (error.response?.data?.message || error.message));
    }
  };

  useEffect(() => {
    setPage(1);
  }, [search, source, status]);

  return (
    <AppLayout activeSection="leads">
      <section className="panel">
        <div className="section-header">
          <div>
            <span className="eyebrow">Lead inbox</span>
            <h2>Pipeline records</h2>
          </div>
          <div className="result-count">
            {leads.length} results
            {activeFilters > 0 && <span>{activeFilters} filters active</span>}
          </div>
        </div>

        <Filters
          search={search}
          setSearch={setSearch}
          source={source}
          setSource={setSource}
          status={status}
          setStatus={setStatus}
        />

        <div className="report-actions">
          <span>Download current filtered data</span>
          <button className="button primary" onClick={() => downloadReport("csv")}>
            CSV
          </button>
          <button className="button subtle" onClick={() => downloadReport("pdf")}>
            PDF
          </button>
        </div>

        <LeadTable
          leads={paginatedLeads}
          isLoading={isLoading}
          onSelect={setSelectedLead}
        />

        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </section>

      <LeadModal
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
        onUpdateStatus={updateLeadStatus}
      />
    </AppLayout>
  );
}
