import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeroPage, OurJourney, SustainableGoals} from './components/index'

export default function App() {
  return (
    <>
      <HeroPage/>
      <OurJourney/>
      <SustainableGoals/>
    </>
  )
}
