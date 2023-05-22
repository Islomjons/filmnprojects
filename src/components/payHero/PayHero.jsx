import React from 'react'
import "./PayHero.css"
import payHerohomeLogo from "../../assets/images/preproductionhome.svg"
import payHeroDashboard from "../../assets/images/preproductiondashboard.svg"
import payHeroProfile from "../../assets/images/preproductionprofile.svg"
import payHeroOrder from "../../assets/images/preproductionorder.svg"
import payHeroSms from "../../assets/images/preproductionsms.svg"
import payHeroSave from "../../assets/images/preproductionsave.svg"
import { Link } from 'react-router-dom'
import PaySearch from '../paySearch/PaySearch'
import PayName from '../payName/PayName'

const PayHero = () => {
  return (
    <div className='heros'>
    <div className='container'>
        <div className='hero__containers'>
            <ul className='hero__lists'>
                <li className='hero__items active__hero__items'>
                    <Link>
                        <img className='hero__imgs' src={payHerohomeLogo} alt="" />
                    </Link>
                </li>
                <li className='hero__items'>
                    <Link>
                        <img className='hero__imgs' src={payHeroDashboard} alt="" />
                    </Link>
                </li>
                <li className='hero__items'>
                    <Link to="/service">
                        <img className='hero__imgs' src={payHeroProfile} alt="" />
                    </Link>
                </li>
                <li className='hero__items'>
                    <Link>
                        <img className='hero__imgs' src={payHeroOrder} alt="" />
                    </Link>
                </li>
                <li className='hero__items'>
                    <Link to="/method">
                        <img className='hero__imgs' src={payHeroSms} alt="" />
                    </Link>
                </li>
                <li className='hero__items'>
                    <Link>
                        <img className='hero__imgs' src={payHeroSave} alt="" />
                    </Link>
                </li>
            </ul>
            <PaySearch />
            <PayName />
        </div>
    </div>
</div>
  )
}

export default PayHero