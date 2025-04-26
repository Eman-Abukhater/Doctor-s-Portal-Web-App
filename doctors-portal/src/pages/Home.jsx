import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoCards from '../components/InfoCards'
import Services from '../components/Services/Services'
import ExceptionalCare from '../components/ExceptionalCare'
import AppointmentBanner from '../components/AppointmentBanner'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
   <>
   <HeroSection />
   <InfoCards />
   <Services />
   <ExceptionalCare />
   <AppointmentBanner />
   <Testimonial />
   
   </>
  )
}

export default Home