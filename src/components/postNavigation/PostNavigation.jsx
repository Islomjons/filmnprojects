import React from 'react'
import "./PostNavigation.css"
import { AiOutlineRight } from "react-icons/ai"
import postHomeIcon from "../../assets/images/postHomeIcon.svg"
import postDashboard from "../../assets/images/productiondashboard.svg"
import postProfile from "../../assets/images/productionprofile.svg"
import postOrder from "../../assets/images/productionorder.svg"
import postSms from "../../assets/images/productionsms.svg"
import postSave from "../../assets/images/productionsave.svg"
import { Link } from 'react-router-dom'

const PostNavigation = ({isPostNavigationActive, setIsPostNavigationActive}) => {
  return (
    <div className={isPostNavigationActive === true ? "postnavigation postnavigationactive" : "postnavigation"}>
        <div className='postNavigationIconWrapper'>
            <AiOutlineRight style={{color: "#fff"}} onClick={() => {setIsPostNavigationActive(false)}}/>
        </div>
        <ul className='postnavigation__list'>
            <li className='postnavigation__item active__postnavigation__item'>
                <Link>
                    <img className='postnavigation__img' src={postHomeIcon} alt="" />
                </Link>
            </li>
            <li className='postnavigation__item'>
                <Link>
                    <img className='postnavigation__img' src={postDashboard} alt="" />
                </Link>
            </li>
            <li className='postnavigation__item'>
                <Link>
                    <img className='postnavigation__img' src={postProfile} alt="" />
                </Link>
            </li>
            <li className='postnavigation__item'>
                <Link to="/order">
                    <img className='postnavigation__img' src={postOrder} alt="" />
                </Link>
            </li>
            <li className='postnavigation__item'>
                <Link>
                    <img className='postnavigation__img' src={postSms} alt="" />
                </Link>
            </li>
            <li className='postnavigation__item'>
                <Link>
                    <img className='postnavigation__img' src={postSave} alt="" />
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default PostNavigation