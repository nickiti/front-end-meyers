import React, {useState} from 'react'
import ProductPopUp from './ProductPopUp'
import Carousel from './Carousel';

export default function Product(props) {
    //used to close and open modal
    const [openModal, setOpenModal] = useState(false);


    return (
        <>
        <div className='container flex flex-row md:flex-row gap-11 py-5 px-5 bg-white rounded-md shadow-md w-3/4 md:max-w-xl content-center w-auto h-auto ml-5 mt-5 mr-5'>
            <div className='text-black-500 flex flex-col justify-center content-center'>
                <div className="flex flex-column">
                    <img
                    className="w-full h-48 object-cover"
                    src={props.images[0]}
                    loading="lazy"
                    alt={""}
                    />
                </div>
                <div className="flex-1">
                        <h4 className="self-start text-black text-lg whitespace-pre-line font-medium">{props.name}</h4>
                        <p className='text-gray-600'>Call for pricing</p>
                        <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3" onClick={() => setOpenModal(!openModal)}>See more</button>
                    </div>
            </div>

            
        </div> 
        {openModal && <ProductPopUp 
                key= {props.id}
                closeModal= {setOpenModal}
                name={props.name}
                images={props.images || `https://via.placeholder.com/150/92c952`}
                desc = {props.desc || "Can't load description"}
                />}
        </>
    )
}
