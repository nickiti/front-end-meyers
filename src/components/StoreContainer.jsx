import React from 'react'
import Product from './Product'
import img1 from '../assets/IMG_4630.jpg';
import img2 from '../assets/IMG_8847.jpg';
import img3 from '../assets/IMG_8856.jpg';
import img4 from '../assets/IMG_8858.jpg';
import img5 from '../assets/IMG_8867.jpg';
import img6 from '../assets/IMG_8872 copy.jpg';
import img7 from '../assets/IMG_8874-Edit.jpg';
import img8 from '../assets/IMG_8917-Edit.jpg';
import img9 from '../assets/IMG_8923_1.jpg';
import img10 from '../assets/IMG_8948-Edit.jpg';
import img11 from '../assets/IMG_8961-Edit.jpg';
import img12 from '../assets/Untitled-1.jpg';
import { useMediaQuery } from 'react-responsive';

//container for products

export default function StoreContainer() {
    //gets data from endpoint using custom hook
    let products = [
        {
            name: "8-Player Fish shooting game",
            images: [img1],
            desc: "Fish shooting game. Shoot fish to win grand prize. Plays 8 players per table."
        },
        {
            name: "Fish-Game Shoot/Fire Button",
            images: [img2],
            desc: "Button for fish shooting game"
        },
        {
            name: "Original Sanwa Joystick",
            images: [img3, img4],
            desc: "Joystick used for fish game machine; Joystick game Console"
        }
        ,
        {
            name: "Apex-7400 -UB3-USA PTI Bill Acceptor",
            images: [img5, img6],
            desc: "120 Volts A/C. Accepts $1, $5, $10, $20 Bills"
        }
        ,
        {
            name: "Apex-7600 -UB3-USA PTI Bill Acceptor",
            images: [img5, img6],
            desc: "120 Volts A/C. Accepts $1, $5, $10, $20, $50, $100 Bill"
        }
        ,
        {
            name: "Pot of Gold (POG) Motherboard",
            images: [img7],
            desc: "Motherboard hardware for Pot of Gold game machine. Compatible with Skilled Games metal cabinet."
        }
        ,
        {
            name: "Skilled Games Metal Cabinet",
            images: [img8, img9, img12],
            desc: "Metal cabinet used to house game boards for Pot of Gold (POG), Gold Touch (GT), and Texas Keno"
        },
        {
            name: "Life of Luxury (LOL) Metal Cabinet",
            images: [img10],
            desc: "Metal cabinet used to house game board for Life of Luxury Game (LOL)"
        },
        {
            name: "3-Player Fish shooting game",
            images: [img11],
            desc: "Fish shooting game. Shoot fish to win grand prize. Plays up to 3-players per table."
        }
    ] 
    // const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 9;
    const offset = 0 * PER_PAGE;
    // const pageCount = Math.ceil( products === null ? 10 : products.length / PER_PAGE);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    // function handlePageClick({ selected: selectedPage }) {
    //     setCurrentPage(selectedPage);
    // }

    return(
        <>
        {!isMobile &&
        <div className='flex flex-col w-screen pt-24'>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 lg-grid-cols-3'>    
                {products?.slice(offset, offset + PER_PAGE).map((product, i)=>{
                    return(
                        <Product 
                            key={i}
                            name={product.name}
                            images={product.images}
                            desc = {product.desc}
                        />
                    )
                    })}
            </div> 

        </div>
        }
        {
            isMobile && 
            <div className='flex flex-column pt-24'>
                {products?.slice(offset, offset + PER_PAGE).map((product, i)=>{
                                return(
                                    <Product 
                                        key={i}
                                        name={product.name}
                                        images={product.images}
                                        desc = {product.desc}
                                    />
                                )
                                })}
            </div>
        }
        <div className='pb-24 mt-4'></div>
        {/* { 
                    <ReactPaginate
                    className='flex flex-row justify-center content-center mt-5 mb-11 pb-24'
                    previousLabel={
                        <div className='w-10 h-10 flex items-center justify-center bg-gray-400 hover:text-gray-100 rounded-md mr-4'>
                            <BsChevronLeft/>
                        </div>
                    }
                    nextLabel={         
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-400 hover:text-gray-100 rounded-md ml-4">
                            <BsChevronRight/>
                       </div>
                    }
                    containerClassName='flex items-center justify-center mt-8 mb-4'
                    pageClassName='block border- border-solid border-gray-200 hover:bg-gray-200 flex justify-center items-center w-10 h-10'
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                /> 
} */}
                </>
    )
}
