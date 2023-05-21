import React from 'react'
import "./RatingHero.css"
import { Link } from 'react-router-dom'
import RatingpreproductionhomeLogo from "../../assets/images/preproductionhome.svg"
import RatingpreproductionDashboard from "../../assets/images/preproductiondashboard.svg"
import RatingpreproductionProfile from "../../assets/images/preproductionprofile.svg"
import RatingpreproductionOrder from "../../assets/images/preproductionorder.svg"
import RatingpreproductionSms from "../../assets/images/preproductionsms.svg"
import RatingpreproductionSave from "../../assets/images/preproductionsave.svg"
import RatingSearch from '../ratingSearch/RatingSearch'
import RatingTitle from '../ratingTitle/RatingTitle'

const RatingHero = () => {
  return (
    <div className='hero1'>
    <div className='container'>
        <div className='hero__container1'>
        <ul className='hero__list1'>
                <li className='hero__item hero__active__item1'>
                    <Link>
                        <img className='hero__icon1' src={RatingpreproductionhomeLogo} alt="" />
                    </Link>
                </li>
                <li className='hero__item1'>
                    <Link to="/dashboard">
                        <img className='hero__icon1' src={RatingpreproductionDashboard} alt="" />
                    </Link>
                </li>
                <li className='hero__item1'>
                    <Link to="/preprofilepage">
                        <img className='hero__icon1' src={RatingpreproductionProfile} alt="" />
                    </Link>
                </li>
                <li className='hero__item1'>
                    <Link>
                        <img className='hero__icon1' src={RatingpreproductionOrder} alt="" />
                    </Link>
                </li>
                <li className='hero__item1'>
                    <Link>
                        <img className='hero__icon1' src={RatingpreproductionSms} alt="" />
                    </Link>
                </li>
                <li className='hero__item1'>
                    <Link>
                        <img className='hero__icon1' src={RatingpreproductionSave} alt="" />
                    </Link>
                </li>
            </ul>
            <RatingSearch />
            <RatingTitle />
        </div>
    </div>
</div>
  )
}

export default RatingHero