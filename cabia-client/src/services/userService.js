import axios from "axios";
import { API_URL } from "../constants";

const userApi = axios.create({
  baseURL: `${API_URL}/users`,
});

export default userApi;
export const fetchUsers = () => userApi.get("/");
export const createUser = (user) => userApi.post("/", user);
export const updateUser = (id, user) => userApi.put(`/${id}`, user);
export const deleteUser = (id) => userApi.delete(`/${id}`);
export const loginUser = (credentials) => userApi.post("/login", credentials);