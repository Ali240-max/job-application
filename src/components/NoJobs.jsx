import { Plus } from "lucide-react";
import { Link } from "react-router";

function NoJobs() {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-md px-2 py-15 items-center justify-center rounded-lg flex-1">
      <div className="bg-gray-200 rounded-full h-15 w-15 flex items-center justify-center">
        <Plus className="w-9 h-9 text-gray-500" />
      </div>
      <h1 className="text-2xl font-semibold">No Job applications yet</h1>
      <span className="text-gray-600 text-md">
        Start tracking your job applications by adding your first one.
      </span>
      <Link
        className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg  transition-all duration-300 hover:scale-103 shadow-sm mt-5"
        to={"/add-job"}
      >
        <Plus />
        <span>Add New Job</span>
      </Link>
    </div>
  );
}

export default NoJobs;
