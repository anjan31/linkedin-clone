import React from 'react'
import './nav.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NavIcons from './NavIcons';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import {logout} from './features/userSlice';
import { auth } from './firebase';


function Nav() {
  const dispatch = useDispatch();
  

  const logoutApp = () => { 
       dispatch(logout());
       auth.signOut();
  }


  return (
    <div className='nav'>
       <div className="nav_left">
           <img className='logo' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
           

           <div className='search'>
           <SearchIcon/>
          <input    placeholder='Search' type="text" />
          </div>
       </div>
      
      <div className="nav_right">
        
        <NavIcons title = {"Home"} Icon = {HomeIcon}/>
        <NavIcons title = {"My Network"} Icon = {SupervisorAccountIcon}/>
        <NavIcons title = {"Jobs"} Icon = {WorkIcon}/>
        <NavIcons title = {"Messages"} Icon = {SmsIcon}/>
        <NavIcons title = {"Notifications"} Icon = {NotificationsIcon}/>
        <NavIcons title = {"Me"} onClick = {logoutApp} avatar ="true"/>

 
      </div>

    </div>
  )
}

export default Nav