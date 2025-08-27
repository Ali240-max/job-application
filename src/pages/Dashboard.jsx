import JobHeader from "../components/JobHeader";
import JobStatusCard from "../components/JobStatusCard";
import SearchArea from "../components/SearchArea";
import NoJobs from "../components/NoJobs";
import JobCard from "../components/JobCard";
import { useSelector } from "react-redux";
import { useState } from "react";

function Dashboard() {
  const jobs = useSelector((state) => state.jobs);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const totalJobs = jobs.length;
  const appliedJobs = jobs.filter(
    (job) => job.applicationStatus === "applied"
  ).length;
  const interviewingJobs = jobs.filter(
    (job) => job.applicationStatus === "interviewing"
  ).length;
  const offersJobs = jobs.filter(
    (job) => job.applicationStatus === "offers"
  ).length;

  const searchedJobs = jobs.filter(
    (job) =>
      job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
      job.companyName.toLowerCase().includes(query.toLowerCase())
  );

  const filteredJobs = searchedJobs.filter((job) => {
    if (filter === "all") return true;
    return job.applicationStatus === filter;
  });

  return (
    <div className="px-8 py-8 flex flex-col gap-5 lg:px-30">
      <JobHeader />
      <div className="flex gap-4 max-xs:flex-wrap ">
        <JobStatusCard type="Total" count={totalJobs} />
        <JobStatusCard type="Applied" count={appliedJobs} />
        <JobStatusCard type="Interviewing" count={interviewingJobs} />
        <JobStatusCard type="Offers" count={offersJobs} />
      </div>
      <SearchArea
        query={query}
        setQuery={setQuery}
        filter={filter}
        setFilter={setFilter}
      />
      {jobs.length === 0 && <NoJobs />}
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap justify-center  ">
        {filteredJobs.map((job, i) => (
          <JobCard
            key={job.id}
            title={job.jobTitle}
            notes={job.notes}
            date={job.applicationDate}
            status={job.applicationStatus}
            id={job.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
