import { Briefcase, CheckCircle, Clock, Award } from "lucide-react";

function JobStatusCard({ type, count }) {
  const config = {
    Total: {
      style: "bg-gradient-to-br from-gray-100 to-gray-300 text-black",
      icon: <Briefcase className="w-6 h-6" />,
    },
    Applied: {
      style: "bg-gradient-to-br from-blue-100 to-blue-300 text-blue-800",
      icon: <Clock className="w-6 h-6" />,
    },
    Interviewing: {
      style: "bg-gradient-to-br from-yellow-100 to-yellow-300 text-yellow-800",
      icon: <Award className="w-6 h-6" />,
    },
    Offers: {
      style: "bg-gradient-to-br from-green-100 to-green-300 text-green-800",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  };

  return (
    <div
      className={`flex flex-col gap-3 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform  ${config[type].style} flex-1 `}
    >
      <div className="flex items-center justify-between w-full">
        {config[type].icon}
        <span className="text-sm font-medium opacity-80">{type}</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight">{count}</h1>
    </div>
  );
}

export default JobStatusCard;
