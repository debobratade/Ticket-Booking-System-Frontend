import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ViewEvent.css";


const ViewEvent = () => {
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
  };
    //  console.warn("products", products)



  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/deltick/${id}`, {
      method: "Delete",
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
      <li>date</li>
      <li>description</li>
      <li>price</li>
      <li>total_quantity</li>
      <li>available_quantity</li>
      <li>Edit</li>
    </ul>
    {
    event.length>0 ? event.map((item, index) => (
     
      <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.date}</li>
        <li>{item.description.start +"-"+item.description.end }</li>
        <li>{item.price}</li>
        <li>{item.total_quantity}</li>
        <li>{item.avaliable_quantity
}</li>
        <li>
          <button className="tick-btn" onClick={() => deleteProduct(item._id)}>Delete</button>
         
        </li>
      </ul>
    ))
    : <h1>No result found</h1>
    }
  </div>
  );
};

export default ViewEvent;
