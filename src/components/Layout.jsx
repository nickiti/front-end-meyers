import { Outlet, Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'

const Layout = () => {
const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
const [toggle, setToggle] = useState(false)

  return (
      <>

<nav className="text-left fixed z-50 overflow-hidden w-screen bg-gray-800 dark:border-gray-700">
  <div className="flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex ">
          { !isMobile &&
            <Link to={'/'} className="flex items-center ml-0 pl-0 text-white">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">thearcadesupply</span>
            </Link>
            }
            <button onClick={() => setToggle(!toggle)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <GiHamburgerMenu/>
            </button>

            <div className="hidden w-full md:block md:w-auto ml-5" id="navbar-solid-bg">
                <ul className="flex flex-col font-medium mt-2 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 text-white">
                    <li className="pr-0 mr-0">
                    <Link className="text-white hover:underline" to="/">Home</Link>        
                     </li>
                    <li>
                    <Link className="text-white hover:underline" to="/store">Store</Link>
                    </li>
                </ul>
            </div>
        </div>
        {isMobile &&
             <Link to={'/'} className="flex items-center ml-0 pl-0 text-white font-bold text-xl">thearcadesupply
            </Link>
        }
        {  !isMobile &&
            <div className="flex items-center">
                <a href="tel:6824334835" className="mr-6 text-sm  text-white hover:underline">(682)-433-4835</a>
                <a href="tel:6827778795" className="mr-6 text-sm  text-white hover:underline">(682)-777-8795</a>
            </div>
        }

    </div>
</nav>
{ toggle && 
                <div
                className="fixed h-screen w-screen bg-white z-40 pt-20"
                onClick={() => setToggle(!toggle)} // change isNavOpen state to false to close the menu
              >
                <ul className="text-black text-center">
                    <li className="border-b border-gray-400 my-8 uppercase font-bold hover:bg-gray-300">
                    <Link className="text-gray-800 hover:underline" to="/">Home</Link>   
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase font-bold hover:bg-gray-300">
                    <Link className="text-gray-800 hover:underline" to="/store">Store</Link>
                    </li>
                </ul>
                <div className="flex justify-center items-center">
                <button className="justify-center ">X</button></div>
              </div>
            }
      <Outlet />
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-800 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <Link to={'/'} className="hover:underline">thearcadesupply</Link>. All Rights Reserved.
    </span>
    { !isMobile &&
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-400 sm:mt-0">
        <li className="mb-2">
            <a href="mailto:thearcadesupply@gmail.com" className="hover:underline">Contact</a>
        </li>
    </ul>
}
</footer>
      </>
  )
};

export default Layout;
