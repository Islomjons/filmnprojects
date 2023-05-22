import React from 'react'
import "./Pay.css"
import payHeaderLogo from "../../assets/images/preHaderLogo.svg"
import payPreIcon from "../../assets/images/pre.svg"
import payYoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import payPostIcon from "../../assets/images/post.svg"
import payBallIcon from "../../assets/images/ball.svg"
import payHeadIcon from "../../assets/images/face.svg"
import { Link } from 'react-router-dom'

const Pay = () => {
  return (
    <div className='headers'>
    <div className='container'>
        <div className='header__containers'>
            <Link className='header__logo__links' to="/">
                <img className='header__logo__imgs' src={payHeaderLogo} alt="" />
            </Link>

            <ul className='header__lists'>
                <li className='header__items active__header__items'>
                    <Link className='header__link__links'>
                        <img className='header__link__imgs' src={payPreIcon} alt="" />
                        <p className='header__link__texts'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__items'>
                    <Link className='header__link__links'>
                        <img className='header__link__imgs' src={payYoutubeLogo} alt="" />
                        <p className='header__link__texts active__header__link__texts'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__items'>
                    <Link className='header__link__links'>
                        <img className='header__link__imgs' src={payPostIcon} alt="" />
                        <p className='header__link__texts active__header__link__texts'>Pre-production</p>
                    </Link>
                </li>
            </ul>

            <div className='header__rights'>
                <Link>
                    <img className='header__right__img' src={payBallIcon} alt="" />
                </Link>
                <Link>
                    <img className='header__right__imgs' src={payHeadIcon} alt="" />
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Pay