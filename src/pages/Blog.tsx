import AllCatgegories from '@/components/blog/AllCatgegories'
import BlogTabs from '@/components/blog/BlogTabs'
import Contributors from '@/components/blog/Contributors'
import { Header } from '@/components/blog/Header'
import React from 'react'

const Blog = () => {
  return (
    <div className=''>
        <Header/>
        <BlogTabs/>
        <AllCatgegories/>
        <Contributors/>
        <br></br>
        <br></br>
    </div>
  )
}

export default Blog