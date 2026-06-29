import SourceChart from "../components/Charts/SourceChart";
import StatusChart from "../components/Charts/StatusChart";
import AppLayout from "../components/Layout/AppLayout";
import useStats from "../hooks/useStats";

export default function AnalyticsPage() {
  const stats = useStats();

  return (
    <AppLayout activeSection="analytics">
      <section className="page-heading">
        <span className="eyebrow">Analytics</span>
        <h1>Lead performance</h1>
      </section>

      <section className="analytics-grid">
        <SourceChart stats={stats} />
        <StatusChart stats={stats} />
      </section>
    </AppLayout>
  );
}
