import { useState } from 'react'

export const TechStack = () => {

  const [activeTab,setActivateTab]=useState(0)

  return (
    <div className="m-4 sm:m-6 md:m-12 lg:m-16">
    <p className="text-3xl text-center mb-6 dark:text-white">
        <span className="text-dark-10 dark:text-white">Our</span>
        <br></br>
        Tech Stack
      </p>
      <div className='flex justify-center'>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-3'>
          <div className={`px-2 py-1 text-center rounded-md text-sm ${activeTab==0 ? "bg-gray-100 dark:text-white dark:bg-dark-20" :"text-dark-50"}`} onClick={()=>setActivateTab(0)}>Backend</div>
          <div className={`px-2 py-1 text-center rounded-md text-sm ${activeTab==1 ? "bg-gray-100 dark:text-white dark:bg-dark-20" :"text-dark-50"}`} onClick={()=>setActivateTab(1)}>Frontend</div>
          <div className={`px-2 py-1 text-center rounded-md text-sm ${activeTab==2 ? "bg-gray-100 dark:text-white dark:bg-dark-20" :"text-dark-50"}`} onClick={()=>setActivateTab(2)}>Mobile</div>
          <div className={`px-2 py-1 text-center rounded-md text-sm ${activeTab==3 ? "bg-gray-100 dark:text-white dark:bg-dark-20" :"text-dark-50"}`} onClick={()=>setActivateTab(3)}>Database</div>
          <div className={`px-2 py-1 text-center rounded-md text-sm ${activeTab==4 ? "bg-gray-100 dark:text-white dark:bg-dark-20" :"text-dark-50"}`} onClick={()=>setActivateTab(4)}>CMS</div>
          <div className={`px-2 py-1 text-center rounded-md text-sm ${activeTab==5 ? "bg-gray-100 dark:text-white dark:bg-dark-20" :"text-dark-50"}`} onClick={()=>setActivateTab(5)}>AI/ML</div>

      </div>
      </div>
   
    </div>
  )
}
