import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../../components/navigation/Navigation'
import PreProductionFooter from '../../components/preProductionFooter/PreProductionFooter'
import PreProductionHeader from '../../components/preProductionHeader/PreProductionHeader'
import PreProductionHero from '../../components/preProductionHero/PreProductionHero'
import SidebarHeader from '../../components/sidebarHeader/SidebarHeader'
import { Overlay } from '../../utils'

const Home = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const [isSidebarEnter, setIsSidebarEnter] = useState(false)
  const [isNavigationActive, setIsNAvigationActive] = useState(false)
  const [isNavigationEnter, setIsNavigationEnter] = useState(false)
  return (
    <div>
        <PreProductionHeader setIsSidebarActive={setIsSidebarActive} setIsSidebarEnter={setIsSidebarEnter}/>
        <Route>
          <SidebarHeader isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} isSidebarEnter={isSidebarEnter} setIsSidebarEnter={setIsSidebarEnter}/>
        </Route>
        <PreProductionHero setIsNAvigationActive={setIsNAvigationActive} setIsNavigationEnter={setIsNavigationEnter}/>
        <Route>
          <Navigation isNavigationActive={isNavigationActive} setIsNAvigationActive={setIsNAvigationActive} isNavigationEnter={isNavigationEnter} setIsNavigationEnter={setIsNavigationEnter}/>
        </Route>
        <PreProductionFooter />
        {
            isSidebarActive && <Overlay type="sidebar" state={isSidebarActive} callback={setIsSidebarActive}/>
        }
        {
            isNavigationActive && <Overlay type="navigation" state={isNavigationActive} callback={setIsNAvigationActive}/>
        }
    </div>
  )
}

export default Home