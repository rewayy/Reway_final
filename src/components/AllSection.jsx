import React from 'react'
import { HeroPage } from './HeroPage'
import { OurJourney } from './OurJourney'
import FCards from './Card/FCards';
import { Thumbnail } from './Thumbnail'
import { Map } from './Map';
import { ContactUS } from './ContactUs';
import { Testimonial } from './Testimonial';
import { Footer } from './Footer';
import  AppPage  from './AppDownload/AppPage';

const AllSection = () => {
  return (
    <div>
        <HeroPage/>
        <OurJourney/>
        <FCards/>
        <Thumbnail/> 
        <Map/>
        <Testimonial/>
        <ContactUS/>
        <AppPage/>
        <Footer/>
        {/* Rest of the components will get added here */}

        
    </div>
  )
}

export default AllSection