import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebase';
import {login,logout, selectUser } from './features/userSlice';

import {useDispatch, useSelector } from 'react-redux';

function App() {
 const dispatch = useDispatch();
  

  const user = useSelector(selectUser);
useEffect(() => {
  auth.onAuthStateChanged((userAuth)=>
  {
    
    if(userAuth)
    {
       dispatch(login(
         {
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          profilePic: userAuth.photoURL,
         }
       ))
    }
    else{
      dispatch(logout());
    }
  })

 
}, [dispatch]);

  return (
    <div className="App">
      
    <HomeScreen/>
    {!user? (<Login/>)
    
      : 
      ( <div className="App__body">
      
      <Sidebar/>
      <Feed/>
  
     </div>)
      }
   
    </div>
  );
}

export default App;
