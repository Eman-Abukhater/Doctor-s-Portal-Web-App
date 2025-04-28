import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import InfoCards from '../components/Home/InfoCards';
import Services from '../components/Home/Services/Services';
import ExceptionalCare from '../components/Home/ExceptionalCare';
import AppointmentBanner from '../components/Home/AppointmentBanner';
import Testimonial from '../components/Home/Testimonial';
import ContactForm from '../components/Home/ContactForm';
import Footer from '../components/Footer'

function Home() {
  return (
   <>
   <HeroSection />
   <InfoCards />
   <Services />
   <ExceptionalCare />
   <AppointmentBanner />
   <Testimonial />
   <ContactForm />
   <Footer />
   
   </>
  )
}

export default Home