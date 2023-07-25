import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-format';
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";
const MAX_RATING=5;
const MIN_RATING=1;


const Products = ({id,title,price,description,category,image}) => {
    const [rating]=useState(
        Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
    );
    const [hasPrime]=useState(Math.random()<0.5)
    const dispatch=useDispatch();
    const addItem=()=>{
        const product={
            id,title,price,description,category,image,hasPrime
        }
        dispatch(addToBasket(product));
    }

  return (
    <div style={{position:"relative", display:"flex", margin:10, backgroundColor:"white", flexDirection:"column", zIndex:30, padding:10,width:400}}>
      <p className="text-gray-400"style={{position:"absolute", top:2, fontSize:13,fontStyle:"italic",margin:-20,padding:-20}} >
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit='contain' justifyContain='center' />
      <h4 style={{margin:4}}>{title}</h4>
      <div style={{display:"flex"}}>
        {
            Array(rating).fill().map((_,i)=>(
                <StarIcon className="text-yellow-500" style={{height:20,color:"orange"}}/>
            ))
        }
        
      </div>

      <p className="mt-2 text-xs line-clamp-2">
        {description}
      </p>
      <div className="mb-5">
      <Currency style={{fontWeight:"bold"}}value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </div>
      {
        hasPrime && (
            <div className=" space-x-2 -mt-5"style={{display:"flex",alignItems:"center"}}>
                <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                <p style={{color:"blue"}}className="text-xs text-gray-500">Free delivery Next-Day</p>
            </div>
        )
      }
      <button onClick={addItem}className="mt-auto " style={{backgroundColor:"orange" ,'--hover-backgroundColor':'blue'}}>
        Add to Basket
      </button>

      
    </div>
  )
}

export default Products
