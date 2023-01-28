import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import {clearStore} from "../features/user/userSlice"

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});
export const checkUnauthorizedRequests =(error,thunkAPI)=>{
  if(error.response.status===401){
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue("Unauthorized Logging out...")
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}
export default customFetch;
