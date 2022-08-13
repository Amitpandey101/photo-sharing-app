import React from 'react'
import './Landingpage.css'
import { Link } from 'react-router-dom'

const Landingpage = () => {
  return (
   <>
   <div className='container'>
   <div class="full-screen">
  <div>
    <h1>Post your Heart Here</h1>
    <br/>
    <Link to="/postview"><button className='button-line'>Click Here to Enter </button></Link>
  </div>
</div>
   
 
    </div>
 
   </>
  )
}

export default Landingpage
