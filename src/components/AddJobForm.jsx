import { useForm } from "react-hook-form";
import { Save } from "lucide-react";
import { useDispatch } from "react-redux";
import { addJob } from "../features/jobsSlice";
import { useNavigate } from "react-router";

function AddJobForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    dispatch(addJob(data));
    navigate("/dashboard");
    reset();
  }

  function generateId() {
    return Math.random().toString(36).slice(2);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 bg-white rounded-lg shadow-md px-4 py-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor=""
          className="text-gray-800 font-semibold text-sm justify-center"
        >
          Comapny name *
        </label>
        <input
          type="text"
          placeholder="Enter company name"
          className=" px-2 py-3 rounded-lg focus:outline-none transition-all duration-300  border-gray-300 border"
          {...register("companyName", { required: "Company name is required" })}
        />
        {errors.companyName && (
          <p className="text-red-500 font-semibold text-sm">
            * {errors.companyName.message}
          </p>
        )}
        <input type="hidden" value={generateId()} {...register("id")} />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor=""
          className="text-gray-800  font-semibold text-sm justify-center"
        >
          Job Title *
        </label>
        <input
          type="text"
          placeholder="Enter job title"
          className=" px-2 py-3 rounded-lg focus:outline-none transition-all duration-300  border-gray-300 border"
          {...register("jobTitle", { required: "Job title is required" })}
        />
        {errors.jobTitle && (
          <p className="text-red-500 font-semibold text-sm">
            * {errors.jobTitle.message}
          </p>
        )}
      </div>
      <div className="flex gap-3 max-xs:flex-col">
        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor=""
            className="text-gray-800  font-semibold text-sm justify-center"
          >
            Application Status
          </label>
          <select
            name=""
            id=""
            className=" px-2 py-3 rounded-lg focus:outline-none transition-all duration-300  border-gray-300 border "
            {...register("applicationStatus", { required: true })}
          >
            <option value="applied">Applied</option>
            <option value="interviewing">Interviewing</option>
            <option value="offers">Offers</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor=""
            className="text-gray-800  font-semibold text-sm justify-center"
          >
            Application Date *
          </label>
          <input
            type="date"
            placeholder="Enter job title"
            className=" px-2 py-3 rounded-lg focus:outline-none transition-all duration-300  border-gray-300 border"
            defaultValue={new Date().toISOString().split("T")[0]}
            {...register("applicationDate")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <label
          htmlFor=""
          className="text-gray-800  font-semibold text-sm justify-center"
        >
          Notes
        </label>
        <textarea
          name=""
          id=""
          className=" px-2 py-3 min-h-30 rounded-lg focus:outline-none transition-all duration-300  border-gray-300 border"
          placeholder="Add any notes about this application (interview details, contacts, etc.)"
          {...register("notes", { required: false })}
        ></textarea>
        <button
          to={"/add-job"}
          className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg  transition-all duration-300 hover:scale-103 shadow-sm  mt-3 cursor-pointer whitespace-nowrap gap-2 ml-auto"
        >
          <Save />
          <span>Add Job Application</span>
        </button>
      </div>
    </form>
  );
}

export default AddJobForm;
