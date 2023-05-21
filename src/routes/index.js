import React from 'react'
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
import PostProduction from '../components/postProduction/PostProduction'
import PostProductionFooter from '../components/postProductionFooter/PostProductionFooter'
import PostProductionHero from '../components/postProductionHero/PostProductionHero'
import PreProfileFooter from '../components/preProfileFooter/PreProfileFooter'
import PreProfileHero from '../components/preProfileHero/PreProfileHero'
import PreProfilePage from '../components/preProfilePage/PreProfilePage'
import ProductionFooter from '../components/productionFooter/ProductionFooter'
import ProductionHeader from '../components/productionHeader/ProductionHeader'
import ProductionHero from '../components/productionHero/ProductionHero'
import RatingFooter from '../components/ratingFooter/RatingFooter'
import RatingHeader from '../components/ratingHeader/RatingHeader'
import RatingHero from '../components/ratingHero/RatingHero'
import SaveVideo from '../components/saveVideo/SaveVideo'
import SaveVideoFooter from '../components/saveVideoFooter/SaveVideoFooter'
import SaveVideoHero from '../components/saveVideoHero/SaveVideoHero'
import Home from './home/Home'

const index = () => {
  return (
    <div>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/productionheader">
            <ProductionHeader />
            <ProductionHero />
            <ProductionFooter />
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
    </div>
  )
}

export default index