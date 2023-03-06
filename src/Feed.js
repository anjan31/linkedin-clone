import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './feed.css'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import IconOptions from './IconOptions';
import Posts from './Posts';
import { collection, onSnapshot } from "firebase/firestore";



import db from "./firebase";

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
   const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] =   useState([]);
  //console.log(posts);

    


    
  

  useEffect(() => {
    onSnapshot(collection(db,"posts"), (snapshot) =>
     setPosts(snapshot.docs.map(
       (doc) =>(
       
       { 
        ...doc.data(),
        id: doc.id

       }
       
       ))),
       //console.log(snapshot.docs.map((doc) =>doc.data()))
       
    );
  }, []);
  

  const sendPost = (e) => {
    e.preventDefault();
    

    db.collection('posts').add({
      name: user.displayName,
      job:'Graduate Student at Binghamton University',
      message: input,
      photoUrl: user.profilePic,
     
    });
    setInput("");

    
  };

  

  return (
    <div className='feed'>
        <div className="icontainer">
        <div className="input_container">
        <Avatar className='avatar' src={user?.profielPic}>{user.displayName[0]}</Avatar>

            <div className="input_txt">
            <form>
                <input  value = {input} type='text' onChange = {(e)=>{setInput(e.target.value)}}   placeholder='Start Post'/>
                <button onClick={sendPost}  type='submit'>Send</button>
            </form>
          
            
            </div>
            </div>
            <div className="icons-container">
                <IconOptions name = {"Images"} Icon = {PhotoSizeSelectActualIcon} color = {"#378fe9"}/>
                <IconOptions name = {"Video"} Icon = {SmartDisplayIcon} color = {"#5f9b49"}/>

                <IconOptions name = {"Events"} Icon = {EventIcon} color = {"#c37d16"}/>

                <IconOptions name = {"Write Article"} Icon = {TextSnippetIcon} color = {"#e16745"}/>

                </div>
            


            

        </div>
     
        <div className="post_feed">
            {posts.map( ({id, name,job,message,photoUrl,timeStamp}) => (
              <Posts 
              key ={id} 
              name = {name}
              job = {job}
              message = {message}
              photUrl = {photoUrl}
               />
               
          
            ))}
        </div>


        
    </div>
  )
}


export default Feed