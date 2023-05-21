import React from 'react'
import "./DashboardHero.css"
import { Link } from 'react-router-dom'
import preDashhomeLogo from "../../assets/images/preproductionhome.svg"
import preDashDashboard from "../../assets/images/preproductiondashboard.svg"
import preDashProfile from "../../assets/images/preproductionprofile.svg"
import preDashOrder from "../../assets/images/preproductionorder.svg"
import preDashSms from "../../assets/images/preproductionsms.svg"
import preDashSave from "../../assets/images/preproductionsave.svg"
import DashboardSearch from '../dashboardSearch/DashboardSearch'
import DashnoardBack from '../dashboardBack/DashnoardBack'

const DashboardHero = () => {
  return (
    <div className='hero'>
    <div className='container'>
        <div className='hero__container'>
            <ul className="hero__list">
                <li className='hero__item active__hero__item'>
                    <Link>
                        <img className='hero__list__icon' src={preDashhomeLogo} alt="" />
                    </Link>
                </li>
                <li className='hero__item'>
                    <Link>
                        <img className='hero__list__icon' src={preDashDashboard} alt="" />
                    </Link>
                </li>
                <li className='hero__item'>
                    <Link>
                        <img className='hero__list__icon' src={preDashProfile} alt="" />
                    </Link>
                </li>
                <li className='hero__item'>
                    <Link to="/rating">
                        <img className='hero__list__icon' src={preDashOrder} alt="" />
                    </Link>
                </li>
                <li className='hero__item'>
                    <Link>
                        <img className='hero__list__icon' src={preDashSms} alt="" />
                    </Link>
                </li>
                <li className='hero__item'>
                    <Link>
                        <img className='hero__list__icon' src={preDashSave} alt="" />
                    </Link>
                </li>
            </ul>
            <DashboardSearch />
            <DashnoardBack />
        </div>
    </div>
</div>
  )
}

export default DashboardHero