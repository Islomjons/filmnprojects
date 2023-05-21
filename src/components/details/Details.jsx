import React from 'react'
import "./Details.css"
import { Link } from 'react-router-dom'
import detailsHaderLogo from "../../assets/images/preHaderLogo.svg"
import detailsPreicon from "../../assets/images/pre.svg"
import detailsyoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import detailspostIcon from "../../assets/images/post.svg"
import detailsball from "../../assets/images/ball.svg"
import detailshead from "../../assets/images/face.svg"

const Details = () => {
  return (
<div className='header4'>
    <div className='container'>
        <div className='header__container4'>
            <Link className='header__logo__link4' to="/">
                <img className='header__logo__img4' src={detailsHaderLogo} alt="" />
            </Link>

            <ul className='header__list4'>
                <li className='header__item4 active__header__item4'>
                    <Link className='header__item__link4'>
                        <img className='header__logo4' src={detailsPreicon} alt="" />
                        <p className='header__item__text4'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__item4'>
                    <Link className='header__item__link4'>
                        <img className='header__logo4' src={detailsyoutubeLogo} alt="" />
                        <p className='header__item__text4 active__header__item__text4'>Production</p>
                    </Link>
                </li>
                <li className='header__item4'>
                    <Link className='header__item__link4'>
                        <img className='header__logo4' src={detailspostIcon} alt="" />
                        <p className='header__item__text4 active__header__item__text4'>Post-production</p>
                    </Link>
                </li>
            </ul>

            <div className='header__right__side4'>
                <Link>
                     <img className='header__right__img' src={detailsball} alt="" />
                </Link>
                <Link>
                     <img className='header__right__img4' src={detailshead} alt="" />
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Details