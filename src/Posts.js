import { Avatar } from '@mui/material'
import React from 'react'
import './posts.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import RepeatIcon from '@mui/icons-material/Repeat';
import IconOptions from './IconOptions';

function Posts({ name, job,message,photoUrl}) {
  



  return (
    <div className='posts'>
      <div className="pcontent">
       <div className="post_content">
           <Avatar src = {photoUrl} >{name[0]}</Avatar>
           <div className="Post_id">
               <h4>{name}</h4>
               <p className='msg'> {job} </p>
            </div>
        </div>
          <div className="messages">
              <p > {message}</p>
          </div>
          <div className="reactions">
            
            <IconOptions name ="Like" Icon = {ThumbUpOffAltIcon} color = "gray" />
            <IconOptions name ="Comment" Icon = {CommentIcon} color = "gray" />
            <IconOptions name ="Repost" Icon = {RepeatIcon} color = "gray" />

            <IconOptions name ="Send" Icon = {SendIcon} color = "gray" />
          
         

          </div>
          </div>
       

         
    </div>
  )
}

export default Posts