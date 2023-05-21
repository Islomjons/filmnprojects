import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import dashHaderLogo from "../../assets/images/preHaderLogo.svg"
import dashPreicon from "../../assets/images/pre.svg"
import dashyoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import dashpostIcon from "../../assets/images/post.svg"
import Dashball from "../../assets/images/ball.svg"
import Dashhead from "../../assets/images/face.svg"

const Dashboard = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <Link className='header__logo__link' to="/">
                    <img className='heder__logo__img' src={dashHaderLogo} alt="" />
                </Link>

                <ul className='header__list'>
                   <li className='header__item active__header__item'>
                        <Link className='header__item__link'>
                            <img className='header__item__img' src={dashPreicon} alt="" />
                            <p className='header__item__text'>Pre-production</p>
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__item__link'>
                            <img className='header__item__img' src={dashyoutubeLogo} alt="" />
                            <p className='header__item__text active__header__text'>Production</p>
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__item__link'>
                            <img className='header__item__img' src={dashpostIcon} alt="" />
                            <p className='header__item__text active__header__text'>Post-production</p>
                        </Link>
                    </li>
                </ul>

                <div className='header__profile__wrapper'>
                    <img className='header__profile__img1' src={Dashball} alt="" />
                    <img className='header__profile__img' src={Dashhead} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard