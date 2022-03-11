import React from 'react'
import Rating from './Rating'



export default function ProductPopUp({closeModal, name, price, rating, image, link, desc }) {



    return (
        <div className='modalBackground flex flex-col'>
            <div className='flex flex-row md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl'>
                <div className='text-indigo-500 flex flex-col justify-between'>
                    <button className='top-left text-2xl' onClick={()=>{closeModal(false)}}>X</button>
                    <div>
                        <img width='200px' height='300px' src={image} alt=''/>
                    </div>
                    
                    <div className="text-indigo-500 ml-2">
                        <h3 className="uppercase text-black text-xl font-medium">{name}</h3>
                        <h4 className='text-black'>Description:</h4>
                        <small className="text-black"> {desc} </small>
                        <h3 className="text-xl font-semibold">$ {price} </h3>
                        <Rating rating={rating}/><br/>
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' src={link}>Buy Now</button>
                </div>

                
            </div>
        </div>
    )
}
