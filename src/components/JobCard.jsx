import { Calendar, Notebook } from "lucide-react";
import { useNavigate } from "react-router";

function JobCard({ title, notes, date, status, id }) {
  const navigate = useNavigate();
  const styles = {
    applied: "bg-blue-50 text-blue-600",
    interviewing: "bg-yellow-50 text-yellow-600",
    offers: "bg-green-50 text-green-600",
  };
  return (
    <div
      className="flex justify-between px-4 py-7 bg-white rounded-lg shadow-md transition-all border border-transparent duration-300 hover:shadow-lg hover:border hover:border-blue-300 cursor-pointer hover:scale-102 max-xs:flex-col max-xs:items-baseline max-xs:gap-3 flex-1 md:max-w-100 min-w-90 max-sm:min-w-50 "
      onClick={() => navigate(`/job-details/${id}`)}
    >
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex gap-1 text-gray-600 items-center">
          <Notebook className="w-4 h-4 " />
          <p className="text-sm">{notes}</p>
        </div>
        <div className="flex gap-1 text-gray-600 mt-4 items-center">
          <Calendar className="w-4 h-4 " />
          <p className="text-sm text-gray-600">Applied {date}</p>
        </div>
      </div>

      <div
        className={`h-6 text-sm px-4 rounded-full capitalize flex items-center justify-center font-semibold
      ${styles[status]}`}
      >
        {status}
      </div>
    </div>
  );
}

export default JobCard;
