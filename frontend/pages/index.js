import DashboardCards from "../components/DashboardCards";
import AppLayout from "../components/Layout/AppLayout";
import useStats from "../hooks/useStats";

export default function Home() {
  const stats = useStats();

  return (
    <AppLayout activeSection="dashboard">
      <section className="hero-panel">
        <div>
          <span className="eyebrow">Welcome to Urban Cruise India</span>
          <h1>Urban Cruise Lead Management System</h1>
          <p>
            Manage vehicle rental inquiries, campaign leads, customer follow-ups,
            and conversion performance from one premium travel workspace.
          </p>
        </div>

        <div className="hero-actions">
          <div className="sync-card">
            <span>Booking pipeline</span>
            <strong>{stats?.total ?? "--"} leads</strong>
          </div>
        </div>
      </section>

      <DashboardCards stats={stats} />
    </AppLayout>
  );
}
