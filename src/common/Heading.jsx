import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1 className="text-[30px] font-serif text-center mt-1">{title}</h1>
        <p  className="text-[20px] font-serif text-center mt-1 mb-1 underline">{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
