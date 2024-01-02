import React from 'react'
import { HeroPage } from './Hero/HeroPage.jsx'
import { OurJourney } from './OurJourney'
import FCards from './Card/FCards';
import { Thumbnail } from './Thumbnail'
import { Map } from './Map';
import { ContactUS } from './ContactUs';
import { Testimonial } from './Testimonial';
import { Footer } from './Footer';
import  AppPage  from './AppDownload/AppPage';
import Timeline from './Timeline/timelinepage.jsx';


const AllSection = () => {
  return (
    <div className='min-w-[375px]'>
        <HeroPage/>
        <OurJourney/>
        <FCards/>
        <Thumbnail/> 
        <Map/>
        <Testimonial/>
        <Timeline />
        <AppPage/>
        <ContactUS/>
        <Footer/>      
        {/* Rest of the components will get added here */}
        

        
    </div>
  )
}

export default AllSection