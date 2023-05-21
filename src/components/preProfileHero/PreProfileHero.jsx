import React from 'react'
import "./PreProfileHero.css"
import { Link } from 'react-router-dom'
import preProfilehomeLogo from "../../assets/images/preproductionhome.svg"
import preProfiledashLogo from "../../assets/images/preproductiondashboard.svg"
import preProfileLogo from "../../assets/images/preproductionprofile.svg"
import preProfileOrderLogo from "../../assets/images/preproductionorder.svg"
import preProfileSmsLogo from "../../assets/images/preproductionsms.svg"
import preProfileSaveLogo from "../../assets/images/preproductionsave.svg"
import PreprofileSearch from '../preProfileSearch/PreprofileSearch'
import Back from '../back/Back'

const PreProfileHero = () => {
  return (
    <div className='preProfileHero'>
        <div className='container'>
            <div className='preProfileHero__container'>
                <ul className='preProfileHero__list'>
                    <li className='preProfileHero__item active__preProfileHero__item'>
                        <Link>
                            <img className='preProfileHero__img' src={preProfilehomeLogo} alt="" />
                        </Link>
                    </li>
                    <li className='preProfileHero__item'>
                        <Link to="/dashboard">
                            <img className='preProfileHero__img' src={preProfiledashLogo} alt="" />
                        </Link>
                    </li>
                    <li className='preProfileHero__item'>
                        <Link>
                            <img className='preProfileHero__img' src={preProfileLogo} alt="" />
                        </Link>
                    </li>
                    <li className='preProfileHero__item'>
                        <Link to="/rating">
                            <img className='preProfileHero__img' src={preProfileOrderLogo} alt="" />
                        </Link>
                    </li>
                    <li className='preProfileHero__item'>
                        <Link>
                            <img className='preProfileHero__img' src={preProfileSmsLogo} alt="" />
                        </Link>
                    </li>
                    <li className='preProfileHero__item'>
                        <Link>
                            <img className='preProfileHero__img' src={preProfileSaveLogo} alt="" />
                        </Link>
                    </li>
                </ul>
                <PreprofileSearch />
                <Back />
            </div>
        </div>
    </div>
  )
}

export default PreProfileHero