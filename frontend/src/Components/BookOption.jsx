import React from 'react'
import list from "../../public/list.json"
import Card from"./Card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BookOption = () => {
    const filterData= list.filter((data)=>
        data.category==="free");
    console.log(filterData);
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <h1 className='font-bold text-2xl'>Free offered course </h1>
      <p className='text 3xl font-semibold'>"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela</p>
      {/* <div className='grid grid-cols-3 gap-4 p-5  rounded-lg"'>
      
        {
      filterData.map((item)=>(
        <Card item={item} key={item.isbn}/>
        
        
        
    )) 
    }
    </div> */}
    </div>
    <div>
    <Slider {...settings}>
    {
      filterData.map((item)=>(
        <Card item={item} key={item.isbn}/>
        
        
        
    )) 
    }
      </Slider>
    </div>
    
    
    </>
  )
}

export default BookOption
