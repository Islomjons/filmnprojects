import React from 'react'
import "./Order.css"
import orderHeaderLogo from "../../assets/images/preHaderLogo.svg"
import orderPreIcon from "../../assets/images/pre.svg"
import orderYoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import orderPostIcon from "../../assets/images/post.svg"
import orderBallIcon from "../../assets/images/ball.svg"
import orderHeadIcon from "../../assets/images/face.svg"
import { Link } from 'react-router-dom'

const Order = () => {
  return (
<div className='headerx'>
    <div className='container'>
        <div className='header__containerx'>
            <Link className='header__logo__linkx' to="/">
                <img className='header__logo__imgx' src={orderHeaderLogo} alt="" />
            </Link>

            <ul className='header__listx'>
                <li className='header__itemx active__header__itemx'>
                    <Link className='header__link__linkx'>
                        <img className='header__link__imgx' src={orderPreIcon} alt="" />
                        <p className='header__link__textx'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__itemx'>
                    <Link className='header__link__linkx'>
                        <img className='header__link__imgx' src={orderYoutubeLogo} alt="" />
                        <p className='header__link__textx active__header__link__textx'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__itemx'>
                    <Link className='header__link__linkx'>
                        <img className='header__link__imgx' src={orderPostIcon} alt="" />
                        <p className='header__link__textx active__header__link__textx'>Pre-production</p>
                    </Link>
                </li>
            </ul>

            <div className='header__rightx'>
                <Link>
                    <img className='header__right__img' src={orderBallIcon} alt="" />
                </Link>
                <Link>
                    <img className='header__right__imgx' src={orderHeadIcon} alt="" />
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Order