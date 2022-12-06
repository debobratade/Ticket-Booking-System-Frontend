import React from "react";
import './Signup.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";


function Signup(){
    
    const[name, setName]= useState('')
    const[file, setFile]=useState(undefined)
    const[email, setEmail]=useState('')
    const[phone, setPhone]=useState('')
    const[password, setPass]=useState('')
    const[role, setrole]=useState('')
    
    const navigate=useNavigate()



    const postData=async()=>{
        const formData = new FormData()
        formData.append('role', role )
        formData.append('name', name )
        formData.append('email', email )
        formData.append('phone', phone )
        formData.append('password', password )
        formData.append('file', file )

        const config = {
            headers:{
                "Content-Type":"multipart/form-data",
               
            }
        }

        if(role && name && file && email && phone && password){
     const response=  axios.post('ticket-booking-system.up.railway.app/register', formData, config )
      .then (res=>{
        // navigate('/login')
        console.log(res);
        alert("Successful")
    })
      .catch(err=>alert(err.response.data.message))
      
        }else{
            alert("Kindly fill all fields")
        }
     
    }
    return (
     
        <div className="box">
            <input className="inputBox" type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Last Name"/>
            <input className="inputBox" type='file' name="img"  accept=".jpeg, .png, .jpg" onChange={(e)=>setFile(e.target.files[0])}/>
            <input className="inputBox" type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inputBox" type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone"/>
            <input className="inputBox" type='text' value={password} onChange={(e)=>setPass(e.target.value)} placeholder="Enter Password"/>
            <select className="inputBox" onChange={(e)=>setrole(e.target.value)}>
                <option>select role</option>
                <option>admin</option>
                <option>user</option>
                </select>
   
            <button onClick={postData} className="btn" type="button">Sign Up</button>
        </div>
      
    )
}

export default Signup