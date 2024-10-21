import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import carousel1 from '/assets/CarouselPics/carousel1.jpeg'
import carousel2 from '/assets/CarouselPics/carousel2.jpeg'
import carousel3 from '/assets/CarouselPics/carousel3.jpeg'
import carousel4 from '/assets/CarouselPics/carousel4.jpeg'
import carousel8 from '/assets/CarouselPics/carousel8.jpeg'
import carousel9 from '/assets/CarouselPics/carousel9.jpg'

const items = [
    <img src={carousel1} className='carousel-item'  role="presentation" />,
    <img src={carousel9} className='carousel-item' role='presentation'/>,
    <img src={carousel3}  className='carousel-item' role="presentation"/>,
    <img src={carousel4}  className='carousel-item' role="presentation"/>,
    <img src={carousel8} className='carousel-item' role="presentation"/>,
    <img src={carousel2} className='carousel-item' role="presentation"/>

]
const screenResponsive ={
    0:{
        items:1,
        
    },
    1024 :{
        items: 1,
        itemsFit: 'contain'
    }
};

const Carousel = () => {
  return (
    <div className='flex items-center justify-center w-full sm:px-6 md:pl-16 md:pr-12 bg-white '>

    <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1000}
        disableButtonsControls
        responsive={screenResponsive}
        autoPlay
        items={items}
        />
        </div>
  )
}

export default Carousel