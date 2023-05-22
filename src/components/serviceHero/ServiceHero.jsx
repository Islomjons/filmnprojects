import React from 'react'
import "./ServiceHero.css"
import { Link } from 'react-router-dom'
import ServiceoprehomeLogo from "../../assets/images/preproductionhome.svg"
import ServicepreDashboard from "../../assets/images/preproductiondashboard.svg"
import ServicepreProfile from "../../assets/images/preproductionprofile.svg"
import ServicepreOrder from "../../assets/images/preproductionorder.svg"
import ServicepreSms from "../../assets/images/preproductionsms.svg"
import ServicepreSave from "../../assets/images/preproductionsave.svg"
import ServiceSearch from '../serviceSearch/ServiceSearch'
import ServicePosts from '../servicePosts/ServicePosts'

const ServiceHero = () => {
  return (
<div className='hero0'>
    <div className='container'>
        <div className='hero__container0'>
            <ul className='hero__list0'>
                <li className='hero__item active__hero__item0'>
                    <Link>
                        <img className='hero__img0' src={ServiceoprehomeLogo} alt="" />
                    </Link>
                </li>
                <li className='hero__item0'>
                    <Link to="/pay">
                        <img className='hero__img0' src={ServicepreDashboard} alt="" />
                    </Link>
                </li>
                <li className='hero__item0'>
                    <Link>
                        <img className='hero__img0' src={ServicepreProfile} alt="" />
                    </Link>
                </li>
                <li className='hero__item0'>
                    <Link>
                        <img className='hero__img0' src={ServicepreOrder} alt="" />
                    </Link>
                </li>
                <li className='hero__item0'>
                    <Link to="/method">
                        <img className='hero__img0' src={ServicepreSms} alt="" />
                    </Link>
                </li>
                <li className='hero__item0'>
                    <Link>
                        <img className='hero__img0' src={ServicepreSave} alt="" />
                    </Link>
                </li>
            </ul>
            <ServiceSearch />
            <ServicePosts />
        </div>
    </div>
</div>
  )
}

export default ServiceHero