import React from 'react'
import { HeroPage } from './HeroPage'
import { OurJourney } from './OurJourney'
import FCards from './Card/FCards';
import { Thumbnail } from './Thumbnail'
import Timeline from '../pages/Timeline/timelinepage';

const AllSection = () => {
  return (
    <div className='min-w-[375px]'>
        <HeroPage/>
        <OurJourney/>
        <FCards/>
        <Thumbnail/> 
        {/* Rest of the components will get added here */}
        <Timeline/>

        
    </div>
  )
}

export default AllSection