import Logo from './Logo'
import Wrapper from '../assets/wrappers/BigSidebar'
import { useSelector } from 'react-redux';
import Navlinks from './Navlinks'
const BigSidebar = () => {
  const {isSidebarOpen}=useSelector((store)=>store.user)
  return (
    <Wrapper>
      <div className={isSidebarOpen?"sidebar-container show-sidebar":"sidebar-container"}>
        <div className="content">
          <header>
            <Logo/>
          </header>
          <Navlinks/>
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar
