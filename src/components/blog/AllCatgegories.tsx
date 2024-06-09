import React from 'react'

const AllCatgegories = () => {
  return (
    <div className="m-4 py-2 sm:m-6 md:m-12 lg:m-16">
      <div className="flex justify-between">
        <div>
        <p className="text-3xl dark:text-white">Blog Topics</p>
        <p className="text-dark-60">Explore the Experts Who Have Shared Their Knowledge with Us!</p>
        </div>
  
      </div>
      <div className='mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>Machine Learning</div>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>Langchain</div>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>English</div>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>Next JS</div>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>Java</div>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>React JS</div>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>Docker</div>
        <div className='text-center bg-gray-200 dark:bg-dark-90 rounded-md py-2'>Android</div>
      </div>

    </div>
  )
}

export default AllCatgegories