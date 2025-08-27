import store from "../store";
import { setJobs } from "../features/jobsSlice";
import toast from "react-hot-toast";

export default function importJobs() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const raw = event.target.result;
        const cleaned = raw.replace(/^\uFEFF/, "").trim();
        const data = JSON.parse(cleaned);

        if (!data.jobs || !Array.isArray(data.jobs)) {
          alert("Invalid file format — 'jobs' key missing or not an array");
          return;
        }

        store.dispatch(setJobs(data.jobs));
        toast.success("Jobs imported successfully");
      } catch (err) {
        console.error("Error parsing JSON file:", err);
        alert("Error parsing JSON file — check console for details");
      }
    };

    reader.readAsText(file);
  };

  input.click();
}
