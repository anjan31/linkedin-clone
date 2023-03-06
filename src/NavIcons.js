import React from 'react'
import './navicon.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'



function NavIcons({title, Icon, avatar,onClick }) {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div onClick={onClick} className='content'>
       {Icon && (<Icon className = "icon"/>)}
       {avatar && (<Avatar src = {user?.profilePic} className = "icon">{user?.displayName[0]}</Avatar>)}
        <h3 className='title'>{title}</h3>
    </div>
  )
}

export default NavIcons