'use client'

import Bloglist from '@/components/Bloglist'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
