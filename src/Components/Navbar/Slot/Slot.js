import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Slot.css";


const Slot = () => {
  const [event, setEvent] = useState([]);
  let nav = useNavigate()
  let param = useParams()
  let id = param.id

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    let result = await fetch(`http://localhost:5000/getticket/${id}`,{

    headers:{
      authorization: `${JSON.parse(localStorage.getItem('token'))}`
    }

  })
    result = await result.json();
    setEvent(result);
    console.log(result);
  };
   



  const handleBuy = async (id) => {
    let result = await fetch(`http://localhost:5000/getticket/${id}`, {
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
      <li>Time</li>
      <li>Price</li>
      <li>Avaliable Seat</li>
      <li>Action</li>
    </ul>
    {
    event.length>0 ? event.map((item, index) => (
     
      <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.description.start +" "+item.description.end}</li>
        <li>{item.price }</li>
        <li>{item.avaliable_quantity}</li>
       
        
        <li>
          <button className="tick-btn" onClick={() => handleBuy(item._id)}>Buy</button>
         
        </li>
      </ul>
    ))
    : <h1>No result found</h1>
    }
  </div>

  );
};

export default Slot;
