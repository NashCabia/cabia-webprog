import axios from "axios";
import { API_URL } from "../constants";

const userApi = axios.create({
  baseURL: `${API_URL}/users`,
});

export default userApi;
export const fetchUsers = () => API.get("/");
export const createUser = (user) => API.post("/", user);
export const updateUser = (id, user) => API.put(`/${id}`, user);
export const deleteUser = (id) => API.delete(`/${id}`);
export const loginUser = (credentials) => API.post("/login", credentials);