import store from "../store";
function exportJobs() {
  console.log("Export clicked!");
  const state = store.getState();
  const json = JSON.stringify(state, null, 2);

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "redux-state.json";
  a.click();

  URL.revokeObjectURL(url);
}

export default exportJobs;
