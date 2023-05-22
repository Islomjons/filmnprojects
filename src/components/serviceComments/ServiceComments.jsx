import React from 'react'
import "./ServiceComments.css"
import { Link } from 'react-router-dom'
import serviceIcon1 from "../../assets/images/dashIcon.svg"
import serviceLikeIcon from "../../assets/images/dashLike.svg"
import serviceSaveIcon from "../../assets/images/dashSave.svg"
import ServiceCards from '../serviceCards/ServiceCards'

const ServiceComments = () => {
  return (
    <div className='blog'>
        <div className='blog__container'>
            <div className='blog__side__wrapper'>
                <div className='blog__left__side'>
                    <img className='blog__left__img' src={serviceIcon1} alt="" />

                    <div className='blog__left__wrapper'>
                        <p className='blog__text'>LabelCom</p>
                        <p className='blog__text1'>Influencer Name</p>

                        <ul className='blog__list'>
                            <li className='blog__item'>
                                <div className='blog__item__wrapper'>
                                    <Link className='blog__number'>2k</Link>
                                    <Link className='blog__text2'>Posts</Link>
                                </div>
                            </li>
                            <li className='blog__item'>
                                <div className='blog__item__wrapper'>
                                    <Link className='blog__number'>1.5M</Link>
                                    <Link className='blog__text2'>Subscribers</Link>
                                </div>
                            </li>
                            <li className='blog__item'>
                                <div className='blog__item__wrapper'>
                                    <Link className='blog__number'>22M</Link>
                                    <Link className='blog__text2'>Comments</Link>
                                </div>
                            </li>
                            <li className='blog__item'>
                                <div className='blog__item__wrapper'>
                                    <Link className='blog__number'>4.8%</Link>
                                    <Link className='blog__text2'>Engagement</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='blog__right__side'>
                    <p className='blog__right__number'>4.7</p>
                    <p className='blog__right__text'>Rating</p>
                </div>
            </div>

            <div className='blog__bottom__side__wrapper'>
                <div className='blog__bottom__side__left'>
                    <p className='blog__bottom__side__text'>Ultrices fusce nisl sed nibh arcu ullamcorper convallis. Dui nibh turpis varius porta viverra maecenas proin. Amet, urna, sed quis nibh ac curabitur commodo sapien. Fames turpis quam arcu enim massa.</p>
                </div>

                <div className='blog__bottom__side__right'>
                    <Link>
                        <img className='blog__bottom__side__img' src={serviceLikeIcon} alt="" />
                    </Link>
                    <Link>
                        <img className='blog__bottom__side__img1' src={serviceSaveIcon} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <div className='blog__item__list__wrapper'>
            <ul className='blog__item__list'>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link'>Profile</Link>
                </li>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link'>Work History</Link>
                </li>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link'>Photos</Link>
                </li>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link'>Videos</Link>
                </li>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link'>Articals</Link>
                </li>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link'>Social Media</Link>
                </li>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link'>Equipment</Link>
                </li>
                <li className='blog__item__bottom'>
                    <Link className='blog__item__link active__blog__item__link'>Services</Link>
                </li>
            </ul>
        </div>
        <ServiceCards />
    </div>
  )
}

export default ServiceComments