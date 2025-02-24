import React from 'react'
import { NavLink,Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import '../Css/nav.css'

const navbar = () => {
  return (
    
  
    <nav>
<NavLink to='/' ><IoHomeOutline /><div className='con'>Home</div></NavLink >
<Link to="/#about"><FaRegUser /><div className='con'>About Me</div></Link >
 <NavLink to ='/Project'><MdOutlineLibraryBooks /><div className='con'>My Projects</div></NavLink >
 <NavLink to ='/Contact'><IoIosContact /><div className='con'>ContactMe</div></NavLink >
  </nav>
  

  
  )
}

export default navbar
