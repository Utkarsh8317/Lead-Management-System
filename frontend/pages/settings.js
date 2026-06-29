import AppLayout from "../components/Layout/AppLayout";

export default function SettingsPage() {
  return (
    <AppLayout activeSection="settings">
      <section className="panel settings-page">
        <div className="section-header">
          <div>
            <span className="eyebrow">Demo controls</span>
            <h2>Settings</h2>
          </div>
        </div>

        <div className="settings-list">
          <div>
            <strong>API connection</strong>
            <span>Connected to localhost backend</span>
          </div>
          <div>
            <strong>Report format</strong>
            <span>CSV export enabled</span>
          </div>
          <div>
            <strong>Demo mode</strong>
            <span>Urban Cruise sample lead data is active</span>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
