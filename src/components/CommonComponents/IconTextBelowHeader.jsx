import React from 'react'

function BelowHeader({ title, subTitle, img }) {
  return (
    <>
      <div className='w-full flex my-10 gap-4'>
        {/* Outer Circle */}
        <div className='w-20 bg-darkRed rounded-full flex items-center justify-center'>
          {/* Inner Circle */}
          <div className='w-10 h-10 bg-redColor rounded-md flex items-center justify-center'>
            <img src={img} alt="icon" className='object-contain' />
          </div>
        </div>

        <div>
          <h4 className='text-32 text-redColor font-bold'>{title}</h4>
          <p className='text-16 font-medium mt-1 text-white'>{subTitle}</p>
        </div>
      </div>
    </>
  )
}

export default BelowHeader
