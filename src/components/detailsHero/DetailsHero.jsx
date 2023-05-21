import React from 'react'
import "./DetailsHero.css"
import { Link } from 'react-router-dom'
import preDetailshomeLogo from "../../assets/images/preproductionhome.svg"
import preDetailsDashboard from "../../assets/images/preproductiondashboard.svg"
import preDetailsProfile from "../../assets/images/preproductionprofile.svg"
import preDetailsOrder from "../../assets/images/preproductionorder.svg"
import preDetailsSms from "../../assets/images/preproductionsms.svg"
import preDetailsSave from "../../assets/images/preproductionsave.svg"
import DetailsSearch from '../detailsSearch/DetailsSearch'
import DetailsSome from '../detailsSome/DetailsSome'

const DetailsHero = () => {
  return (
    <div className='hero6'>
       <div className='container'>
         <div className='hero__container6'>
            <ul className='hero__list6'>
                <li className='hero__item6 hero__active__item6'>
                    <Link>
                        <img className='hero__icon6' src={preDetailshomeLogo} alt="" />
                    </Link>
                </li>
                <li className='hero__item6'>
                    <Link to="/dashboard">
                        <img className='hero__icon6' src={preDetailsDashboard} alt="" />
                    </Link>
                </li>
                <li className='hero__item6'>
                    <Link to="/rating">
                        <img className='hero__icon6' src={preDetailsProfile} alt="" />
                    </Link>
                </li>
                <li className='hero__item6'>
                    <Link>
                        <img className='hero__icon6' src={preDetailsOrder} alt="" />
                    </Link>
                </li>
                <li className='hero__item6'>
                    <Link>
                        <img className='hero__icon6' src={preDetailsSms} alt="" />
                    </Link>
                </li>
                <li className='hero__item6'>
                    <Link>
                        <img className='hero__icon6' src={preDetailsSave} alt="" />
                    </Link>
                </li>
            </ul>
            <DetailsSearch />
            <DetailsSome />
        </div>
    </div>
    </div>
  )
}

export default DetailsHero