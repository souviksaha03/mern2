import React from 'react'
import BookOption from './BookOption'
import list from "../../public/list.json"
import banner from "../../src/bookimg.webp" 
import ban from "../../public/bookimg2.jpg"
const Card = ({item}) => {
    console.log(item);
  return (
    <>
    <div >
    <div >
  <figure><img src={item.image} alt="images" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.subtitle}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{item.category}</button>
    </div>
  </div>
</div>

</div>
    </>
  )
}

export default Card
