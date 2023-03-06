import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './sidebar.css'

function Sidebar() {

  const user = useSelector(selectUser);
  console.log(user);
      
    const recentitem = (topic) =>
    (
        <div className='topic'>
           <span className='hash'>#</span>
           <p>{topic}</p>
        </div>
    );
      
  return (
    <div className='side'>

        <div className="name">
            <img className='bg_img' src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg" alt='background'/>
        <Avatar className='avtar' src={user?.profilePic}>{user.displayName[0]}</Avatar>
         <h3>{user.displayName}</h3>
         <p className='status'>Graduate Student at Binghamton University</p>
         </div>

         <div className="stats">
             <div className="stat">
         <p className='para'>Profile Views</p> <p className='views'> 56</p>
         </div>
         <div className="stat">

         <p className='para'>Connections</p> <p className='views'> 234</p>
         </div>
         </div>

         <div className="side_bottom">

         <p>Recents</p>
         {recentitem('Software')}
         {recentitem('MachineLearning')}
         {recentitem('ChatGpt')}

         {recentitem('Design')}



   </div>

      
    </div>  
  )
}

export default Sidebar