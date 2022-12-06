
import react from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminProfile.css'

const AdminProfile=()=>{

    const nav=useNavigate()

  let data  = localStorage.getItem('data')
  data = JSON.parse(data)
 

    return(
        <>
        <h1>Profile</h1>
         
        <div className='profileg'>
            <img src={data.profileImage} alt={data._id}/>
            <h3>{data.name}</h3>
            <article>{data.email}</article>
            <h5>Role: {data.role}</h5>

            <button className='butn' onClick={()=>nav(`/allevent/${data._id}`)}>All events</button>
            <button className='butn' onClick={() => nav('/admin')}>Home</button>
        </div>
        </>
    )
}

export default AdminProfile