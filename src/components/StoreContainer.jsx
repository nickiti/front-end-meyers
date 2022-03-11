import React,{useState} from 'react'
import Product from './Product'
import {useEndpoint} from '../useEndpoint'
import ReactPaginate from 'react-paginate'

//container for products

export default function StoreContainer() {
    //gets data from endpoint using custom hook
    let [products] = useEndpoint()
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil( products === null ? 10 : products.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return(
        <div className='flex flex-col'>
            <ReactPaginate
                className='flex flex-row justify-center content-center'
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={'page-link'}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                nextClassName={"page-item"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                
            />
            <div className='grid grid-cols-3'>    
                {products?.slice(offset, offset + PER_PAGE).map((product, i)=>{
                    return(
                        <Product 
                            key={i}
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                            image={product.image_link}
                            link = {product.product_link}
                            desc = {product.description}
                        />
                    )
                    })}
            </div> 
            <ReactPaginate
                className='flex flex-row justify-center content-center'
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={'page-link'}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                nextClassName={"page-item"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                
            /> 
        </div>
    )
}
