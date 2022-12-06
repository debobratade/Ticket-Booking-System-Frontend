import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./AllEvent.css";


const AllEvent = () => {
  const [event, setEvent] = useState([]);
  let nav = useNavigate()
  let param = useParams()
  let id = param.id

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    let result = await fetch(`http://localhost:5000/getallbyid/${id}`,{

    headers:{
      authorization: `${JSON.parse(localStorage.getItem('token'))}`
    }

  })
    result = await result.json();
    setEvent(result);
    console.log(result);
  };
    //  console.warn("products", products)



  const changeStatus = async (id) => {
    let result = await fetch(`http://localhost:5000/changestatus/${id}`, {
      method: "put",
      headers:{
        authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
     console.warn(result)

    if (result.status===true) {
      alert(result.message);
      getEvent();
    }else{
      alert(result.message)
    }
  };



    
  

  return (
    <div className="event-list">
   <h1> Ticket description</h1>
    <ul>
      <li>S.No</li>
      <li>name</li>
      <li>start_date</li>
      <li>end_date</li>
      <li>published</li>
      <li>Edit</li>
    </ul>
    {
    event.length>0 ? event.map((item, index) => (
     
      <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.start_date }</li>
        <li>{item.end_date}</li>
        <li>{item.published==true? 'published' : "Unpublished" }</li>
        
        <li>
          <button className="tick-btn" onClick={() => changeStatus(item._id)}>Change status</button>
         
        </li>
      </ul>
    ))
    : <h1>No result found</h1>
    }
  </div>

  );
};

export default AllEvent;
