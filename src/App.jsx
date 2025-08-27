import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/edit-job/:id" element={<EditJob />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
            position: "sticky",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
