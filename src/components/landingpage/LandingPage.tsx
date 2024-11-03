import React from 'react'
import { CTA } from './CTA'
import { Footer } from './Footer'
import { Gallery } from './Gallery'
import { Features } from './Features'
import { Hero } from './Hero'
import Feedback from './FeedBack'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <Features />
      <Gallery />
      <CTA />
      <Feedback />
      <Footer />
    </div>
  )
}

export default LandingPage
