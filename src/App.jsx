import { useState } from 'react'
import { FCards, HeroPage, OurJourney, Thumbnail} from './components/index'

export default function App() {
  return (
    <>
      <HeroPage/>
      <OurJourney/>
      <FCards/>
      <Thumbnail/>
    </>
  )
}
