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
        <div onClick={()=>{closeModal(false)}} className='overlay fixed flex justify-center items-center z-20 bg-gray-800 h-screen w-screen bg-opacity-80 overflow-hidden pt-5'>
            <div onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }} className='fixed flex md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl mb-5 z-30'>
                <button className='top-left text-2xl mt-3 mr-1 hover:text-gray-300 cursor-pointer' onClick={()=>{closeModal(false)}}><AiOutlineClose size={40}/></button>    
                <div className='flex justify-between'>
                    <Carousel images={images} />            
                    <div className="flex flex-col ml-2">
                        <h1 className="uppercase text-black text-2xl font-medium">{name}</h1>
                        <h4 className='text-black font-bold text-xl mt-4'>Description:</h4>
                        <small className="text-black"> {desc} </small>
                        <a className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5' href="tel:(682)-433-4835" target="_blank">Call</a>
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
                        <Carousel images={images}/>
                        <h1 className="uppercase text-black text-2xl font-medium">{name}</h1>
                        <h4 className='text-black font-bold text-xl mt-4'>Description:</h4>
                        <small className="text-black"> {desc} </small>
                        <a className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 pr-2' href="tel:(682)-433-4835" target="_blank">Call</a>
                    </div>
            </div>
        }
        </>
    )
}
