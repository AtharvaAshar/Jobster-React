import {HiChevronDoubleLeft,HiChevronDoubleRight} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from "../assets/wrappers/PageBtnContainer"
import { changePage } from '../features/job/allJobsSlice'
const PageBtnContainer = () => {
    const {numOfPages,page}=useSelector((store)=>store.allJobs)
    const dispatch=useDispatch()
    const pages=Array.from({length:numOfPages},(_,index)=>{
        return index+1
    })
    const prevPage =()=>{
        let newPage= page-1 
        if(newPage<1){
            newPage=numOfPages
        }
        dispatch(changePage(newPage))
    }
    const nextPage =()=>{
        let newPage=page+1
        if(newPage>numOfPages){
            newPage=1
        }
        dispatch(changePage(newPage));
    }
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              type="button"
              key={pageNumber}
              onClick={()=>dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
}

export default PageBtnContainer
