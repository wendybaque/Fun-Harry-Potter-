import React from 'react'
import Homing from '../components/Homing'
import Spells from '../components/Spells'
import Wizard from '../components/Wizard'

const Home = () => {
  return (
    <div>
      <Homing />
      <Wizard />
      <Spells />
    </div>
  )
}

export default Home