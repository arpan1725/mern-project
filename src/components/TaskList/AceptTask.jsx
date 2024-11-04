import React from 'react'

const AceptTask = ({data}) => {
  console.log(data.category)
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center'>
     <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
     <h4>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-5m'>mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-5m'>mark as failed</button>
    </div>

    </div>
  )
}

export default AceptTask