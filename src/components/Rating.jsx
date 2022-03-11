import React from 'react'
import RatingStar from './RatingStar'

export default function Rating(props) {
    let rating = Math.round(props.rating/2)
    let other = 5 - rating

    
    return (
        <div>
            <ul className='flex'>
                {[...Array(rating)].map((star, i)=>{
                    return <RatingStar key={i} rating={rating}/>
                })}
                {[...Array(other)].map((star, i)=>{
                    return <RatingStar key={i} other={other}/>
                })}
            </ul>
        </div>
    )
}