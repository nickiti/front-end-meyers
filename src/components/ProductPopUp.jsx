import React from 'react'
import Carousel from './Carousel'
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
        }} class="card  w-full h-75 max-w-6xl rounded bg-white shadow-xl lg:p-20 mx-auto text-gray-800 relative md:text-left py-4">
             <button className='top-left text-2xl mt-3 mr-1 hover:text-gray-300 cursor-pointer' onClick={()=>{closeModal(false)}}><AiOutlineClose size={30}/></button>
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10">
                <Carousel className="w-full relative z-10" height={height} width={width} images={images}/>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5"> {name} </h1>
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
             {/*<div onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }} className='container fixed flex md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl mb-5 z-30 pb-24'>
                <button className='top-left text-2xl mt-3 mr-1 hover:text-gray-300 cursor-pointer' onClick={()=>{closeModal(false)}}><AiOutlineClose size={30}/></button>    
                <div className='flex justify-between'>
                    <div className='product-image-left'>      
                     <Carousel images={images} /> 
                     <img src={images[0]}></img>
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

                
            </div>*/}
    </div>  
    }
        { isMobile &&
            <div className='fixed flex z-30 h-screen w-screen bg-white mt-20'>
                <div className='mt-20 '> 
                    <button className='top-left text-2xl mr-1 mb-5 cursor-pointer hover:text-gray-300' onClick={()=>{closeModal(false)}}><AiOutlineClose/></button>
                </div>

                <div className="flex flex-col ml-2 mt-4">
                <div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ..."><Carousel images={images}/></div>
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
