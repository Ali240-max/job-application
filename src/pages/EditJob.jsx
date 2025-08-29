import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import EditJobForm from "../components/EditJobForm";

function AddJob() {
  const navigate = useNavigate();
  return (
    <div className="px-8 py-8 flex flex-col gap-5 max-sm:px-4">
      <div className="flex gap-2 items-center">
        <ArrowLeft
          size={35}
          className="text-gray-600 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200 rounded-full p-1"
          onClick={() => navigate("/dashboard")}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Edit your Job Application</h1>
          <span className="text-gray-600 text-md">
            Edit the details of your application
          </span>
        </div>
      </div>
      <EditJobForm />
    </div>
  );
}

export default AddJob;
