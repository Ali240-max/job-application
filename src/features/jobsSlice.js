import { createSlice } from "@reduxjs/toolkit";

const loadJobs = () => {
  try {
    const stored = localStorage.getItem("jobsData");
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to parse jobs from localStorage:", err);
    return [];
  }
};

const saveJobs = (jobs) => {
  try {
    localStorage.setItem("jobsData", JSON.stringify(jobs));
  } catch (err) {
    console.error("Failed to save jobs to localStorage:", err);
  }
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: loadJobs().length ? loadJobs() : [],

  reducers: {
    addJob(state, action) {
      state.push(action.payload);
      saveJobs(state);
    },
    deleteJob(state, action) {
      const updated = state.filter((job) => job.id !== action.payload);
      saveJobs(updated);
      return updated;
    },
    setJobs: (state, action) => {
      const updated = [...state, ...action.payload];
      saveJobs(updated);
      return updated;
    },
    updateJob: (state, action) => {
      const updated = state.map((job) =>
        job.id === action.payload.id ? action.payload : job
      );
      saveJobs(updated);
      return updated;
    },
  },
});

export const { addJob, deleteJob, setJobs, updateJob } = jobsSlice.actions;
export default jobsSlice.reducer;
