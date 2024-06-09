import React from 'react'

export const Header = () => {
  return (
    <header className="m-4 sm:m-6 md:m-12 lg:m-16 ">
          <div className="grid md:grid-cols-2 gap-2 items-center">
            <div className="text-text_primary">
              <p className="text-5xl capatilize text-dark-10 dark:text-white text-left">
                Bring<br></br> Ideas into<br></br>{" "}
                <span className="font-semibold dark:text-white">Digital Realities.</span>
              </p>
      
              <p className="text-justify md:text-left mt-5 font-normal text-dark-30 dark:text-dark-90">
                At Adhunik Code, our mission is to deliver innovative software
                solutions that redefine industries and empower businesses to
                thrive in the digital era. We believe in the transformative
                power of technology to shape a brighter future.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/img/img1.png"
              
                width={400}
                height={400}
                alt="Description"
              />
            </div>
          </div>
        </header>
  )
}

