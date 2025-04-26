import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoCards from '../components/InfoCards'
import Services from '../components/Services/Services'
import ExceptionalCare from '../components/ExceptionalCare'
import AppointmentBanner from '../components/AppointmentBanner'

function Home() {
  return (
   <>
   <HeroSection />
   <InfoCards />
   <Services />
   <ExceptionalCare />
   <AppointmentBanner />
   
   </>
  )
}

export default Home