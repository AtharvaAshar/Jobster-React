import { Formrow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FormRowSelect } from "../../components";
import {handleChange,clearValues,createJob,editJob} from '../../features/job/jobSlice'
import { useEffect } from "react";
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOption,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const {user} =useSelector((store)=>store.user)

  useEffect(()=>{
    if(!isEditing){
      dispatch(handleChange({name:'jobLocation',value:user.location}))
    }
  },[])
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(createJob({position,company,jobLocation,jobType,status}))
    
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({name,value}))
  };
  return (
    <Wrapper>
      <form action="" className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          <Formrow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <Formrow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <Formrow
            type="text"
            labeltext="Job Location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            id="status"
            list={statusOptions}
            handleChange={handleJobInput}
          />

          {/* job type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOption}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
