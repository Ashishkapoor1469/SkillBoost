import React from 'react'
import Navbar from "@/components/navbar/navbar"
import Hero from '@/components/hero'
import Courses from '@/components/courses'
import Review from '@/components/review'
import Footer from '@/components/footer'
import Pricing from '@/components/pricing'
function page() {
  return (
    <main className='overflow-x-hidden'>
    <Navbar/>
  <Hero/>
  <Courses/>
  <Review/>
  <Pricing/>
  <Footer/>
    </main>
  )
}

export default page