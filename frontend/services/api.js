import axios from "axios";

// Determine API URL based on environment and context
const getApiUrl = () => {
  // First priority: Use environment variable if explicitly set
  if (process.env.NEXT_PUBLIC_API_URL && process.env.NEXT_PUBLIC_API_URL.trim()) {
    console.log("✅ Using NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // Client-side detection
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const port = 5000;

    // Local development
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return `http://localhost:${port}/api`;
    }

    // Network access (Windows IP)
    if (hostname.match(/^\d+\.\d+\.\d+\.\d+$/)) {
      return `http://${hostname}:${port}/api`;
    }

    // External access (ngrok, other domains)
    // Try to call backend on same domain (requires backend exposed through same tunnel)
    // If that fails, fall back to direct IP
    console.warn("📍 External domain detected:", hostname);
    return `https://${hostname}/api`;
  }

  return "http://localhost:5000/api";
};

const API = axios.create({
  baseURL: getApiUrl(),
  timeout: 10000,
});

// Add response interceptor for fallback
API.interceptors.response.use(
  (response) => {
    console.log("✅ API Response:", response.status, response.config.url);
    return response;
  },
  async (error) => {
    console.error("❌ API Error:", error.config?.url, error.message);
    
    // If we're on ngrok and external domain call fails, this would need special handling
    if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
      console.error("🔴 Backend unreachable");
    }
    
    return Promise.reject(error);
  }
);

export default API;