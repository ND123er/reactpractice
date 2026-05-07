import api from "./axios";

export const loginUser = async (data) => {
  try {
    const response = await api.post("/auth/login_user", data);
    return response.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};