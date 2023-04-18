import React, {useState} from 'react'
import ProductPopUp from './ProductPopUp'
import { useMediaQuery } from 'react-responsive';
export default function Product(props) {
    //used to close and open modal
    const [openModal, setOpenModal] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });


    return (
        <>
{ !isMobile &&
<div id="container">	
	
        <div className="product-details">
            
        <h1 className=''>{props.name}</h1>
        
        <div className="flex-1 mt-3">
                <div className='flex flex-col mt-4'>
                        <b>For pricing, questions, purchases call: </b>
                        <span>(682)-433-4835</span>
                        <span>(682)-777-8795</span>
                </div>
            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3" onClick={() => setOpenModal(!openModal)}>See more</button>
        </div>
    </div>
        
        
    
        
    <div className="product-image">
        <img src={props.images[0]} alt="Omar Dsoky" />
    </div>
    
    
    </div>}

    {isMobile && 
    <div className='flex justify-center items-center pt-24'>
    <div class="flex flex-col h-min w-56 p-1 border-box bg-white rounded xl border-gray-600 border w-screen">
    <div class="flex rounded flex-col w-ful w-full h-48">
        <img className='w-100 h-100' src={props.images[0] } alt='hello'/>
    </div>
    <div class="flex border-box p-1 flex-col">
        <p>{props.name}</p>
        <p class="text-sm text-gray-500">{props.desc}</p>
        <button class="text-center text-sm bg-blue-500 rounded py-2 text-white mt-2" onClick={()=>setOpenModal(true )}>View Item</button>
    </div>
</div>
</div>
    }
        {/* <div className='container flex flex-row md:flex-row gap-11 py-5 px-5 bg-white rounded-md shadow-md w-3/4 md:max-w-xl content-center w-auto h-auto ml-5 mt-5 mr-5'>
            <div className='text-black-500 flex flex-col justify-center content-center'>
                <div className="flex flex-column">
                <h2 className="self-start text-black text-lg whitespace-pre-line font-medium mb-4 ">{props.name}</h2>
                    <img
                    className="w-full h-48 object-cover"
                    src={props.images[0]}
                    loading="lazy"
                    alt={""}
                    />
                </div>
                <div className="flex-1 mt-3">
                        <p className='text-gray-600'>Call for pricing</p>
                        <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3" onClick={() => setOpenModal(!openModal)}>See more</button>
                    </div>
            </div>

            
        </div>  */}
        {openModal && isMobile && <ProductPopUp 
                key= {props.id}
                closeModal= {setOpenModal}
                name={props.name}
          
                images={props.images || `https://via.placeholder.com/150/92c952`}
                desc = {props.desc || "Can't load description"}
                />}
                        {openModal && !isMobile && <ProductPopUp 
                key= {props.id}
                closeModal= {setOpenModal}
                name={props.name}
                height={550}
                width={500}
                images={props.images || `https://via.placeholder.com/150/92c952`}
                desc = {props.desc || "Can't load description"}
                />}
        </>
    )
}
