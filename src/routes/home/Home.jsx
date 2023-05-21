import React from 'react'
import PreProductionFooter from '../../components/preProductionFooter/PreProductionFooter'
import PreProductionHeader from '../../components/preProductionHeader/PreProductionHeader'
import PreProductionHero from '../../components/preProductionHero/PreProductionHero'

const Home = () => {
  return (
    <div>
        <PreProductionHeader />
        <PreProductionHero />
        <PreProductionFooter />
    </div>
  )
}

export default Home