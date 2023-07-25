import React from 'react'
import Image from 'next/image'
import{
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/solid"
import Link from 'next/link'
import {signIn , signOut, useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { UseSelector, useSelector } from 'react-redux'
import { selectItems } from '@/slices/basketSlice'

const Header = () => { 
    const {data:session}=useSession();//useSession hook return object
    const router=useRouter();
    const items=useSelector(selectItems);
  return (
    <header>
        <div className="flex  items-center bg-amazon_blue p-1 flex-grow py-2" style={{backgroundColor:'#232F3E',display:'flex',position:'sticky'}}>
            <div className="mt-2  flex  items-center flex-grow sm:flex-grow-0" style={{backgroundColor:'#232F3E',display:'flex',position:'sticky'}}>
                <Image 
                    src='https://links.papareact.com/f90'
                    onClick={()=>router.push("/")}
                    width={150}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer'
                />

            </div>
            < div >
                <input className='p-2 h-full w-6  flex-grow rounded-l-mid first-letter:flex-shrink focus:outline-none px-4' type="text" style={{marginLeft:20,borderRadius:3, marginTop:16,width:880, flexGrow:0}}  placeholder="Search here..."/>
                <button type="button" className="inline-flex w-full px-4 py-2 bg-yellow-400  hover:bg-yellow-500" style={{backgroundColor:'orange',padding:0.75, borderRadius:2}}>🔍</button>

            
            </div>
            <div className='text-white  items-center text-xs space-x-6' style={{display:'flex',alignItems:'center',color:'white', justifyContent:'space-between'}}>
                <div onClick={ !session? signIn : signOut} style={{marginLeft:5}}>
                    <p style={{textDecoration:"underline"}}>
                        {session ? `Hello,${session.user.name}`:"signin"}
                    </p>
                    <p style={{textDecoration:'underline',cursor:'pointer'}}>
                        Accounts & List
                    </p>
                </div>
                <div  style={{margin:8}}>
                    <p style={{textDecoration:'underline',cursor:'pointer'}}>
                        Returns
                    </p>
                    <p style={{textDecoration:'underline',cursor:'pointer'}}>
                        & Orders
                    </p>

                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    
                    <button >🛒</button>
                    <span 
                        style={{color:'orange',top:0,right:0,height:4,width:4,borderRadius:5,position:'relative'}}
                        className='absolute top-0 right-0 md:right-10 h-8 w-8 bg-yellow-400 text-center rounded-full'
                    >{items.length}
                    </span>
                    <p onClick={()=>router.push("/checkout")}style={{textDecoration:'underline',cursor:'pointer',margin:5}}>Basket</p>
                </div>
            <div className='flexbox  items-center bg-amazon_blue-light text-white'>
                <p>
                    <MenuIcon className=" h-6 mr-1"/>
                </p>
            </div>
            

        </div>
        </div>
        <div style={{display:'flex',alignItems:'center', padding:2,paddingLeft:6,backgroundColor:'#232F2F',color:'white'}}>
            <p style={{textDecoration:'underline',display:'flex'}}>
                <MenuIcon style={{height:25,marginRight:1}}/>
                All

            </p>
            <p style={{textDecoration:'underline', margin:5}}>Prime Video</p>
            <p style={{textDecoration:'underline', margin:5}}>Amazon Business</p>
            <p style={{textDecoration:'underline',margin:5}}>Today's Deal</p>
            <p style={{textDecoration:'underline',margin:5}}>Electronics</p>
            <p style={{textDecoration:'underline',margin:5}}>Food & Grocery</p>
            <p style={{textDecoration:'underline',margin:5}}>Helth & Personal care</p>
            <p style={{textDecoration:'underline',margin:5}}>Shopper Toolkit</p>


        </div>
    </header>
  )
}


export default Header
