import { Plus } from "lucide-react";
import { Link } from "react-router";
function JobHeader() {
  return (
    <div className="flex justify-between items-center max-xs:flex-col max-xs:items-baseline max-xs:gap-3">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Job Applications</h1>
        <span className="text-gray-600 text-md">
          Track and manage your job appliation journey
        </span>
      </div>
      <Link
        to={"/add-job"}
        className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg  transition-all duration-300 hover:scale-103 shadow-sm whitespace-nowrap"
      >
        <Plus />
        <span>Add New Job</span>
      </Link>
    </div>
  );
}

export default JobHeader;
