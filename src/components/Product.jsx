import React, {useState} from 'react'
import Rating from './Rating'
import ProductPopUp from './ProductPopUp'

export default function Product(props) {
    //used to close and open modal
    const [openModal, setOpenModal] = useState(false);


    return (
        <>
        <div className='flex flex-row md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl content-center w-auto h-auto ml-5 mt-5'>
            <div className='text-black-500 flex flex-col justify-center content-center'>
                <img className='justify-center ml-14' width='100px' height='200px' src={props.image} alt=''/>
                <div className="flex-row text-blue-500">
                    <h3 className="uppercase text-black text-xl font-medium">{props.name}</h3>
                    <h3 className="text-xl font-semibold">${props.price}</h3>
                    <Rating rating={props.rating}/><br/> 
                </div>
                <div> 
                    <button className="bg-blue-600 hover:bg-blue-500 focus:outline-none text-white uppercase px-8 py-3 ml-10 mt-4 transition duration-150 ease-in-out" onClick={() => {setOpenModal(true)}}>View More</button>
                </div>
            </div>
        </div> 
        {openModal && <ProductPopUp 
                key= {props.id}
                closeModal= {setOpenModal}
                name={props.name}
                price={props.price}
                rating={props.rating}
                image={props.image_link || `https://via.placeholder.com/150/92c952`}
                link = {props.product_link }
                desc = {props.description || "Can't find description, sorry..."}
                />}
        </>
    )
}
