import React from 'react'

export const Values = () => {
  return (
    <>    <div className="m-4 sm:m-6 md:m-12 lg:m-16">
    <p className="text-3xl text-center mb-6 dark:text-white">Our Values</p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ">
      <div className='p-2 rounded-md dark:bg-dark-20'>
        <p className="font-bold text-dark-10 dark:text-white text-lg ">Inovation</p>
        <p className="font-normal text-sm text-dark-50  text-justify ">
          We constantly explore new technologies to provide cutting-edge
          solutions.
        </p>
      </div>
      <div className='p-2 rounded-md dark:bg-dark-20  '>
     
        <p className="font-bold text-dark-10 dark:text-white text-lg ">Collaboration</p>
        <p className="font-normal text-sm text-dark-50  ttext-justify">
          Working closely with our clients to understand their needs and
          goals.
        </p>
      </div>
      <div  className='p-2 rounded-md dark:bg-dark-20 '>
     
        <p className="font-bold text-dark-10 dark:text-white text-lg ">Integrity</p>
        <p className=" font-normal text-sm text-dark-50  text-justify">
          Upholding the highest ethical standards in everything we do
        </p>
      </div>
      <div  className='p-2 rounded-md dark:bg-dark-20  '>
     
        <p className="font-bold text-dark-10 dark:text-white text-lg ">Excellence</p>
        <p className="font-normal text-sm text-dark-50  text-justify">
          Striving for perfection and delivering exceptional results.
        </p>
      </div>
    </div>
  </div>

  <br />
  <br />
  {/* Why Choose us*/}
  <div className="m-4 sm:m-6 md:m-12 lg:m-16 grid md:grid-cols-2 gap-6 items-center">
    <div className="lg:w-5/6">
      <p className="heading text-center md:text-left text-dark-10 dark:text-dark-90">
        Why Choose<br></br>{" "}
        <span className="dark:text-white text-4xl md:text-5xl">
          Adhunik Code?
        </span>
      </p>
      <p className="text-left mt-5 font-normal text-sm text-dark-50  text-center text-justify">
        Adhunik Code is a passionate team of software enthusiasts,
        committed to excellence in every line of code we write.
        Established with a vision to revolutionize the digital landscape,
        we bring a wealth of experience and a fresh perspective to
        software development.
      </p>
    </div>
    <div className="flex flex-col gap-4 items-center justify-center">
    <div className='p-2 rounded-md dark:bg-dark-20  ' >
     
      
        <p className="font-bold text-dark-10 dark:text-white text-lg ">
          Customer-Centric Approach
        </p>
        <p className="font-normal text-sm text-dark-50 text-justify">
          At Adhunik Code, your satisfaction is at the forefront of our
          mission. We go beyond standard solutions, taking the time to
          understand your unique business needs. Our customer-centric
          approach ensures that every solution is tailored to your
          specific requirements.
        </p>
      </div>
      <div className='p-2 rounded-md dark:bg-dark-20  '>
     
      
        <p className="font-bold text-dark-10 dark:text-white text-lg ">
          Interactive Customer Engagement
        </p>
        <p className="font-normal text-sm text-dark-50 text-justify">
          Communication is key, and we take pride in fostering an
          interactive and collaborative relationship with our clients.
          Stay involved, provide feedback, and witness your vision come to
          life through transparent and engaging customer interactions.
        </p>
      </div>
      <div  className='p-2 rounded-md dark:bg-dark-20  '>
     
      
        <p className="font-bold text-dark-10 dark:text-white text-lg ">
          Agile Development
        </p>
        <p className="font-normal text-sm text-dark-50 text-justify">
          Embracing agility is ingrained in our development philosophy. We
          adapt to changing requirements with ease and respond promptly to
          evolving project dynamics. With Adhunik Code, experience a
          development process that is not only agile but also highly
          responsive throughout the entire project lifecycle.
        </p>
      </div>
    </div>
  </div></>
  )
}
