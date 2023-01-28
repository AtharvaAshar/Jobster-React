import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "./Loading";
import { getallJobs } from "../features/job/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";
const JobsContainer = () => {
  const { jobs, isLoading, page, numOfPages, totalJobs,search,searchType,searchStatus,sort } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getallJobs());
    }, 1000);
    // eslint-disable-next-line
  }, [page,search,searchStatus,searchType,sort]);
  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs-info">
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
