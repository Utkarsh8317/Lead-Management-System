import Link from "next/link";

export default function Sidebar({ activeSection }) {
  const menus = [
    ["D", "Dashboard", "dashboard", "/"],
    ["L", "Leads", "leads", "/leads"],
    ["A", "Analytics", "analytics", "/analytics"],
    ["S", "Settings", "settings", "/settings"],
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <span>UC</span>
        <div>
          <strong>Urban Cruise</strong>
          <small>Lead Management</small>
        </div>
      </div>

      <ul>
        {menus.map(([icon, label, section, href]) => (
          <li className={activeSection === section ? "active" : ""} key={label}>
            <Link href={href}>
              <span>{icon}</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <small>Urban Cruise LMS</small>
        <strong>Fleet inquiry dashboard</strong>
      </div>
    </aside>
  );
}
