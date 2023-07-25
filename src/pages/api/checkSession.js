const stripe=require("stripe")(process.env.stripe_public_key);

export default async (req, res)=>{
    const {email,items}=req.body;
    console.log(email);
    console.log(items);
    const transform =items.map(item=>({
        description:item.description,
        quantity:1,
        price_data:{
            currency:'gbp',
            unit_amount:item.price*100,
            product_data:{
                name:item.title,
                images:[item.image]
            },
        }
    }));
    const session=await stripe.checkout.sessions.create({
        payment_method_type:["card"],
        shipping_rates:['shr_1NXlkZSHRx7KgwLeKVF8qilR'],
        shipping_address:["US","IN","GB","CA"],
        line_items:transform,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancle_url:`${process.env.HOST}/checkout`,
        metadat:{
            email,
            images:JSON.stringify(items.map(item=> item.image))

        }
    })
    res.status(200).json({id:session.id});
}