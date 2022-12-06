import React from "react";
import './Ticket.css'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const Ticket=()=>{
    const nav=useNavigate()
    const param=useParams()
    let id = param.id

    const[date, setDate]=useState('')
    const[price, setPrice]=useState('')
    const[start, setStart]=useState('')
    const[end, setEnd]=useState('')
    const[total_quan, setTotal_quan]=useState('')


   

    const loginData=async()=>{
        let result= await fetch(`http://localhost:5000/addticket/${id}`, {
            method: 'post',
            body: JSON.stringify({ date, price, start, end, total_quan}),
          
             
            headers:{
                'Content-Type':'application/json',
             
            }
        })
       
      
         result=await result.json()
          console.warn(result)
         if(result.status===true ){
           alert(result.message)
         }else{
            alert(result.message)
         }
    }

    return (
        <div className="tick">
            <input className="inputBox" value={date} min={new Date().toISOString().split('T')[0]} onChange={(e)=>setDate(e.target.value)}  type='date' placeholder="Enter date"/>
            <input className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)} type='number' placeholder="Enter price"/>
            <label >Select starting time:</label>
            <input className="inputBox" value={start} onChange={(e)=>setStart(e.target.value)} type='time' placeholder="Enter starting time"/>
            <label >Select ending time:</label>
            <input className="inputBox" value={end} onChange={(e)=>setEnd(e.target.value)} type='time' placeholder="Enter ending time"/>
            <input className="inputBox" value={total_quan} onChange={(e)=>setTotal_quan(e.target.value)} type='price' placeholder="Enter total quantity"/>
            <button onClick={loginData} className="btn" type="button">Login</button>
        </div>
    )
}

export default Ticket