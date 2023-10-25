import { useState } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard'
import DashboardFooter from '../components/dashboardFooter/DashboardFooter'
import DashboardHero from '../components/dashboardHero/DashboardHero'
import Details from '../components/details/Details'
import DetailsFooter from '../components/detailsFooter/DetailsFooter'
import DetailsHero from '../components/detailsHero/DetailsHero'
import HistoryHero from '../components/hisoryHero/HistoryHero'
import History from '../components/history/History'
import HistoryFooter from '../components/historyFooter/HistoryFooter'
import HistoryNavigation from '../components/historyNavigation/HistoryNavigation'
import HistorySidebar from '../components/historySidebar/HistorySidebar'
import Method from '../components/method/Method'
import MethodFooter from '../components/methodFooter/MethodFooter'
import MethodHero from '../components/methodHero/MethodHero'
import Order from '../components/order/Order'
import OrderFooter from '../components/orderFooter/OrderFooter'
import OrderHero from '../components/orderHero/OrderHero'
import Pay from '../components/pay/Pay'
import PayFooter from '../components/payFooter/PayFooter'
import PayHero from '../components/payHero/PayHero'
import PostNavigation from '../components/postNavigation/PostNavigation'
import PostProduction from '../components/postProduction/PostProduction'
import PostProductionFooter from '../components/postProductionFooter/PostProductionFooter'
import PostProductionHero from '../components/postProductionHero/PostProductionHero'
import PostSidebar from '../components/postSidebar/PostSidebar'
import PreProfileFooter from '../components/preProfileFooter/PreProfileFooter'
import PreProfileHero from '../components/preProfileHero/PreProfileHero'
import PreProfilePage from '../components/preProfilePage/PreProfilePage'
import PreProfileSidebar from '../components/preProfileSidebar/PreProfileSidebar'
import ProductionFooter from '../components/productionFooter/ProductionFooter'
import ProductionHeader from '../components/productionHeader/ProductionHeader'
import ProductionHero from '../components/productionHero/ProductionHero'
import ProductionNavigation from '../components/productionNavigation/ProductionNavigation'
import ProductionSidebar from '../components/productionSidebar/ProductionSidebar'
import RatingFooter from '../components/ratingFooter/RatingFooter'
import RatingHeader from '../components/ratingHeader/RatingHeader'
import RatingHero from '../components/ratingHero/RatingHero'
import SaveVideo from '../components/saveVideo/SaveVideo'
import SaveVideoFooter from '../components/saveVideoFooter/SaveVideoFooter'
import SaveVideoHero from '../components/saveVideoHero/SaveVideoHero'
import ServiceFooter from '../components/serviceFooter/ServiceFooter'
import ServiceHeader from '../components/serviceHeader/ServiceHeader'
import ServiceHero from '../components/serviceHero/ServiceHero'
import { Overlay } from '../utils'
import Home from './home/Home'

