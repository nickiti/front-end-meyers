import React from 'react'
import Carousel from './Carousel'
import {AiOutlineClose} from 'react-icons/ai'
import DisableBodyScroll from './DisableBodyScroll'
import { useMediaQuery } from 'react-responsive'




export default function ProductPopUp({closeModal, name, images, desc }) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <>
        <DisableBodyScroll/>
        { !isMobile &&
        <div onClick={()=>{closeModal(false)}} className='overlay fixed flex justify-center items-center z-20 bg-gray-600 h-screen w-screen bg-opacity-70 overflow-hidden pt-5'>
            <div onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }} className='fixed flex md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl mb-5 z-30 pb-24'>
                <button className='top-left text-2xl mt-3 mr-1 hover:text-gray-300 cursor-pointer' onClick={()=>{closeModal(false)}}><AiOutlineClose size={40}/></button>    
                <div className='flex justify-between'>
                    <div className='img'>      
                     <Carousel images={images} />    
                     </div>
                      
                    <div className="flex flex-col ml-2">
                        <h1 className="uppercase text-black text-2xl font-medium">{name}</h1>
                        <h4 className='text-black font-bold text-xl mt-4'>Description:</h4>
                        <small className="text-black"> {desc} </small>
                        <div className='flex flex-col mt-4'>
                            <b>For pricing, questions, purchases call: </b>
                            <span>(682)-433-4835</span>
                            <span>(682)-777-8795</span>
                        </div>
                    </div>

                </div>

                
            </div>
        </div> 
        }
        { isMobile &&
            <div className='fixed flex z-30 h-screen w-screen bg-white mt-20'>
                <div className='mt-20 '> 
                    <button className='top-left text-2xl mr-1 mb-5 cursor-pointer hover:text-gray-300' onClick={()=>{closeModal(false)}}><AiOutlineClose/></button>
                </div>

                <div className="flex flex-col ml-2 mt-4">
                        <div className='img'>      
                            <Carousel images={images} />    
                        </div>
                        <h1 className="uppercase text-black text-2xl font-medium">{name}</h1>
                        <h4 className='text-black font-bold text-xl mt-4'>Description:</h4>
                        <small className="text-black"> {desc} </small>
                        <div className='flex flex-col mt-4'>
                            <b>For pricing, questions, purchases call: </b>
                            <span>(682)-433-4835</span>
                            <span>(682)-777-8795</span>
                        </div>
                        </div>
            </div>
        }
        </>
    )
}
