import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({ activeSection, children }) {
  return (
    <div className="app-shell">
      <Sidebar activeSection={activeSection} />

      <main className="main">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
