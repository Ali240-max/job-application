import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { deleteJob } from "../features/jobsSlice";

function JobDetailsHeader({ id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteJob(id));
    navigate("/dashboard");
  }

  return (
    <div className="flex gap-2 items-center justify-between max-xs:flex-col max-xs:items-baseline ">
      <div className="flex gap-2 items-center max-xs:flex-col max-xs:items-baseline">
        <ArrowLeft
          size={35}
          className="text-gray-600 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-200 rounded-full p-1"
          onClick={() => navigate("/dashboard")}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Job Details</h1>
          <span className="text-gray-600 text-md">
            View and manage your job application
          </span>
        </div>
      </div>
      <div className="flex gap-3 ">
        <Link
          to={`/edit-job/${id}`}
          className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg  transition-all duration-300 hover:scale-103 shadow-sm gap-2 cursor-pointer"
        >
          <Edit />
          <span>Edit</span>
        </Link>
        <button
          className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg  transition-all duration-300 hover:scale-103 shadow-sm gap-2 cursor-pointer"
          onClick={handleDelete}
        >
          <Trash2 />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default JobDetailsHeader;
