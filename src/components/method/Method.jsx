import React from 'react'
import "./Method.css"
import methodHeaderLogo from "../../assets/images/preHaderLogo.svg"
import methodPreIcon from "../../assets/images/pre.svg"
import methodYoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import methodPostIcon from "../../assets/images/post.svg"
import methodBallIcon from "../../assets/images/ball.svg"
import methodHeadIcon from "../../assets/images/face.svg"
import { Link } from 'react-router-dom'

const Method = () => {
  return (
    <div className='headerd'>
    <div className='container'>
        <div className='header__containerd'>
            <Link className='header__logo__linkd' to="/">
                <img className='header__logo__imgd' src={methodHeaderLogo} alt="" />
            </Link>

            <ul className='header__listd'>
                <li className='header__item active__header__itemd'>
                    <Link className='header__link__linkd'>
                        <img className='header__link__imgd' src={methodPreIcon} alt="" />
                        <p className='header__link__textd'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__itemd'>
                    <Link className='header__link__linkd'>
                        <img className='header__link__imgd' src={methodYoutubeLogo} alt="" />
                        <p className='header__link__textd active__header__link__textd'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__itemd'>
                    <Link className='header__link__linkd'>
                        <img className='header__link__imgd' src={methodPostIcon} alt="" />
                        <p className='header__link__textd active__header__link__textd'>Pre-production</p>
                    </Link>
                </li>
            </ul>

            <div className='header__rightd'>
                <Link>
                    <img className='header__right__img' src={methodBallIcon} alt="" />
                </Link>
                <Link>
                    <img className='header__right__imgd' src={methodHeadIcon} alt="" />
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Method