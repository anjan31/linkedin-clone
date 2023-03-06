import React, { useState } from 'react'
import './login.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';
function Login() {
const [name, setName] = useState('');
const [url, setUrl] = useState('');

const [email, setEmail] = useState('');

const [password, setPassword] = useState('');
const dispatch = useDispatch();



const register = () => {
    if(!name)
    {
        return alert('Name is required for registration');
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
        userAuth.user.updateProfile(
            {
                displayName: name,
                photoURL: url,
            }
        )
        .then(()=>{dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: url,

        }))})
    }).catch((error) =>   alert(error.message) );

};

const signin = (e) => {
    e.preventDefault(); 

    auth.signInWithEmailAndPassword(email,password)
    .then((userAuth)=>
    {dispatch(login(
        {
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName : userAuth.user.displayName,
            photoURL  : userAuth.user.photoURL,
        }
    ))}).catch((error)=> alert(error)   )
    
};

  return (
      <div className='log'>
    <div className='login'>
        <img className='logo' src = "https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt='logo'/>
        
            <form>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter name ' type="text" />
                <input value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder='Enter Profile Pic URL' type="text" />
                 <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter  Email' type="email" /> 
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter  Password' type="password" />    
                <button onClick={signin} type="submit">
                    Sign In
                </button>

            </form>
            <p>Not a member? 
                <span onClick={register} className='register'> Register Now</span>
            </p>

        
    </div>
    </div>
  )
}

export default Login