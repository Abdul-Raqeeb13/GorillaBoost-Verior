import React from 'react'

function BelowHeader({title, subTitle}) {
  return (
    <>
        <div className='w-full flex my-10 gap-4 '>
            <div className='w-12 h-12 p-3 bg-redColor bg-opacity-35 rounded-full flex items-center justify-center'>
            <img src="/assets/insights.svg" className='' alt="" srcset="" />
            </div>
            <div>
                <h4 className='text-xl text-redColor font-bold '>{title}</h4>
                <p className='text-xs mt-1 text-white'>{subTitle}</p>
            </div>
        </div>
    </>
  )
}

export default BelowHeader