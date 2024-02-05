import React from 'react';
import './cta.css';
const cta = () => {
  return (
    <div className='gpt3__cta section__padding'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h1>Register today & start exploring the endless possiblities.</h1>
      </div>

      <div className='gpt3__cta-button'>
        {/* <h1>Get Started</h1> */}
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default cta