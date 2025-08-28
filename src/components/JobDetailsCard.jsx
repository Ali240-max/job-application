import { Building2, Calendar } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router";

function JobDetailsCard({
  jobTitle,
  notes,
  applicationDate,
  applicationStatus,
  companyName,
  id,
}) {
  const jobDate = format(new Date(applicationDate), "MMM d, yyyy");
  const styles = {
    applied: "bg-blue-50 text-blue-600 border-blue-300",
    interviewing: "bg-yellow-50 text-yellow-600 border-yellow-300",
    offers: "bg-green-50 text-green-600 border-green-300",
  };
  return (
    <div className="bg-white rounded-lg shadow-md px-3 py-5 flex flex-col gap-10  ">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">{jobTitle}</h1>
          <div className="flex gap-1 text-gray-600 items-center">
            <Building2 className="w-6 h-6 " />
            <p className="text-md font-semibold">{companyName}</p>
          </div>
          <div className="flex gap-1 text-gray-600 mt-4 items-center">
            <Calendar className="w-4 h-4 " />
            <p className="text-sm text-gray-600">Applied {jobDate}</p>
          </div>
        </div>

        <div
          className={`h-6 text-sm px-4 rounded-full capitalize flex items-center justify-center font-semibold border 
      ${styles[applicationStatus]}`}
        >
          {applicationStatus}
        </div>
      </div>
      {notes ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Notes</h1>
          <div className="bg-gray-100 shadow-md rounded-lg px-4 py-5">
            {notes}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col gap-2">
          <p className="text-gray-600 text-md">
            No notes added for this job application
          </p>
          <Link
            className="text-blue-500 font-semibold cursor-pointer px-2 py-2 transition-all duration-300 hover:bg-blue-100 rounded-lg"
            to={`/edit-job/${id}`}
          >
            Add some notes
          </Link>
        </div>
      )}
    </div>
  );
}

export default JobDetailsCard;
