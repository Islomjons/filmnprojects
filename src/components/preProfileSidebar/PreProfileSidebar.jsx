import React from 'react'
import "./PreProfileSidebar.css"
import { FiX } from "react-icons/fi"
import preProfilePageLogo from "../../assets/images/pre.svg"
import preProfilePageYoutubeLogo from "../../assets/images/headerLogoYoutube.svg"
import preProfilePagePostLogo from "../../assets/images/post.svg"
import { Link } from 'react-router-dom'

const PreProfileSidebar = ({isPreProfileSidebarActive, setIsPreProfileSidebarActive}) => {
  return (
    <div className={isPreProfileSidebarActive === true ? "preprofile preprofileactive" : "preprofile"}>
        <div className='preprofile__wrapper'>
            <FiX style={{cursor: "pointer"}} onClick={() => {setIsPreProfileSidebarActive(false)}}/>
        </div>

        <ul className='preprofile__list'>
            <li className='preprofile__item active__preprofile__item'>
                <Link className='preprofile__link'>
                    <img className='preprofile__imgs' src={preProfilePageLogo} alt="" />
                    <p className='preprofile__text'>Pre-production</p>
                </Link>
            </li>
            <li className='preprofile__item'>
                <Link className='preprofile__link'>
                    <img className='preprofile__imgs' src={preProfilePageYoutubeLogo} alt="" />
                    <p className='preprofile__text active__preprofile__text'>Production</p>
                </Link>
            </li>
            <li className='preprofile__item'>
                <Link className='preprofile__link'>
                    <img className='preprofile__imgs' src={preProfilePagePostLogo} alt="" />
                    <p className='preprofile__text active__preprofile__text'>Post-production</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default PreProfileSidebar