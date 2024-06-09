import React from 'react'

export const Services = () => {
  return (
    <div className="m-4 sm:m-6 md:m-12 lg:m-16">
    <p className="text-3xl text-center mb-6 dark:text-white">Services we Offer</p>
    <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
    <div  className='p-2 rounded-md dark:bg-dark-20  '>
     
      
        <p className="font-bold text-dark-10 dark:text-white  text-lg">
          Custom Software Development
        </p>
        <p className="font-normal text-sm text-dark-50 text-justify">
          At Adhunik Code, we create custom software solutions that
          empower your vision. Our skilled developers deliver powerful and
          scalable applications tailored to your specific needs.
        </p>
      </div>
      <div  className='p-2 rounded-md dark:bg-dark-20  '>
     
      
        <p className="font-bold text-dark-10 dark:text-white  text-lg">
          Web and Mobile App Development
        </p>
        <p className="font-normal text-sm text-dark-50 text-justify">
          From responsive websites to feature-rich mobile apps, we
          leverage the latest technologies to create engaging user
          experiences across various platforms.
        </p>
      </div>
      <div className='p-2 rounded-md dark:bg-dark-20  '>
     
      
        <p className="font-bold text-dark-10 dark:text-white  text-lg">
          AI & Machine Learning
        </p>
        <p className=" font-normal text-sm text-dark-50 text-justify">
          Unlock the potential of artificial intelligence and machine
          learning to gain insights, automate processes, and enhance
          decision-making.
        </p>
      </div>
    </div>
  </div>
  )
}
