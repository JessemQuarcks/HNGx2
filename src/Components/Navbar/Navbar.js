 import React, { useState, useEffect } from 'react'
 import "./Navbar.css"
 import tv from "../../Assets/tv.png"
 import Menu from "../../Assets/Menu.svg"
 
 function Navbar() {
    const [ handleShow]= useState(false);
    useEffect(()=> {
      const scrollListener = () => {
      window.addEventListener("scroll",scrollListener  =>{
        if (window.scrollY>100){
          handleShow(true);
        }else handleShow(false); 
      });
      return () => {
        window.removeEventListener("scroll", scrollListener,);
      };}
      }, []);

   return (
     <div className={'nav'}>
        <img
        className='nav_tv_logo'
        src={tv}
        alt="tv logo"
        />

         <img
        className='nav_menu_logo'
        src={Menu}
        alt='menu logo'
        />

     </div>
   )
 }
 
 export default Navbar