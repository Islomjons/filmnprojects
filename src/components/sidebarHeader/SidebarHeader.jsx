import React from 'react'
import "./SidebarHeader.css"
import { FiX } from "react-icons/fi"
import preicon from "../../assets/images/pre.svg"
import youtubeLogo from "../../assets/images/headerLogoYoutube.svg"
import postIcon from "../../assets/images/post.svg"
import { Link } from 'react-router-dom'

const SidebarHeader = ({isSidebarActive, setIsSidebarActive}) => {
  return (
    <div className={isSidebarActive === true ? "sidebar sidebaractive" : "sidebar"}>
        <div className='sidebar__wrapper'>
            <FiX style={{cursor: "pointer"}} onClick={() => {setIsSidebarActive(false)}}/>
        </div>
        <ul className='sidebar__list'>
            <li className='sidebar__item active__sidebar'>
                <Link className='sidebar__linl'>
                    <img className='sidebar__icon' src={preicon} alt="" />
                    <p className='sidebar__text'>Pre-production</p>
                </Link>
            </li>
            <li className='sidebar__item'>
                <Link className='sidebar__linl' to="/productionheader">
                    <img className='sidebar__icon' src={youtubeLogo} alt="" />
                    <p className='sidebar__text active__sidebar__text'>Production</p>
                </Link>
            </li>
            <li className='sidebar__item'>
                <Link className='sidebar__linl' to="/postproduction">
                    <img className='sidebar__icon' src={postIcon} alt="" />
                    <p className='sidebar__text active__sidebar__text'>Post-production</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SidebarHeader