import React from 'react'
import "./PostProductionHero.css"
import { Link } from 'react-router-dom'
import postHomeIcon from "../../assets/images/postHomeIcon.svg"
import postDashboard from "../../assets/images/productiondashboard.svg"
import postProfile from "../../assets/images/productionprofile.svg"
import postOrder from "../../assets/images/productionorder.svg"
import postSms from "../../assets/images/productionsms.svg"
import postSave from "../../assets/images/productionsave.svg"
import PostProductionSearch from '../postProductionSearch/PostProductionSearch'
import PostProductionProducer from '../postProductionProducer/PostProductionProducer'
import { AiOutlineRight } from "react-icons/ai"

const PostProductionHero = ({setIsPostNavigationActive}) => {
  return (
    <div className='postProductionHero'>
        <div className='container'>
            <div className='post__production__hero__container'>
                 <div className='post__production__hero__list__wrapper'>
                    <ul className='post__production__hero__list'>
                        <li className='post__production__hero__item active__post__production__hero__item'>
                            <Link>
                                <img className='post__production__hero__img' src={postHomeIcon} alt="" />
                            </Link>
                        </li>
                        <li className='post__production__hero__item'>
                            <Link>
                                <img className='post__production__hero__img' src={postDashboard} alt="" />
                            </Link>
                        </li>
                        <li className='post__production__hero__item'>
                            <Link>
                                <img className='post__production__hero__img' src={postProfile} alt="" />
                            </Link>
                        </li>
                        <li className='post__production__hero__item'>
                            <Link to="/order">
                                <img className='post__production__hero__img' src={postOrder} alt="" />
                            </Link>
                        </li>
                        <li className='post__production__hero__item'>
                            <Link>
                                <img className='post__production__hero__img' src={postSms} alt="" />
                            </Link>
                        </li>
                        <li className='post__production__hero__item'>
                            <Link>
                                <img className='post__production__hero__img' src={postSave} alt="" />
                            </Link>
                        </li>
                    </ul>
                    <button className='post__production__hero__btn' onClick={() => {setIsPostNavigationActive(true)}}>
                        <AiOutlineRight />
                    </button>
                 </div>
                 <PostProductionSearch />
                 <PostProductionProducer />
            </div>
        </div>
    </div>
  )
}

export default PostProductionHero