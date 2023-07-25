/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images:{
        domains:["links.papareact.com","fakestoreapi.com","www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png"]
    },
    env:{
        stripe_public_key:process.env.STRIPE_PUBLIC_KEY
    }
}
