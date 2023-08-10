import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Images/logo.png"
import { FcSearch } from "react-icons/fc"
import { MdClose } from "react-icons/md"
import {FaBars} from "react-icons/fa"
import {AiFillHome,AiOutlineClose} from "react-icons/Ai"
import{BsFillPersonLinesFill, BsFillTelephoneFill} from 'react-icons/Bs'
import "./Header.css"; // Import the CSS file


const Header = () => {
  const [drop, setDrop] = useState(false)
  
  const [show, setShow] = useState(false);
  const handleIconClick = () => {
    setDrop((prevState) => !prevState); // Toggle the 'drop' state
  };
  return (
    <header className='bg-gray-800 p-1'>
      <nav className=' flex justify-between p-2 '>
        <div className="w-20">
          <img src={logo} alt="My Logo" className='rounded-3xl' />
        </div>
        <ul className='hidden md:flex  text-white justify-center items-center gap-8 cursor-pointer text-lg font-bold  '>
           <li>
            <Link to="/" className=' hover:text-red-500'> Home</Link>
          </li>
          <li>
            <Link to="/about"  className="hover:text-red-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className=' hover:text-red-500'>Contact</Link>
          </li>
       

        </ul>
        <FcSearch size={32} className='hidden md:block  mt-5 mr-20' onClick={() => setShow(true)} />
        <div className="md:hidden cursor-pointer mt-5" onClick={handleIconClick}>
        {drop ? <AiOutlineClose size={37} color='white' /> : <FaBars size={32} color='white' />}
      </div>
      </nav>

      <hr />
      
      {
        show ?
          <div className="flex m-8 justify-between gap-12 animate-fade-in"> 
            <input

              type="search"
              className="w-full h-12 px-4 py-2 rounded-full border"
              placeholder="Search items..."
            />
            <MdClose size={50} color='white' onClick={() => setShow(false)} />
          </div> : null
      }
{
  drop?
  
      <div className="md:hidden flex flex-col justify-center items-center bg-blue-500  h-[80%] animate-fade-in">
      
      <ul className=' text-white gap-8 cursor-pointer text-lg font-bold m-4'>
           <li className=' flex justify-center  hover:text-red-500   w-[100%] rounded-full shadow-lg bg-slate-600 shadow-gray-500 m-2 p-4  hover:scale-110 ease-in-out duration-200 gap-3  '>
           <AiFillHome size={30} color='white' />
                   <Link to="/"  > Home</Link>
          </li> 
          <li className=' flex justify-center  hover:text-red-500   w-[100%] rounded-full shadow-lg bg-slate-600 shadow-gray-500 m-2 p-4  hover:scale-110 ease-in-out duration-200 gap-3 '>
          <BsFillPersonLinesFill size={30} color='white'/>
            <Link to="/about" >About</Link>
          </li>
          <li className=' flex justify-center  hover:text-red-500   w-[100%] rounded-full shadow-lg bg-slate-600 shadow-gray-500 m-2 p-4  hover:scale-110 ease-in-out duration-200 gap-3 '>
          <BsFillTelephoneFill size={30} color='white'/>
            <Link to="/contact" >Contact</Link>
          </li>
          <input
type="search"
className="w-full h-9 px-8 py-2 rounded-full border text-black"
placeholder="Search items..."
/>

        </ul>
      </div>:null
}


    </header>
  );
};

export default Header