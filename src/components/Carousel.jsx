import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import carousel1 from '/assets/CarouselPics/carousel1.jpeg'
import carousel2 from '/assets/CarouselPics/carousel2.jpeg'
import carousel3 from '/assets/CarouselPics/carousel3.jpeg'
import carousel4 from '/assets/CarouselPics/carousel4.jpeg'
import carousel5 from '/assets/CarouselPics/carousel5.jpg'
import carousel6 from '/assets/CarouselPics/carousel5.jpg'
import carousel7 from '/assets/CarouselPics/carousel7.jpeg'
import carousel8 from '/assets/CarouselPics/carousel8.jpeg'

const items = [
    <img src={carousel1}  role="presentation" />,
    <img src={carousel2} role="presentation"/>,
    <img src={carousel3} role="presentation"/>,
    <img src={carousel4} role="presentation"/>,
    <img src={carousel5}  role="presentation"/>,
    <img src={carousel6}  role="presentation"/>,
    <img src={carousel7} role="presentation"/>,
    <img src={carousel8}  role="presentation"/>,
]
const screenResponsive ={
    0:{
        items:1,
    },
    1024 :{
        items: 1
    }
};

const Carousel = () => {
  return (
     <div className='flex items-center text-center pl-10 sm:px-6 md:pl-16 '> 
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