import React from 'react'
import "./MethodHero.css"
import { Link } from 'react-router-dom'
import methodHerohomeLogo from "../../assets/images/preproductionhome.svg"
import methodHeroDashboard from "../../assets/images/preproductiondashboard.svg"
import methodHeroProfile from "../../assets/images/preproductionprofile.svg"
import methodHeroOrder from "../../assets/images/preproductionorder.svg"
import methodHeroSms from "../../assets/images/preproductionsms.svg"
import methodHeroSave from "../../assets/images/preproductionsave.svg"
import Methodmain from '../methodMain/Methodmain'

const MethodHero = () => {
  return (
    <div className='heroa'>
        <div className='container'>
            <div className='hero__containera'>
                <ul className='hero__lista'>
                    <li className='hero__itema active__hero__itema'>
                        <Link>
                            <img className='hero__imga' src={methodHerohomeLogo} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itema'>
                        <Link to="/pay">
                            <img className='hero__imga' src={methodHeroDashboard} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itema'>
                        <Link to="/service">
                            <img className='hero__imga' src={methodHeroProfile} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itema'>
                        <Link>
                            <img className='hero__imga' src={methodHeroOrder} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itema'>
                        <Link>
                            <img className='hero__imga' src={methodHeroSms} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itema'>
                        <Link>
                            <img className='hero__imga' src={methodHeroSave} alt="" />
                        </Link>
                    </li>
                </ul>
                <Methodmain />
            </div>
        </div>
    </div>
  )
}

export default MethodHero