import'./App.css'
import BatchN4 from './components/BatchN4'
import {useEffect,useState} from 'react'
const App=()=>{
  const[userList,setUserList]=useState([])
useEffect(()=>{
  const fetchApi= async()=>{
    const res=await fetch('https://6ae9ab483d3dd3d37be57408.mockapi.io/students')
    const data= await res.json();
    const changedata= data.map((eachUser)=>{
      return {
        id:eachUser.id,
        name:eachUser.name,
        studentid:eachUser.student_id,
        batch:eachUser.batch,
        email:eachUser.email,
        instructorname:eachUser.instructor_name,
        collegename:eachUser.college_name
      }
    })
    setUserList(changedata)
  }
  fetchApi()
},[])
return (
 <div>
<div>
  <h1>Student Details</h1>
  <p>N4 Batch</p>
  <input type="search" placeholder="Name" />
</div>

  <div className="heading-user">
    <p>ID</p>
    <p>Name</p>
    <p>Student</p>
    <p>Batch</p>
    <p>Email</p>
    <p>Teacher Name</p>
    <p>College Name</p>
  </div>

  <div className="user-list">
    <ul className="list">{userList.map((eachDetails)=>(
    <BatchN4 userDetails={eachDetails} key={eachDetails.id}/>


    ))}</ul>

  </div>
</div>




)
}

export default App