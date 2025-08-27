import { Briefcase, Download, Import, Plus } from "lucide-react";
import { NavLink } from "react-router";
import exportJobs from "../utils/ExportJobs";
import importJobs from "../utils/ImportJobs";

function NavBar() {
  return (
    <div className="flex flex-col bg-white ">
      <div className="flex justify-between p-4">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 ">Job Tracker</h1>
        </div>
        <div className="flex gap-4 max-xs:gap-1">
          <button
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer max-xs:px-1"
            onClick={importJobs}
          >
            <Import />
            <span className="hidden sm:inline">Import Data</span>
          </button>
          <button
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer max-xs:px-1"
            onClick={exportJobs}
          >
            <Download />
            <span className="hidden sm:inline">Export Data</span>
          </button>
        </div>
      </div>
      <div className="flex gap-5 px-4 py-4 border-t border-gray-300 w-full ">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer ${
              isActive ? "bg-blue-50 text-blue-600" : ""
            }`
          }
        >
          <Briefcase />
          <span className="hidden sm:inline">Dashboard</span>
        </NavLink>
        <NavLink
          to="/add-job"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer ${
              isActive ? "bg-blue-50 text-blue-600" : ""
            }`
          }
        >
          <Plus />
          <span className="hidden sm:inline">Add Job</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
