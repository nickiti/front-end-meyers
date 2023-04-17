import {useState,useEffect} from 'react'
import axios from 'axios'


//custom hook that gets data from endpoint to array
export function useEndpoint(){
    let url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        axios.get(url)
            .then(res => {
                setProducts(res.data)
        })
    }, [url])

    
    return [products]
}