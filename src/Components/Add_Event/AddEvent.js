import react, { useEffect, useState } from 'react'
import axios from 'axios'
import './AddEvent.css'
import { useNavigate } from 'react-router-dom'
const AddEvent=()=>{

  let data = localStorage.getItem('data')
  data = JSON.parse(data)
   
  const[slug, setSlug]= useState('')
  const[name, setName]= useState('')
  const[description, setDescription]= useState('')
  const[start, setStart]= useState('')
  const[end, setEnd]= useState('')
    const [file, setFile]= useState(undefined)
    const[Id, setId]= useState(data._id)

// const nav = useNavigate()


   


    const hadleSubmit= async()=>{
        const formData = new FormData()

        formData.append('Id', Id )
        formData.append('file', file )
        formData.append('slug', slug )
        formData.append('name', name )
        formData.append('description', description )
        formData.append('start', start )
        formData.append('end', end )

        const config = {
          headers:{
              "Content-Type":"multipart/form-data",
              authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
          }
      }

      
        // if(slug && name && file && start && end && description ){
          const response=  axios.post('http://localhost:5000/add', formData, config )
           .then (res=>{
             // navigate('/login')
             console.log(res);
            })
            alert("Successful")
           .catch(err=>alert(err.response.data.message))
           
            //  }else{
            //      alert("Kindly fill all fields")
            //  }
     
     
       

     

    }

    return(
        <>
        <div className='mainBox'>
        <form onSubmit={hadleSubmit}>
         
          <div className="form-group">
            <h3 >Add Event</h3>
            <input className="in" type='text' value={slug} onChange={(e)=>setSlug(e.target.value)} placeholder="Enter slug"/>
            <input className="in" type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
            <input className="in" type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter description"/>
            <input className="in" type='date' min={new Date().toISOString().split('T')[0]} value={start} onChange={(e)=>setStart(e.target.value)} placeholder="Enter start date dd-mm-yyyy"/>
            <input className="in" type='date' min={new Date().toISOString().split('T')[0]} value={end} onChange={(e)=>setEnd(e.target.value)} placeholder="Enter end date dd-mm-yyyy"/>
            <input
              type="file"
              name="file"
              className="in"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
  
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
        </div>
      </>
    )
}

export default AddEvent