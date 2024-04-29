import React from 'react'

const Loginpage = () => {
  return (
    <>
      <div className='cont-login'>
        <span style={{fontSize:100,fontWeight:'bolder'}}>Login</span>
      <div className='div-ground'>
        <div className='img-back'>
          <div className='main-login'><span className='welcome-login'>Welcome Login Page</span><br></br>
          <span className='sign-in'>sign in with your email address and password</span>
          <input placeholder='email-address'></input><br></br>
          <input placeholder='password'></input><br></br>
          <button>login</button></div>
        </div>
        </div>
      </div>
    </>

  )
}

export default Loginpage
