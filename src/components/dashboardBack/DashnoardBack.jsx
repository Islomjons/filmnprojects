import React from 'react'
import "./DashnoardBack.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import dashIcon1 from "../../assets/images/dashIcon.svg"
import dashLikeIcon from "../../assets/images/dashLike.svg"
import dashSaveIcon from "../../assets/images/dashSave.svg"
import { Link } from 'react-router-dom'
import DashboardCrads from '../dashboardCards/DashboardCrads'

const DashnoardBack = () => {
  return (
    <div className='dashboardback'>
        <div className='dashboardback__container'>
            <div className='dashboardback__wrapper'>
                <button className='dashboardback__btn'>
                    <img className='dashboardback__icon' src={leftVectorIcon} alt="" />
                </button>
                <p className='dashboardback__text1'>Go back</p>
                <p className='dashboardback__text2'>Storyliners</p>
            </div>

            <div className='dashboardback__bottom__wrapper'>
                <div className='dashboardback__bottom__wrapper__infos'>
                    <ul className='dashboardback__bottom__list'>
                        <li className='dashboardback__bottom__item'>
                            <img className='dashboardback__bottom__img' src={dashIcon1} alt="" />
                            <div className='dashboardback__bottom__info'>
                                <p className='dashboardback__bottom__text1'>LabelCom</p>
                                <p className='dashboardback__bottom__text2'>Influencer Name</p>

                                <ul className='dashboardback__bottom__list__info'>
                                    <li className='dashboardback__bottom__item__info'>
                                        <div className='dashboardback__bottoms__border'>
                                            <Link className='dashboardback__bottom__item__link'>2k</Link>
                                            <Link className='dashboardback__bottom__item__link1'>Posts</Link>
                                        </div>
                                    </li>
                                    <li className='dashboardback__bottom__item__info'>
                                        <div className='dashboardback__bottoms__border'>
                                            <Link className='dashboardback__bottom__item__link'>1.5M</Link>
                                            <Link className='dashboardback__bottom__item__link1'>Subscribers</Link>
                                        </div>
                                    </li>
                                    <li className='dashboardback__bottom__item__info'>
                                        <div className='dashboardback__bottoms__border'>
                                            <Link className='dashboardback__bottom__item__link'>22M</Link>
                                            <Link className='dashboardback__bottom__item__link1'>Comments</Link>
                                        </div>
                                    </li>
                                    <li className='dashboardback__bottom__item__info'>
                                        <div className='dashboardback__bottoms__border'>
                                            <Link className='dashboardback__bottom__item__link'>24.8%k</Link>
                                            <Link className='dashboardback__bottom__item__link1'>Engagement</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    
                    <div className='dashboardback__bottom__right'>
                        <p className='dashboardback__bottom__right__num'>4.7</p>
                        <p className='dashboardback__bottom__right__text'>Rating</p>
                    </div>
                </div>
                <div className='dashboardback__bottom__wrapper__sides'>
                    <div className='dashboardback__bottom__left__sides'>
                        <p className='dashboardback__bottom__left__text'>Ultrices fusce nisl sed nibh arcu ullamcorper convallis. Dui nibh turpis varius porta viverra maecenas proin. Amet, urna, sed quis nibh ac curabitur commodo sapien. Fames turpis quam arcu enim massa.</p>
                    </div>

                    <div className='dashboardback__bottom__right__sides'>
                        <Link>
                            <img className='dashboardback__bottom__right__img1' src={dashLikeIcon} alt="" />
                        </Link>
                        <Link>
                            <img className='dashboardback__bottom__right__img2' src={dashSaveIcon} alt="" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='dashboardback__item__lists__wrapper'>
                <ul className='dashboardback__item__lists'>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link'>Profile</Link>
                    </li>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link'>Work History</Link>
                    </li>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link active__dashboardback__item__items__link'>Photos</Link>
                    </li>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link'>Videos</Link>
                    </li>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link'>Articals</Link>
                    </li>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link'>Social Media</Link>
                    </li>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link'>Equipment</Link>
                    </li>
                    <li className='dashboardback__item__items'>
                        <Link className='dashboardback__item__items__link'>Services</Link>
                    </li>
                </ul>
            </div>
            <DashboardCrads />
        </div>
    </div>
  )
}

export default DashnoardBack