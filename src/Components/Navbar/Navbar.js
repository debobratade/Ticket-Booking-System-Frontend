import React from 'react';
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import imageLogo from '../../Images/logo.png'


const Navbar=()=>{
   
    let data = localStorage.getItem('data')
    data = JSON.parse(data)
    const navigate = useNavigate()

    const logout=()=>{
        localStorage.clear()
        navigate('/signup')
    }
    return (
        
        
        
        <div>
           <img className='logoStyle' src={imageLogo} alt='Display is missing'/>
           <p className='titleStyle'>Theater</p>
    {
   
     data?(
         data.role==="admin"?
         
         <ul className='nav-ul'>
            <img className='log' src={data.profileImage} alt={data.name}/>
            <li><Link to='/admin'>Home</Link></li>
            <li><Link to='/addevent'>Events</Link></li>
            <li><Link to='/adminprofile'>Profile</Link></li>
            <li> <Link onClick={logout} to='/signup'>Logout [{data.name}]</Link> </li>
            
        </ul>
         
     
      
        :
        <ul className='nav-ul'>
        <img className='log' src={data.profileImage} alt={data.name}/>
        <li><Link to='/user'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/myshow'>My show</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li> <Link onClick={logout} to='/signup'>Logout [{data.name}]</Link> </li>
        
    </ul>
     ):
     <ul className='nav-ul nav-right'>
     <li><Link to='/signup'>Signup</Link></li>
     <li><Link to='/login'>Login</Link></li>
     </ul>
}
       </div>
       
    )
}

export default Navbar