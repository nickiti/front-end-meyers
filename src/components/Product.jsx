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
    <div className='card product-card m-2'>	
        <div className='flex flex-col justify-center items-center px-8'>

                        
            <div className='flex justify-center items-center p-3 product-image'>
                <img src={props.images[0]} alt="Omar Dsoky" height={80} width={200}/>
            </div>

            <div className="product-details">
                
            <div className='title-container'>            
                <b className='text-bold lg:text-xl md:text-md '>{props.name}</b>
            </div>

            <div className="flex flex-col justify-between mt-3 mb-4">
                    <div className='flex flex-col mt-4'>
                            <b className='text-sm'>For pricing, questions, purchases call: </b>
                            <span className='text-xs'>(682)-433-4835</span>
                            <span className='text-xs'>(682)-777-8795</span>
                    </div>
                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3" onClick={() => setOpenModal(!openModal)}>See more</button>
            </div>
        </div>
            
            
        

        
        </div>
    </div>
}

    {isMobile && 
    <div className='flex justify-center items-center mt-4'>
    <div class="flex flex-col p-1 border-box bg-white rounded xl border-gray-600 border w-3/4">
    <div class="flex rounded flex-col product-image">
        <img className='w-100 h-100' src={props.images[0] } alt='hello'/>
    </div>
    <div class="flex justify-center align-center border-box p-1 flex-col">
        <b className=''>{props.name}</b>
        <p class="text-sm text-gray-500">{props.desc}</p>
        <button class="text-center text-sm bg-blue-500 rounded py-2 text-white mt-2" onClick={()=>setOpenModal(!openModal)}>View Item</button>
    </div>
</div>
</div>
    }
        {openModal && isMobile && <ProductPopUp 
                key= {props.id}
                closeModal= {setOpenModal}
                name={props.name}
                width={'400px'}
                height={'80'}
                images={props.images || `https://via.placeholder.com/150/92c952`}
                desc = {props.desc || "Can't load description"}
                />
            }
                {openModal && !isMobile && <ProductPopUp 
                key= {props.id}
                closeModal= {setOpenModal}
                name={props.name}
                height={'550px'}
                width={'500px'}
                images={props.images || `https://via.placeholder.com/150/92c952`}
                desc = {props.desc || "Can't load description"}
                />}
        </>
    )
}
