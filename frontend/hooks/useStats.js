import { useEffect, useState } from "react";
import API from "../services/api";

export default function useStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await API.get("/leads/stats");
        setStats(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadStats();
  }, []);

  return stats;
}
