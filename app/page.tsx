'use client'

import Bloglist from '@/Components/Bloglist'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      <Bloglist />
      <Footer />
    </div>
  )
}
