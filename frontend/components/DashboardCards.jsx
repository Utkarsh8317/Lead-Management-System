export default function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Total Leads",
      value: stats?.total,
      meta: "All captured inquiries",
      tone: "blue"
    },
    {
      title: "Website",
      value: stats?.website,
      meta: "Inbound form traffic",
      tone: "green"
    },
    {
      title: "Meta Ads",
      value: stats?.meta,
      meta: "Paid social leads",
      tone: "orange"
    },
    {
      title: "Google Ads",
      value: stats?.google,
      meta: "Search campaign leads",
      tone: "cyan"
    },
    {
      title: "New Leads",
      value: stats?.new,
      meta: "Needs first action",
      tone: "purple"
    },
    {
      title: "Converted",
      value: stats?.converted,
      meta: "Closed opportunities",
      tone: "emerald"
    }
  ];

  return (
    <div className="cards">
      {cards.map((card) => (
        <div className={`metric-card ${card.tone}`} key={card.title}>
          <span>{card.title}</span>
          <strong>{card.value ?? "--"}</strong>
          <p>{card.meta}</p>
        </div>
      ))}
    </div>
  );
}
