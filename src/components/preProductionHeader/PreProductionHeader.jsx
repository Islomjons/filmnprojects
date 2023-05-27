import React from 'react'
import "./PreProductionHeader.css"
import { Link } from 'react-router-dom'
import preHaderLogo from "../../assets/images/preHaderLogo.svg"
import preicon from "../../assets/images/pre.svg"
import youtubeLogo from "../../assets/images/headerLogoYoutube.svg"
import postIcon from "../../assets/images/post.svg"
import ball from "../../assets/images/ball.svg"
import head from "../../assets/images/face.svg"
import { GiHamburgerMenu } from "react-icons/gi"

const PreProductionHeader = ({setIsSidebarActive}) => {
  return (
    <div className='preProductionHeader'>
        <div className='container'>
            <div className='preProductionHeader__container'>
                <Link to="/">
                    <img className='preProductionHeader__img' src={preHaderLogo} alt="" />
                </Link>

                <ul className='preProductionHeader__list'>
                    <li className='preProductionHeader__item active__preProductionHeader__item'>
                        <Link className='preProductionHeader__item__link'>
                              <img className='preProductionHeader__item__img' src={preicon} alt="" />
                              <p className='preProductionHeader__item__text'>Pre-production</p>
                        </Link>
                    </li>
                    <li className='preProductionHeader__item'>
                        <Link className='preProductionHeader__item__link' to="/productionheader">
                              <img className='preProductionHeader__item__img' src={youtubeLogo} alt="" />
                              <p className='preProductionHeader__item__text active__preProductionHeader__item__text'>Production</p>
                        </Link>
                    </li>
                    <li className='preProductionHeader__item'>
                        <Link className='preProductionHeader__item__link' to="/postproduction">
                              <img className='preProductionHeader__item__img' src={postIcon} alt="" />
                              <p className='preProductionHeader__item__text active__preProductionHeader__item__text'>Post-production</p>
                        </Link>
                    </li>
                </ul>

                <div className='preProductionHeader__right'>
                    <button className='preProductionHeader__right__btn' onClick={() => {setIsSidebarActive(true)}}>
                        <GiHamburgerMenu className='preProductionHeader__right__ham__icon'/>
                    </button>
                    <Link>
                        <img className='preProductionHeader__right__img1' src={ball} alt="" />
                    </Link>
                    <Link to="/history">
                        <img className='preProductionHeader__right__img2' src={head} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreProductionHeader