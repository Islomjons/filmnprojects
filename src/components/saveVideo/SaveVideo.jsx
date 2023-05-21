import React from 'react'
import "./SaveVideo.css"
import { Link } from 'react-router-dom'
import SaveVideopreHaderLogo from "../../assets/images/preHaderLogo.svg"
import SaveVideoratingpreicon from "../../assets/images/pre.svg"
import SaveVideoRatingyoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import SaveVideoRatingpostIcon from "../../assets/images/post.svg"
import SaveVideoRatingball from "../../assets/images/ball.svg"
import SaveVideoRatinghead from "../../assets/images/face.svg"

const SaveVideo = () => {
  return (
    <div className='header2'>
    <div className='container'>
        <div className='header__container2'>
            <Link className='header__logo__link2' to="/">
                <img className='header__logo__img2' src={SaveVideopreHaderLogo} alt="" />
            </Link>

            <ul className='header__list2'>
                <li className='header__item active__header__item2'>
                    <Link className='header__item__link2'>
                        <img className='header__logo2' src={SaveVideoratingpreicon} alt="" />
                        <p className='header__item__text2'>Pre-production</p>
                    </Link>
                </li>
                <li className='header__item2'>
                    <Link className='header__item__link2'>
                        <img className='header__logo2' src={SaveVideoRatingyoutubeLogo} alt="" />
                        <p className='header__item__text2 active__header__item__text2'>Production</p>
                    </Link>
                </li>
                <li className='header__item2'>
                    <Link className='header__item__link2'>
                        <img className='header__logo2' src={SaveVideoRatingpostIcon} alt="" />
                        <p className='header__item__text2 active__header__item__text2'>Post-production</p>
                    </Link>
                </li>
            </ul>

            <div className='header__right__side2'>
                <Link>
                     <img className='header__right__img' src={SaveVideoRatingball} alt="" />
                </Link>
                <Link>
                     <img className='header__right__img2' src={SaveVideoRatinghead} alt="" />
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SaveVideo