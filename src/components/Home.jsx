import { Link } from "react-router-dom";
import img from '../assets/IMG_4630.jpg'
import { useMediaQuery } from "react-responsive";

const Home = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return   (
      <>

      <section className="bg-white dark:bg-gray-900 pt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Arcade Supply</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">For all inquiries contact at:</p>
                <p className="object-center">(682)-433-4835</p>
                <p className="object-center">(682)-777-8795</p>

                <Link to={'/store'} className="mt-4 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-500 border-gray-600 mb-4">Browse store</Link>
                {isMobile && <br/>}
                <a className="border px-5 py-3 border-gray-400 font-medium text-center text-black rounded-lg hover:bg-gray-300 mt-3" href="mailto:thearcadesupply@gmail.com">
                    Email Us
                </a> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={img} alt="mockup"/>
            </div>                
        </div>
    </section>
      </>
  )
  };
  
  export default Home;