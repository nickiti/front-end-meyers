import { Link } from "react-router-dom";
import img from '../assets/IMG_4630.jpg'
import img2 from '../assets/IMG_8847.jpg'
import img3 from '../assets/IMG_8856.jpg'
import img4 from '../assets/IMG_8858.jpg'
import img5 from '../assets/IMG_8867.jpg'
import img6 from '../assets/IMG_8872 copy.jpg'
import img7 from '../assets/IMG_8874-Edit.jpg'
import img8 from '../assets/IMG_8917-Edit.jpg'
import img9 from '../assets/IMG_8923_1.jpg'
import img10 from '../assets/IMG_8948-Edit.jpg'
import img11 from '../assets/IMG_8961-Edit.jpg'
import img12 from '../assets/Untitled-1.jpg'
import { useMediaQuery } from "react-responsive";
import Carousel from "./Carousel";

const Home = () => {

    let images = [
        img,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
    ]

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return   (
      <>

      <section className="flex justify-center items-center bg-white dark:bg-gray-900 pt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 pb-24">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Arcade Supply</h1>
                {isMobile &&       
                <div className="mt-5 img">
                    <Carousel images={images}/>
                </div>}
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">For all inquiries contact at:</p>
                <p className="object-center">(682)-433-4835</p>
                <p className="object-center">(682)-777-8795</p>

                <Link to={'/store'} className="mt-4 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-500 border-gray-600 mb-4">Browse store</Link>
                {isMobile && <br/>}
                <a className="border px-5 py-3 border-gray-400 font-medium text-center text-black rounded-lg hover:bg-gray-300 mt-3" href="mailto:thearcadesupply@gmail.com">
                    Email Us
                </a> 
            </div>
            {
                !isMobile &&
                <div className="ml-5 lg:mt-0 lg:col-span-5 lg:flex img">
                    <Carousel images={images}/>
                </div> 
          
            }
             
        </div>
    </section>
      </>
  )
  };
  
  export default Home;