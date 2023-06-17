import React from 'react'
import "./HistorySidebar.css"
import { FiX } from "react-icons/fi"
import historyPreIcon from "../../assets/images/pre.svg"
import historyYoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import historyPostIcon from "../../assets/images/post.svg"
import { Link } from 'react-router-dom'

const HistorySidebar = ({isHistorySidebarActive, setIsHistorySidebarActive}) => {
  return (
    <div className={isHistorySidebarActive === true ? "historysidebar historysidebaractive" : "historysidebar"}>
        <div className='historysidebar__wrapper'>
            <FiX onClick={() => {setIsHistorySidebarActive(false)}}/>    
        </div>
        <ul className='historysidebar__list'>
            <li className='historysidebar__item active__historysidebar__item'>
                <Link className='historysidebar__link'>
                    <img className='historysidebar__img' src={historyPreIcon} alt="" />
                    <p className='historysidebar__text'>Pre-production</p>
                </Link>
            </li>
            <li className='historysidebar__item'>
                <Link className='historysidebar__link' to="/productionheader">
                    <img className='historysidebar__img' src={historyYoutubeLogo} alt="" />
                    <p className='historysidebar__text active__historysidebar__text'>Production</p>
                </Link>
            </li>
            <li className='historysidebar__item'>
                <Link className='historysidebar__link' to="/postproduction">
                    <img className='historysidebar__img' src={historyPostIcon} alt="" />
                    <p className='historysidebar__text active__historysidebar__text'>Post-production</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default HistorySidebar