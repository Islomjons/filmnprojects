import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import PreProductionFooter from '../../components/preProductionFooter/PreProductionFooter'
import PreProductionHeader from '../../components/preProductionHeader/PreProductionHeader'
import PreProductionHero from '../../components/preProductionHero/PreProductionHero'
import SidebarHeader from '../../components/sidebarHeader/SidebarHeader'
import { Overlay } from '../../utils'

const Home = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const [isSidebarEnter, setIsSidebarEnter] = useState(false)
  return (
    <div>
        <PreProductionHeader setIsSidebarActive={setIsSidebarActive} setIsSidebarEnter={setIsSidebarEnter}/>
        <Route>
          <SidebarHeader isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} isSidebarEnter={isSidebarEnter} setIsSidebarEnter={setIsSidebarEnter}/>
        </Route>
        <PreProductionHero />
        <PreProductionFooter />
        {
            isSidebarActive && <Overlay type="sidebar" state={isSidebarActive} callback={setIsSidebarActive}/>
        }
    </div>
  )
}

export default Home