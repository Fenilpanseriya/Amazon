import React from 'react'
import Products from './Products';
import './Product.css'
function Product({product1}){
    console.log(product1);
  return (
    <>
    <div className='container'>
     <div className='cont' style={{display:'flex'}}>
     {
        product1.slice(0,4).map(({id,title,price,rating,description,category,image,hasPrime})=>{
          return <Products
            key={id}
            title={title}
            price={price}
            
            description={description}
            category={category}
            image={image}
            style={{width:100}}
            hasPrime={hasPrime}
          />
        
        })
     }
     </div>
     <img className='col-span-full' src="https://links.papareact.com/dyz" alt="" />
     
    </div>
    <div className='container'>
     <div className='cont' style={{display:'flex'}}>
     {
        product1.slice(4,20).map(({id,title,price,description,category,image})=>{
          return <Products
            key={id}
            title={title}
            price={price}
          
            description={description}
            category={category}
            image={image}
            style={{width:100}}
            
          />
        
        })
     }
     </div>
     {/* <img className='col-span-full' src="https://links.papareact.com/dyz" alt="" /> */}
     
    </div>
    </>
    
  )
}



export default Product
