import React from 'react'

const Card = ({ data }) => {
  return (
    <div className="w-64 min-h-[300px] border-4 border-black rounded-xl p-4">
      <h6>{data?.id}</h6>
      <div className='text-black font-bold text-center leading-tight pb-4'>{data?.title}</div>
      <h5>{data?.body}</h5>
    </div>
  )
}

export default Card
