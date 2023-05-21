import React from 'react'
import "./SaveVideoHero.css"
import { Link } from 'react-router-dom'
import SaveVideoprehomeLogo from "../../assets/images/preproductionhome.svg"
import SaveVideopreDashboard from "../../assets/images/preproductiondashboard.svg"
import SaveVideopreProfile from "../../assets/images/preproductionprofile.svg"
import SaveVideopreOrder from "../../assets/images/preproductionorder.svg"
import SaveVideopreSms from "../../assets/images/preproductionsms.svg"
import SaveVideopreSave from "../../assets/images/preproductionsave.svg"
import SaveVideoSearch from '../saveVideoSearch/SaveVideoSearch'
import Photos from '../photos/Photos'

const SaveVideoHero = () => {
  return (
    <div className='hero2'>
       <div className='container'>
         <div className='hero__container2'>
            <ul className='hero__list2'>
                <li className='hero__item2 hero__active__item2'>
                    <Link>
                        <img className='hero__icon2' src={SaveVideoprehomeLogo} alt="" />
                    </Link>
                </li>
                <li className='hero__item2'>
                    <Link to="/dashboard">
                        <img className='hero__icon2' src={SaveVideopreDashboard} alt="" />
                    </Link>
                </li>
                <li className='hero__item2'>
                    <Link to="/preprofilepage">
                        <img className='hero__icon2' src={SaveVideopreProfile} alt="" />
                    </Link>
                </li>
                <li className='hero__item2'>
                    <Link to="/rating">
                        <img className='hero__icon2' src={SaveVideopreOrder} alt="" />
                    </Link>
                </li>
                <li className='hero__item2'>
                    <Link>
                        <img className='hero__icon2' src={SaveVideopreSms} alt="" />
                    </Link>
                </li>
                <li className='hero__item2'>
                    <Link>
                        <img className='hero__icon2' src={SaveVideopreSave} alt="" />
                    </Link>
                </li>
            </ul>
            <SaveVideoSearch />
            <Photos />
        </div>
    </div>
    </div>
  )
}

export default SaveVideoHero