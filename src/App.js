import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PrivateComponent from './PrivateComponent';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import AddEvent from './Components/Add_Event/AddEvent';
import Admin from './Components/Admin_Home/Admin';
import Ticket from './Components/Ticket/Ticket';
import ViewEvent from './Components/View_Event/ViewEvent';
import AdminProfile from './Components/Admin_Proile/AdminProfile';
import AllEvent from './Components/All_Events/AllEvent';
import UserHome from './Components/User_Home/UserHome';
import Slot from './Components/Navbar/Slot/Slot';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    
    <Navbar/>
    <Routes>

     <Route element={<PrivateComponent/>}>
     <Route path='/addevent' element={<AddEvent/>}/>
     <Route path='/logout' element={<h1>Logout</h1>}/>
     <Route path='/adminprofile' element={<AdminProfile/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/ticket/:id' element={<Ticket/>}/>
     <Route path='/viewevent/:id' element={<ViewEvent/>}/>
     <Route path='/allevent/:id' element={<AllEvent/>}/>
     
     <Route path='/user' element={<UserHome/>}/>
     <Route path='/slot/:id' element={<Slot/>}/>
     {/* <Route path='/update/:Id' element={<UpdateProfile/>}/> */}
     
     </Route>
     
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
