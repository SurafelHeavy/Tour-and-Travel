
import { featured } from "../../data/Data"
import image1 from "../../images/about.jpg"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid grid-cols-5 gap-4'>
        {featured.map((items, index) => (
          <div className='grid grid-flow-row hover:scale-110 ease-in-out' key={index}>
            <img src={image1} alt='' />
            <h4 className="text-[20px] font-serif text-center mt-1">{items.name}</h4>
            <label  className="text-[15px] font-serif text-center mt-1">{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
