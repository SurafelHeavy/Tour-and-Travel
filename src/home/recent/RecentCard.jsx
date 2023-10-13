import React from "react"
import { list } from "../../data/Data"
import image1 from "../../images/pexels-atypeek-dgn-12131129.jpg"
const RecentCard = () => {
  return (
    <>
      <div className='grid grid-cols-3  gap-4 mt-4'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow mb-2' key={index}>
              <div className='img'>
                <img src={image1} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "Available" ? "#25b5791a" : "#ff98001a", color: category === "Available" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex gap-4'>
                <div>
                  <button className='btn2'>{price}</button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
