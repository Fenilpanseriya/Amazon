import Header from '@/compo/Header'
import React from 'react'
import Image from "next/image"
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '@/slices/basketSlice'
import CheckProduct from '@/compo/CheckProduct'
import {useSession} from 'next-auth/react'
import Currency from 'react-currency-format';
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import stripe from 'stripe';
const stripePromise =loadStripe(process.env.sk_test_51NXk8ESHRx7KgwLe5xvOUpyzcTNx4MHoyHeV7hMgMADIbW6B4afC3MK706NevtFJPxrK5d10KsWvLU9hXFCWbmYM00ZPjmuhpF)

const Checkout = () => {
    const items=useSelector(selectItems);
    const total=useSelector(selectTotal);

   // console.log(items);
   const session =useSession();
   const createCheckoutSession=async ()=>{
    const  Stripe=await stripePromise;
    //call backend
    const checkSession=await axios.post('/api/checkSession',{
        items:items,
        email:session.data.user.email
    })
    //redirect to stripe checkouot

    const result=await stripe.redirectToCheckout({
        sessionId:checkSession.data.id
    })
    if(!result){
        alert(result.uerror.message);
    }

   }
  return (
    <div className='bg-gray-100'>
      <Header/>

      <main style={{display:'flexbbox',margin:"auto",display:'flex'}}>
            <div style={{margin:5,boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}>
                <Image src="https://links.papareact.com/ikj"
                 width={1220}
                 height={200}
                 objectFit="contain"
                />
                <div className='flex flex-col space-y-10 bg-white'>
                    <h1 className='text-2xl border-b pb-4 mt-5'>
                       {items.length>0 ? "Your Amazone Shopping Basket":"Your Amazone Basket is Empty"} 
                    </h1>
                    {
                        items.map((item,i)=>{
                            return <CheckProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                               

                            />
                        })
                    }
                </div>
            </div>
            <div style={{alignItems:'center'}}>
                {items.length>0 && (
                    <>
                      <h2 style={{marginLeft:50,fontWeight:'bold'}} className='whitespace-nowrap'>Subtotal ({items.length} items)</h2>
                      <span>
                      <Currency style={{fontWeight:"bold",marginLeft:50,}}value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                      </span>
                      
                      <button role="link"
                       disabled={!session} onClick={createCheckoutSession}className='bg-yellow-400' style={{borderRadius:3,padding:3,marginLeft:35}}>
                        {!session ? "Sign in to checkout":"Proceed to checkout"}
                      </button>
                    </>
                )}
            </div>
      </main>
    </div>
  )
}

export default Checkout
