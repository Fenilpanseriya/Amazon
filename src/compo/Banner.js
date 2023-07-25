import { Carousel } from "react-responsive-carousel"

const Banner = () => {
  return (
    <div  data-carousel="slide" style={{position:'relative',display:'flex',margin:0}}>
      
      <Carousel 
        autoplay 
        infiniteloop 
        showIndicators={false} 
        showStatus={false} 
        showThumbs={false}
        interval={5000}

        >
        <div>
            <img loading="lazy" src="https://links.papareact.com/6ff"/>

        </div>
        {/* <div>

            <img loading="lazy" src="https://links.papareact.com/7ma"/>

        </div> */}

      </Carousel>
    </div>
  )
}

export default Banner
