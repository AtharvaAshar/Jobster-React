import userSlice from "./features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/job/jobSlice";
import allJobsSlice from "./features/job/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job:jobSlice,
    allJobs:allJobsSlice
  },
});
