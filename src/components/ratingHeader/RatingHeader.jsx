import React from 'react'
import "./RatingHeader.css"
import { Link } from 'react-router-dom'
import ratingpreHaderLogo from "../../assets/images/preHaderLogo.svg"
import ratingpreicon from "../../assets/images/pre.svg"
import RatingyoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import RatingpostIcon from "../../assets/images/post.svg"
import Ratingball from "../../assets/images/ball.svg"
import Ratinghead from "../../assets/images/face.svg"

const RatingHeader = () => {
  return (
  <div className='header1'>
    <div className='container'>
        <div className='header__container1'>
            <Link className='header__logo__link1' to="/">
                <img className='header__logo__img1' src={ratingpreHaderLogo} alt="" />
            </Link>

            <ul className='header__list1'>
                <li className='header__item1 active__header__item1'>
                    <Link className='header__item__link1'>
                        <img className='header__logo1' src={ratingpreicon} alt="" />
                        <p className='header__item__text1'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__item1'>
                    <Link className='header__item__link1'>
                        <img className='header__logo1' src={RatingyoutubeLogo} alt="" />
                        <p className='header__item__text1 active__header__item__text1'>Production</p>
                    </Link>
                </li>
                <li className='header__item1'>
                    <Link className='header__item__link1'>
                        <img className='header__logo1' src={RatingpostIcon} alt="" />
                        <p className='header__item__text1 active__header__item__text1'>Post-production</p>
                    </Link>
                </li>
            </ul>

            <div className='header__right__side1'>
                <Link>
                     <img className='header__right__img' src={Ratingball} alt="" />
                </Link>
                <Link>
                     <img className='header__right__img1' src={Ratinghead} alt="" />
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RatingHeader