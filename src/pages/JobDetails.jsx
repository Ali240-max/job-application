import { useParams } from "react-router";
import { useSelector } from "react-redux";
import JobDetailsHeader from "../components/JobDetailsHeader";
import JobDetailsCard from "../components/JobDetailsCard";
import { format } from "date-fns";

function JobDetails() {
  const { id } = useParams();
  const { jobTitle, notes, applicationDate, applicationStatus, companyName } =
    useSelector((state) => state.jobs.find((job) => job.id === id));

  const jobDate = format(new Date(applicationDate), "MMM d, yyyy");

  return (
    <div className="px-8 max-sm:px-4 py-8 flex flex-col gap-5 ">
      <JobDetailsHeader id={id} />
      <JobDetailsCard
        jobTitle={jobTitle}
        notes={notes}
        applicationDate={jobDate}
        applicationStatus={applicationStatus}
        companyName={companyName}
        id={id}
      />
      <div className="bg-white rounded-lg shadow-md px-5 py-5 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Timeline</h1>
        <div>
          <div className="flex items-center  gap-2">
            <div className="h-2 w-2 px-1 rounded-full bg-blue-500"></div>
            <span className="text-gray-500 text-sm">Created {jobDate} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
