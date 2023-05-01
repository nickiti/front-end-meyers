import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import DisableBodyScroll from './DisableBodyScroll'
import { useMediaQuery } from 'react-responsive'




export default function ProductPopUp({closeModal, name, images, desc, height, width }) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    console.log(height)
    return (
        <>
        <DisableBodyScroll/>
        { !isMobile &&

       <div onClick={()=>{closeModal(false)}} className='overlay fixed flex justify-center items-center z-20 bg-gray-600 h-screen w-screen bg-opacity-70 overflow-hidden pt-5'>

    <div onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }} class="card max-w-6xl rounded bg-white shadow-xl text-gray-800 relative md:text-left py-4">
             <button className='top-left text-2xl mt-3 mr-1 hover:text-gray-300 cursor-pointer' onClick={()=>{closeModal(false)}}><AiOutlineClose size={30}/></button>
            <div class="md:flex justify-center items-center pb-5">
                <div class="product-image">
                <img src={images[0]} alt="Omar Dsoky" height={80} width={200}/>
                </div>
                <div class="w-full md:w-1/2 px-10">
                    <div class="mb-4">
                        <h1 class="font-bold uppercase text-2xl mb-4"> {name} </h1>
                        <b>Description</b><br/>
                        <p class="text-sm">{desc}</p>
                    </div>
                    <div>
                            <div className='flex flex-col mt-4'>
                                <b>For pricing, questions, purchases call: </b>
                                <span>(682)-433-4835</span>
                                <span>(682)-777-8795</span>
                            </div>
                    </div>
                </div>
            </div>
    </div>
    </div>  
    }
        { isMobile &&
            <div className='overlay z-30 h-screen w-screen bg-white mt-20'>
                    <button className='top-left text-2xl mt-2 mb-5 cursor-pointer hover:text-gray-300' onClick={()=>{closeModal(false)}}><AiOutlineClose/></button>


                <div className="flex flex-col justify-center items-center">
  
                    <div class="product-image pb-4">
                        <img src={images[0]} alt="Omar Dsoky" height={80} width={200}/>
                    </div>
                    <h4 className='text-black font-bold text-lg mt-4'>{name}</h4>
                    <h4 className='text-black font-bold text-lg mt-3'>Description:</h4>
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
