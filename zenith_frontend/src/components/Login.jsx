import React from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { json, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logo.png';
import jwt_decode from "jwt-decode";
import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
   //console.log(response);
    const userObject = jwt_decode(response.credential);
    //console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
    const { name, sub, picture } = userObject;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });

  }
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="p-5">
              <img src={logo} width="130px" alt="logo"/>
            </div>
            <div className="shadow-2xl">
              <GoogleLogin
                clientId="922730816997-nm59j0023n96gk19uaamb5tcjstfchd5.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none">
                    <FcGoogle className="mr-4"/> Sign In with Google
                  </button>
                  
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}


              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login
