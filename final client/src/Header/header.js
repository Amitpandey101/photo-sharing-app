import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <>
    
 
    <nav class="navbar">
    <div class="nav-wrapper">
        <img src="logo.PNG" class="brand-img" alt=""/>
        <input type="text" class="search-box" placeholder="search"/>
        <div class="nav-items">
        <Link to="/PostView"><img src="home.PNG" class="icon" alt=""/></Link>
            <img src="messenger.PNG" class="icon" alt=""/>
            <Link to="/Form"><img src="add.PNG" class="icon" alt=""/></Link>
            <img src="explore.PNG" class="icon" alt=""/>
            <img src="like.PNG" class="icon" alt=""/>
            <div class="icon user-profile"></div>
        </div>
    </div>
    {/* <Link to="/Form"><img  src="https://w7.pngwing.com/pngs/469/94/png-transparent-camera-logo-graphy-camera-text-camera-lens-rectangle-thumbnail.png" alt="logo" className='img' />  */}
</nav>

     
        
      
      

   
       
    
    
    </>
   
  )
}
