import { useDispatch, useSelector } from "react-redux";
import { Formrow, FormRowSelect } from ".";
import { handleChange,clearFilters  } from "../features/job/allJobsSlice";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useState,useMemo } from "react";
const SearchContainer = () => {
  const [localSearch,setLocalSearch]=useState('')
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const { jobTypeOption, statusOptions } = useSelector((store) => store.job);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('')
    dispatch(clearFilters())
  };
  const handleSearch = (e) => {
    
    dispatch(handleChange({name:e.target.name,value:e.target.value}))
  };
  const debounce =()=>{
    let timeoutId
    return (e)=>{
      setLocalSearch(e.target.value)
      clearTimeout(timeoutId)
      timeoutId=setTimeout(()=>{
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      },1000)
    }
  }
  const optimizedDebounce = useMemo(() => debounce()
  // eslint-disable-next-line
  , []);

  return (
    <Wrapper>
      <form className="form">
        <h4>Search form</h4>
        <div className="form-center">
          {/* Search Position */}
          <Formrow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOption]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
