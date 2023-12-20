import React from 'react'
import { HeroPage } from './HeroPage'
import { OurJourney } from './OurJourney'
import FCards from './Card/FCards';
import { Thumbnail } from './Thumbnail'

const AllSection = () => {
  return (
    <div>
        <HeroPage/>
        <OurJourney/>
        <FCards/>
        <Thumbnail/> 
        {/* Rest of the components will get added here */}

        
    </div>
  )
}

export default AllSection