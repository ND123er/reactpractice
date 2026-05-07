// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://66.116.197.167:5001/api/v1/hrm",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // optional: attach token globally
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;
// import axios from "axios";
// const api = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true, // send auth_token cookie automatically
// });

// export default api;
// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://66.116.197.167:5001/api/v1/hrm",
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true, // send auth cookies if needed
// });

// // Automatically add token to all requests
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "/api", // use Vite proxy
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // include cookies
});

// Automatically attach token from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;