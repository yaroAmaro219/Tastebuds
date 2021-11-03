import React from 'react'
import Nav from '../components/Nav1'
import {GoogleLogin} from 'react-google-login'

export default function Login() {
  const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }
  return (
    <div class='contact-page-container'>
    <br/>
        {/* <Nav /> */}
        <div>
        
      <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
        </div>
    </div>
  )
}
