import { ArrowLeft } from "lucide-react";
import AddJobForm from "../components/AddJobForm";
import { useNavigate } from "react-router";

function AddJob() {
  const navigate = useNavigate();
  return (
    <div className="px-8 py-8 flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <ArrowLeft
          size={35}
          className="text-gray-600 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200 rounded-full p-1"
          onClick={() => navigate("/dashboard")}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Add New Job Application</h1>
          <span className="text-gray-600 text-md">
            Track a new job oppurtunity
          </span>
        </div>
      </div>
      <AddJobForm />
    </div>
  );
}

export default AddJob;
