import React from 'react'
import Navbar from "@/components/navbar/navbar"
import Hero from '@/components/hero'
import Courses from '@/components/courses'
function page() {
  return (
    <main className='overflow-x-hidden'>
    <Navbar/>
  <Hero/>
  <Courses/>
    </main>
  )
}

export default page