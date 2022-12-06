import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './UserHome.css'

const UserHome=()=>{

    let nav = useNavigate()
    const [Event, setEvent] = useState([]);


    useEffect(() => {
        getEvent();
      }, []);

    const getEvent = async () => {
        let result = await fetch('http://localhost:5000/getall',{
          headers:{
            authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
          }
      })
        result = await result.json();
        console.warn(result)
       if(result.length>0){
        setEvent(result);
        localStorage.setItem("Event",JSON.stringify(result))
       }
      };


   

   const deleteEvenet = async (Id) => {
    let result = await fetch(`http://localhost:5000/deletedoc/${Id}`, {
      method: "Delete",
      headers:{
        authorization: ` ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
  
    if (result.status===true) {
      alert(result.message);
      getEvent();
    }else{
      alert(result.message)
    }
  };




    return (
        <div className="midlle">
      {
       
      Event.length>0 ? Event.map((item, index) => (
        <ul key={index}>
          <li >
            {
          <div className='card' >
            {}
          <img src={item.poster} alt={item.slug}/>
          <article>  {item.name}</article><br/>
             <div className='bttn' >
            <button className="cart-btn" onClick={() => nav(`/slot/${item._id}`)}>Slots</button>
             <button className="cart-btn" onClick={() => nav(`/buy/${item._id}`)}>Buy</button>
    
             </div>
             </div>
       
 } </li>
        </ul>
      ))
      : <h1>No result found</h1>
      }
    </div>

    )
}

export default UserHome