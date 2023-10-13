
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Tours' subtitle='Find All Type of Tours.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
