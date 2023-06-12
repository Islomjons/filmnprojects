import React from 'react'
import "./PostSidebar.css"
import { FiX } from "react-icons/fi"
import postPre from "../../assets/images/postpre.svg"
import postYoutube from "../../assets/images/postyoutube.svg"
import postPost from "../../assets/images/postpost.svg"
import { Link } from 'react-router-dom'

const PostSidebar = ({isPostSidebarActive, setIsPostSidebarActive}) => {
  return (
    <div className={isPostSidebarActive === true ? "postsidebar postsidebaractive" : "postsidebar"}>
        <div className='postsidebar__wrapper'>
            <FiX onClick={() => {setIsPostSidebarActive(false)}}/>
        </div>
        <ul className='postsidebar__list'>
            <li className='postsidebar__item'>
                <Link className='postsidebar__link' to="/">
                    <img className='postsidebar__img' src={postPre} alt="" />
                    <p className='postsidebar__text active__postsidebar__text'>Pre-production</p>
                </Link>
            </li>
            <li className='postsidebar__item'>
                <Link className='postsidebar__link' to="/productionheader">
                    <img className='postsidebar__img' src={postYoutube} alt="" />
                    <p className='postsidebar__text active__postsidebar__text'>Production</p>
                </Link>
            </li>
            <li className='postsidebar__item active__postsidebar__item'>
                <Link className='postsidebar__link'>
                    <img className='postsidebar__img' src={postPost} alt="" />
                    <p className='postsidebar__text'>Post-production</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default PostSidebar