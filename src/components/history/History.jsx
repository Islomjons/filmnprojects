import React from 'react'
import "./History.css"
import historyHeaderLogo from "../../assets/images/preHaderLogo.svg"
import historyPreIcon from "../../assets/images/pre.svg"
import historyYoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import historyPostIcon from "../../assets/images/post.svg"
import historyBallIcon from "../../assets/images/ball.svg"
import historyHeadIcon from "../../assets/images/face.svg"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"

const History = ({setIsHistorySidebarActive}) => {
  return (
    <div className='historyHeader'>
        <div className='container'>
            <div className='historyHeader__container'>
                <Link className='historyHeader__logo__link' to="/">
                    <img className='historyHeader__logo' src={historyHeaderLogo} alt="" />
                </Link>

                <ul className='historyHeader__list'>
                    <li className='historyHeader__item active__historyHeader__item'>
                        <Link className='historyHeader__link'>
                            <img className='historyHeader__img' src={historyPreIcon} alt="" />
                            <p className='historyHeader__text'>Pre-production</p>
                        </Link>
                    </li>
                    <li className='historyHeader__item'>
                        <Link className='historyHeader__link' to="/productionheader">
                            <img className='historyHeader__img' src={historyYoutubeLogo} alt="" />
                            <p className='historyHeader__text active__historyHeader__text'>Production</p>
                        </Link>
                    </li>
                    <li className='historyHeader__item'>
                        <Link className='historyHeader__link' to="/postproduction">
                            <img className='historyHeader__img' src={historyPostIcon} alt="" />
                            <p className='historyHeader__text active__historyHeader__text'>Post-production</p>
                        </Link>
                    </li>
                </ul>

                <div className='history__header__right'>
                    <button className='history__header__btn' onClick={() => {setIsHistorySidebarActive(true)}}>
                        <GiHamburgerMenu />
                    </button>
                    <Link>
                        <img className='history__header__right__img1' src={historyBallIcon} alt="" />
                    </Link>
                    <Link>
                        <img className='history__header__right__img2' src={historyHeadIcon} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History