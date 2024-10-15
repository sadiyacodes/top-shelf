import React from 'react'
import AliceCarousel from 'react-alice-carousel'


const items = [
    <img src="assets/CarouselPics/carousel8.jpeg"/>,
    <img src="assets/CarouselPics/carousel7.jpeg"/>,
    <img src="assets/CarouselPics/carousel6.jpg"/>,
    <img src="assets/CarouselPics/carousel5.jpg"/>,
    <img src="assets/CarouselPics/carousel4.jpeg"/>,
    <img src="assets/CarouselPics/carousel3.jpeg"/>,
    <img src="assets/CarouselPics/carousel2.jpeg"/>,
    <img src="assets/CarouselPics/carousel1.jpeg"/>,
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
    <div className='flex items-center text-center pl-10 sm:px-6 md:pl-16'>
        <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={2000}
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