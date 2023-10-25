import React from 'react'
import "./PreProfilePage.css"
import { Link } from 'react-router-dom'
import preProfilePageHaderLogo from "../../assets/images/preHaderLogo.svg"
import preProfilePageLogo from "../../assets/images/pre.svg"
import preProfilePageYoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import preProfilePagePostLogo from "../../assets/images/post.svg"
import preProfilePageBallLogo from "../../assets/images/ball.svg"
import preProfilePageHeadLogo from "../../assets/images/face.svg"
import { GiHamburgerMenu } from "react-icons/gi"

const PreProfilePage = ({setIsPreProfileSidebarActive}) => {
  return (
    <div className='preProfilePage'>
        <div className='container'>
            <div className='preProfilePage__container'>
                <Link className='preProfilePage__logo__link' to="/">
                    <img className='preProfilePage__logo' src={preProfilePageHaderLogo} alt="" />
                </Link>

                <ul className='preProfilePage__list'>
                    <li className='preProfilePage__item active__preProfilePage__item'>
                        <Link className='preProfilePage__item__link'>
                            <img className='preProfilePage__item__logo' src={preProfilePageLogo} alt="" />
                            <p className='preProfilePage__item__text'>Pre-production</p>
                        </Link>
                    </li>
                    <li className='preProfilePage__item'>
                        <Link className='preProfilePage__item__link'>
                            <img className='preProfilePage__item__logo' src={preProfilePageYoutubeLogo} alt="" />
                            <p className='preProfilePage__item__text active__preProfilePage__item__text'>Production</p>
                        </Link>
                    </li>
                    <li className='preProfilePage__item'>
                        <Link className='preProfilePage__item__link'>
                            <img className='preProfilePage__item__logo' src={preProfilePagePostLogo} alt="" />
                            <p className='preProfilePage__item__text active__preProfilePage__item__text'>Post-production</p>
                        </Link>
                    </li>
                </ul>

                <div className='preProfilePage__right'>
                    <button className='preProfilePage__right__btn' onClick={() => {setIsPreProfileSidebarActive(true)}}>
                        <GiHamburgerMenu />
                    </button>
                    <Link>
                        <img className='preProfilePage__right__img1' src={preProfilePageBallLogo} alt="" />
                    </Link>
                    <Link>
                        <img className='preProfilePage__right__img2' src={preProfilePageHeadLogo} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreProfilePage