import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"
});


API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token") || localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Axios Response Interceptor to handle 401 Unauthorized
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            //🔥 Auto Logout on Invalid or Deleted User
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export const subscribeNewsletter = () => API.post("/api/subscribe/");
export const getTodayOffer = () => API.get("/api/today-offer/offers/");
export const getProfile = () => API.get("/api/profile/");

export default API;
