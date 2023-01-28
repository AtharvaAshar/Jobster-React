import { useState } from "react"
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { toast } from "react-toastify"
import {Formrow} from '../../components'
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../features/user/userSlice"
const Profile = () => {
  const {isLoading,user} = useSelector((store)=>store.user)
  const [userData,setUserData]= useState({
    name:user?.name || '',
    email:user?.email || '',
    lastName:user?.lastName || '',
    location:user?.location || '',
  })
  const dispatch=useDispatch()
  const handleSubmit =(e)=>{
    e.preventDefault();
     const { name, email, lastName, location } = userData;
     if (!name || !email || !lastName || !location) {
       toast.error("Please fill out all fields");
       return;
     }
     dispatch(updateUser({name,email,lastName,location}))
  }
  const handleChange =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({...userData, [name]:value})
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>Profile</h3>
        <div className="form-center">
          <Formrow type='text' name='name' labelText='name' value={userData.name} handleChange={handleChange}/>
          <Formrow type='text' name='lastName' labelText='last name' value={userData.lastName} handleChange={handleChange}/>
          <Formrow type='email' name='email' labelText='name' value={userData.email} handleChange={handleChange}/>
          <Formrow type='text' name='location' labelText='name' value={userData.location} handleChange={handleChange}/>
          <button className="btn btn-block"  type='submit'disabled={isLoading}>
            {isLoading ? "please wait": 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
