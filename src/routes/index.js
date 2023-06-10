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
import Method from '../components/method/Method'
import MethodFooter from '../components/methodFooter/MethodFooter'
import MethodHero from '../components/methodHero/MethodHero'
import Order from '../components/order/Order'
import OrderFooter from '../components/orderFooter/OrderFooter'
import OrderHero from '../components/orderHero/OrderHero'
import Pay from '../components/pay/Pay'
import PayFooter from '../components/payFooter/PayFooter'
import PayHero from '../components/payHero/PayHero'
import PostProduction from '../components/postProduction/PostProduction'
import PostProductionFooter from '../components/postProductionFooter/PostProductionFooter'
import PostProductionHero from '../components/postProductionHero/PostProductionHero'
import PreProfileFooter from '../components/preProfileFooter/PreProfileFooter'
import PreProfileHero from '../components/preProfileHero/PreProfileHero'
import PreProfilePage from '../components/preProfilePage/PreProfilePage'
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
  return (
    <div>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/productionheader">
            <ProductionHeader setIsProductionSidebarActive={setIsProductionSidebarActive} setIsProductionSidebarEnter={setIsProductionSidebarEnter}/>
            <ProductionHero setIsProductionNavigationActive={setIsProductionNavigationActive} setIsProductionNavigationEnter={setIsProductionNavigationEnter}/>
            {/* <ProductionFooter /> */}
        </Route>
        <Route>
            <ProductionSidebar isProductionSidebarActive={isProductionSidebarActive} setIsProductionSidebarActive={setIsProductionSidebarActive} isProductionSidebarEnter={isProductionSidebarEnter} setIsProductionSidebarEnter={setIsProductionSidebarEnter}/>
        </Route>
        <Route>
            <ProductionNavigation isProductionNavigationActive={isProductionNavigationActive} setIsProductionNavigationActive={setIsProductionNavigationActive} isProductionNavigationEnter={isProductionNavigationEnter} setIsProductionNavigationEnter={setIsProductionNavigationEnter}/>
        </Route>
        <Route exact path="/postproduction">
            <PostProduction />
            <PostProductionHero />
            <PostProductionFooter />
        </Route>
        <Route exact path="/preprofilepage">
            <PreProfilePage />
            <PreProfileHero />
            <PreProfileFooter />
        </Route>
        <Route exact path="/history">
            <History />
            <HistoryHero />
            <HistoryFooter />
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
    </div>
  )
}

export default Index