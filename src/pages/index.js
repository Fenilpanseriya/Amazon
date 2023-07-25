import Banner from "@/compo/Banner";
import Header from "@/compo/Header";
import Product from "@/compo/Product";
import Head from "next/head";


export default function Home({products}) {
  //console.log(products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header/>
      <main className="max-w-screen-2x1 mx-auto">
        <Banner/>
        
        <Product product1={products}/>
        
      </main>
      

     
    </div>
  );
}

export async function  getServerSideProps(context){
  const data=await fetch('https://fakestoreapi.com/products');
  const products=await data.json();
  //console.log(products);
  return  {
      props:{
          products,
      }
  }
}
