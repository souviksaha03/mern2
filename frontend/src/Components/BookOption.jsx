import React from 'react'
import list from "../../public/list.json"
import Card from"./Card"
const BookOption = () => {
    const filterData= list.filter((data)=>
        data.category==="free");
    console.log(filterData);

  
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <h1 className='font-bold text-2xl'>Free offered course </h1>
      <p className='text 3xl font-semibold'>"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela</p>
      <div className='grid grid-cols-3 gap-4 p-5  rounded-lg"'>
      
        {
      filterData.map((item)=>(
        <Card item={item} key={item.isbn}/>
        
        
        
    )) 
    }
    </div>
    </div>
    
    
    </>
  )
}

export default BookOption
