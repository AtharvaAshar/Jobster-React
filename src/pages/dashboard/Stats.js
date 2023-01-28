import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {showStats} from '../../features/job/allJobsSlice'
import {StatsContainer, ChartsContainer,Loading } from "../../components"

const Stats = () => {
  const {isLoading,monthlyApplications}=useSelector((store)=>store.allJobs)
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(showStats())
  },[])
  if(isLoading){
    return <Loading center/>
  }
  return (
    <>
      <StatsContainer/>
      {monthlyApplications.length >0 && <ChartsContainer/>}
    </>
  )
}

export default Stats
