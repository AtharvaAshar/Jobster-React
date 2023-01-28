
import customFetch, { checkUnauthorizedRequests } from "../../utils/axios";
export const getallJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const showStatsThunk = async(_,thunkAPI)=>{
    try {
      const resp = await customFetch.get("/jobs/stats");
      return resp.data;
    } catch (error) {
      return checkUnauthorizedRequests(error,thunkAPI)
    }
}
