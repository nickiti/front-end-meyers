import { Outlet, Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
      <>

<nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex ">
          { !isMobile &&
            <a href="#" class="flex items-center ml-0 pl-0">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">thearcadesupply</span>
            </a>
            }
            <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>

            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul className="flex flex-col font-medium ml-4 mt-2 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <Link className="text-gray-900 dark:text-white hover:underline" to="/">Home</Link>         </li>
                    <li>
                    <Link className="text-gray-900 dark:text-white hover:underline" to="/store">Store</Link>
                    </li>
                </ul>
            </div>
        </div>
        {isMobile &&
             <a href="#" className="flex items-center ml-0 pl-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">thearcadesupply</span>
            </a>
        }
        {  !isMobile &&
            <div className="flex items-center">
                <a href="tel:6824334835" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(682)-433-4835</a>
                <a href="tel:6827778795" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(682)-777-8795</a>
            </div>
        }

    </div>
</nav>
      <Outlet />
      </>
  )
};

export default Layout;