const Index = () => {
  const [isProductionSidebarActive, setIsProductionSidebarActive] = useState(false)
  const [isProductionSidebarEnter, setIsProductionSidebarEnter] = useState(false)
  const [isProductionNavigationActive, setIsProductionNavigationActive] = useState(false)
  const [isProductionNavigationEnter, setIsProductionNavigationEnter] = useState(false)
  const [isPostSidebarActive, setIsPostSidebarActive] = useState(false)
  const [isPostSidebarEnter, setIsPostSidebarEnter] = useState(false)
  const [isPostNavigationActive, setIsPostNavigationActive] = useState(false)
  const [isPostNavigationEnter, setIsPostNavigationEnter] = useState(false)
  const [isHistorySidebarActive, setIsHistorySidebarActive] = useState(false)
  const [isHistorySidebarEnter, setIsHistorySidebarEnter] = useState(false)
  const [isHistoryNavigationActive, setIsHistoryNavigationActive] = useState(false)
  const [isHistoryNavigationEnter, setIsHistoryNavigationEnter] = useState(false)
  const [isPreProfileSidebarActive, setIsPreProfileSidebarActive] = useState(false)
  const [isPreProfileSidebarEnter, setIsPreProfileSidebarEnter] = useState(false)
  return (
    <div>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/productionheader">
            <ProductionHeader setIsProductionSidebarActive={setIsProductionSidebarActive} setIsProductionSidebarEnter={setIsProductionSidebarEnter}/>
            <ProductionHero setIsProductionNavigationActive={setIsProductionNavigationActive} setIsProductionNavigationEnter={setIsProductionNavigationEnter}/>
            <ProductionFooter />
        </Route>
        <Route>
            <ProductionSidebar isProductionSidebarActive={isProductionSidebarActive} setIsProductionSidebarActive={setIsProductionSidebarActive} isProductionSidebarEnter={isProductionSidebarEnter} setIsProductionSidebarEnter={setIsProductionSidebarEnter}/>
        </Route>
        <Route>
            <ProductionNavigation isProductionNavigationActive={isProductionNavigationActive} setIsProductionNavigationActive={setIsProductionNavigationActive} isProductionNavigationEnter={isProductionNavigationEnter} setIsProductionNavigationEnter={setIsProductionNavigationEnter}/>
        </Route>
        <Route exact path="/postproduction">
            <PostProduction setIsPostSidebarActive={setIsPostSidebarActive} setIsPostSidebarEnter={setIsPostSidebarEnter}/>
            <PostProductionHero setIsPostNavigationActive={setIsPostNavigationActive} setIsPostNavigationEnter={setIsPostNavigationEnter}/>
            <PostProductionFooter />
        </Route>
        <Route>
            <PostSidebar isPostSidebarActive={isPostSidebarActive} setIsPostSidebarActive={setIsPostSidebarActive} isPostSidebarEnter={isPostSidebarEnter} setIsPostSidebarEnter={setIsPostSidebarEnter}/>
        </Route>
        <Route>
            <PostNavigation isPostNavigationActive={isPostNavigationActive} setIsPostNavigationActive={setIsPostNavigationActive} isPostNavigationEnter={isPostNavigationEnter} setIsPostNavigationEnter={setIsPostNavigationEnter}/>
        </Route>
        <Route exact path="/preprofilepage">
            <PreProfilePage setIsPreProfileSidebarActive={setIsPreProfileSidebarActive} setIsPreProfileSidebarEnter={setIsHistoryNavigationEnter}/>
            <PreProfileHero />
            {/* <PreProfileFooter /> */}
        </Route>
        <Route>
            <PreProfileSidebar isPreProfileSidebarActive={isPreProfileSidebarActive} setIsPreProfileSidebarActive={setIsPreProfileSidebarActive} isPreProfileSidebarEnter={isPreProfileSidebarEnter} setIsPreProfileSidebarEnter={setIsPreProfileSidebarEnter}/>
        </Route>
        <Route exact path="/history">
            <History setIsHistorySidebarActive={setIsHistorySidebarActive} setIsHistorySidebarEnter={setIsHistorySidebarEnter}/>
            <HistoryHero setIsHistoryNavigationActive={setIsHistoryNavigationActive} setIsHistoryNavigationEnter={setIsHistoryNavigationEnter}/>
            <HistoryFooter />
        </Route>
        <Route>
            <HistorySidebar isHistorySidebarActive={isHistorySidebarActive} setIsHistorySidebarActive={setIsHistorySidebarActive} isHistorySidebarEnter={isHistorySidebarEnter} setIsHistorySidebarEnter={setIsHistorySidebarEnter}/>
        </Route>
        <Route>
            <HistoryNavigation isHistoryNavigationActive={isHistoryNavigationActive} setIsHistoryNavigationActive={setIsHistoryNavigationActive} isHistoryNavigationEnter={isHistoryNavigationEnter} setIsHistoryNavigationEnter={setIsHistoryNavigationEnter}/>
        </Route>
        <Route exact path="/dashboard">
            <Dashboard />
            <DashboardHero />
            <DashboardFooter />
        </Route>
        <Route exact path="/rating">
            <RatingHeader />
            <RatingHero />
            <RatingFooter />
        </Route>
        <Route exact path="/savevideo">
            <SaveVideo />
            <SaveVideoHero />
            <SaveVideoFooter />
        </Route>
        <Route exact path="/details">
            <Details />
            <DetailsHero />
            <DetailsFooter />
        </Route>
        <Route exact path="/service">
            <ServiceHeader />
            <ServiceHero />
            <ServiceFooter />
        </Route>
        <Route exact path="/pay">
            <Pay />
            <PayHero />
            <PayFooter />
        </Route>
        <Route exact path="/method">
            <Method />
            <MethodHero/> 
            <MethodFooter />
        </Route>
        <Route exact path="/order">
            <Order />
            <OrderHero />
            <OrderFooter />
        </Route>
        {
            isProductionSidebarActive && <Overlay type="productionsidebar" state={isProductionSidebarActive} callback={setIsProductionSidebarActive}/>
        }
        {
            isProductionNavigationActive && <Overlay type="productionnavigation" state={isProductionNavigationActive} callback={setIsProductionNavigationActive}/>
        }
        {
            isPostSidebarActive && <Overlay type="postsidebar" state={isPostSidebarActive} callback={setIsPostSidebarActive}/>
        }
        {
            isPostNavigationActive && <Overlay type="postnavigation" state={isPostNavigationActive} callback={setIsPostNavigationActive}/>
        }
        {
            isHistoryNavigationActive && <Overlay type="historyNavigation" state={isHistoryNavigationActive} callback={setIsHistoryNavigationActive}/>
        }
    </div>
  )
}

export default Index