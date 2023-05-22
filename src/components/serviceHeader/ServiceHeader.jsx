import React from 'react'
import "./ServiceHeader.css"
import { Link } from 'react-router-dom'
import ServiceHaderLogo from "../../assets/images/preHaderLogo.svg"
import ServiceHaderLogoicon from "../../assets/images/pre.svg"
import ServiceyoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import ServicepostIcon from "../../assets/images/post.svg"
import Serviceball from "../../assets/images/ball.svg"
import Servicehead from "../../assets/images/face.svg"

const ServiceHeader = () => {
  return (
    <div className='header9'>
    <div className='container'>
        <div className='header__container9'>
            <Link className='header__logo__link9' to="/">
                <img className='header__logo__img9' src={ServiceHaderLogo} alt="" />
            </Link>

            <ul className='header__list9'>
                <li className='header__item9 active__header__item9'>
                    <Link className='header__link__link9'>
                        <img className='header__link__img9' src={ServiceHaderLogoicon} alt="" />
                        <p className='header__link__text9'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__item9'>
                    <Link className='header__link__link9'>
                        <img className='header__link__img9' src={ServiceyoutubeLogo} alt="" />
                        <p className='header__link__text9 active__header__link__text9'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__item9'>
                    <Link className='header__link__link9'>
                        <img className='header__link__img9' src={ServicepostIcon} alt="" />
                        <p className='header__link__text9 active__header__link__text9'>Pre-production</p>
                    </Link>
                </li>
            </ul>

            <div className='header__right9'>
                <Link>
                    <img className='header__right__img' src={Serviceball} alt="" />
                </Link>
                <Link>
                    <img className='header__right__img9' src={Servicehead} alt="" />
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default ServiceHeader