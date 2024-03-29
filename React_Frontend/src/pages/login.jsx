import React, { useState } from 'react';
import {TextField} from '@mui/material';
import store from '../features/storage'
import videobg1 from '../images/signup.mp4';
import { login } from '../features/admin';
import User from '../axios/User';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 


  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const user = {};

    user["email"] = email;
    user["password"] = password;

    try{
      const res = User.loginUser(user)
      .then((response) => {
        toast.success("Login Successful")
         console.log(response);
          const token = response.data.token; 

          window.localStorage.setItem("jwtToken",token);
          
          const info = atob(token.split(".")[1]);

          console.log(info);
          const infoParse = JSON.parse(info);
          const uid = (infoParse.user.uid);
          const role = (infoParse.user.role);

          window.localStorage.setItem("uid", uid);
          window.localStorage.setItem("role", role);

          console.log(infoParse.user.name);


          if(role==='ADMIN')
          {
            window.location.href = '/admin'
            // navigate('/admin')
          } 
          else
          {
            // history.push('/home');
            window.location.href  = '/home'
            // navigate('/home')
          }
        }
       )
      .catch((err)=>{ 
        toast.error("Invalid Credentials")
        console.log(err)
      });
      }
    catch(err)
    { 
      console.log(err);
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full object-cover z-[-1]">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <video autoPlay  loop muted playsInline className='back-video'>
        <source src={videobg1} type='video/mp4'/>
      </video>
      <div className="before">
      <div className="container bg-white p-6 rounded shadow-md text-center opacity-80 backdrop-blur-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full overflow-x-hidden">       
         <form className="login-form" onSubmit={handleLogin}>
            <div className="font-bold text-end font-fantasy">
              Bookstagram.inc
            </div>
            <div className="login text-left">
              <br />
              <div className='text-3xl font-bold'>
                Login
              </div>
              <br />
              <h3>Welcome Back, Reading Redefined!</h3>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            {errorMessage && <p className="error text-left">{errorMessage}</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <br /><br />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" onClick={() => store.dispatch(login({ email }))}>Login</button>
            <br /><br />
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
