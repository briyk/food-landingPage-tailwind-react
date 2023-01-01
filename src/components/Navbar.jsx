import React , {useState} from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
        const [nav,setNav] = useState(false)
  

        const hoverEffect = 'hover:bg-black hover:text-white duration-300'
  return (
    <div className="max-w-[1600px] flex justify-between items-center p-4 mx-auto">
      {/* Logo and toggle */}
      <div className="flex items-center">
          <AiOutlineMenu size={30} className="cursor-pointer" onClick={() => setNav(!nav)} />
    
        <h2 className="text-lg md:text-2xl lg:text-4xl px-1">
          Cersh <span className="font-bold">Keepers</span>
        </h2>
        
      </div>
      <div className="hidden lg:flex items-center bg-gray-200 p-1 text-[14px] font-medium rounded-full">
          <p>Dilervery</p>
          <p className="bg-black text-white rounded-full p-1 ml-1">pickup</p>
        </div>
      {/* Search bar */}
      <div className="flex w-[180px] sm:w-[300px] md:w-[400px] bg-gray-200 p-1 rounded-full">
            <AiOutlineSearch size={25} className="pl-1"/>
            <input type="text" placeholder="Search..." className="focus:outline-none bg-transparent w-full outline-0 border-0 px-2" />
      </div>
      {/* Cart Button */}
      <button type="button" className="md:flex items-center hidden bg-black text-white text-[16px] rouned-full">
            <BsFillCartFill size={20} className="mr-1" /> Cart
      </button>
      {/* Mobile overlay screen */}
      {
        nav?     <div className="bg-black/80 w-full h-screen fixed top-0 left-0 z-10">
        </div> : ''
      }
   
      {/* sidebar screen */}
      <div className={nav ? 'fixed top-0 left-0 w-[250px] sm:w-[300] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <AiOutlineClose size={25} 
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => setNav(!nav)}
            />
            <h2 className="text-lg md:text-2xl lg:text-2xl px-1 text-center py-4">
                Cersh <span className="font-bold">Keepers</span>
            </h2>
            <nav>
            <ul className='flex flex-col p-0 text-gray-800'>
                <li className={`${hoverEffect} text-xl px-2 py-4 flex`}><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className={`${hoverEffect} text-xl px-2 py-4 flex`}><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className={`${hoverEffect} text-xl px-2 py-4 flex`}><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className={`${hoverEffect} text-xl px-2 py-4 flex`}><MdHelp size={25} className='mr-4' /> Help</li>
                <li className={`${hoverEffect} text-xl px-2 py-4 flex`}><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className={`${hoverEffect} text-xl px-2 py-4 flex`}><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className={`${hoverEffect} text-xl px-2 py-4 flex`}><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
            </nav>
      </div>
    </div>
  );
};

export default Navbar;
