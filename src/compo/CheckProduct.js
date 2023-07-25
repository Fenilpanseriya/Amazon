import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '@/slices/basketSlice';
const MAX_RATING=5;
const MIN_RATING=1;
const CheckProduct = ({id,title,price,description,category,image,hasPrime}) => {
    const [rating]=useState(
        Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
    );
    const dispatch=useDispatch();

    const addItem=()=>{
        const product={id,title,price,description,category,image}
        dispatch(addToBasket(product));
    }
    const removeItem=()=>{
        dispatch(removeFromBasket({id}));
    }

  return (
    <div className='flex '>
      <Image src={image} height={200} width={200} objectFit="contain"/>
      <div style={{marginLeft:20}}>
        <p style={{width:700}}>{title}</p>
        <div className='flex'>
        {
        Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarIcon className="text-yellow-500" style={{height:20,color:"orange"}}/>
            ))
            
        }
        </div>
        
        <br/>
        <p style={{width:700}}className='text-xs my-2 line-clamp-3'>
            {description}
        </p>
        <Currency style={{fontWeight:"bold"}}value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
          <div style={{display:'flex',flexDirection:'column',marginBottom:4,justifyContent:'center',marginLeft:50, marginTop:0}}>
            <button className='bg-yellow-400'onClick={addItem}style={{borderRadius:5,margin:5,padding:2}}>Add to Basket</button>
            <button className='bg-yellow-400'onClick={removeItem}style={{borderRadius:5,padding:3}}>Remove from Basket</button>
          </div>
        
    </div>
   
  )
}

export default CheckProduct
