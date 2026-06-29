import { useCallback, useEffect, useState } from "react";
import API from "../services/api";

export default function useLeads({ search = "", source = "", status = "" } = {}) {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadLeads = useCallback(async () => {
    try {
      setIsLoading(true);

      const params = {};

      if (search) params.search = search;
      if (source) params.source = source;
      if (status) params.status = status;

      const res = await API.get("/leads", { params });
      setLeads(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [search, source, status]);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  return { leads, isLoading, reloadLeads: loadLeads };
}
