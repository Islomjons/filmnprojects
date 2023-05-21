import React from 'react'
import "./PreProfilePosts.css"
import profilePostsImg from "../../assets/images/profileIcon.svg"
import  preProfileLikeIcon from "../../assets/images/storylinercardslike.svg";
import preProfileSaveIcon from "../../assets/images/storylinercardssave.svg"
import { Link } from 'react-router-dom'
import PrePostsLInks from '../prePostsLinks/PrePostsLInks';

const PreProfilePosts = () => {
  return (
    <div className='preProfilePosts'>
        <div className='preProfilePosts__container'>
            <div className='preProfilePosts__wrapper__side'>
                <div className='preProfilePosts__left__side'>
                    <img className='preProfilePosts__left__img' src={profilePostsImg} alt="" />
                    <div className='preProfilePosts__left__wrapper'>
                        <p className='preProfilePosts__left__text'>LabelCom</p>
                        <p className='preProfilePosts__left__text1'>Influencer Name</p>
                    </div>
                </div>

                <div className='preProfilePosts__right__side'>
                    <Link>
                        <img className='preProfilePosts__right__img1' src={preProfileLikeIcon} alt="" />
                    </Link>
                    <Link>
                        <img className='preProfilePosts__right__img2' src={preProfileSaveIcon} alt="" />
                    </Link>
                </div>
            </div>

            <div className='preProfilePosts__wrapper__info'>
                <p className='preProfilePosts__wrapper__text'>This is a description of the channel I use for social media influencing brand promotions...This is a description of the channel I use for social media influencing brand promotions... This is a description of the channel I use for social media influencing brand promotions.</p>

                <ul className='preProfilePosts__wrapper__list'>
                    <li className='preProfilePosts__wrapper__item'>
                        <div className='preProfilePosts__wrappers'>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__number'>2k</p>
                            </Link>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__text'>Posts</p>
                          </Link>
                        </div>
                    </li>
                    <li className='preProfilePosts__wrapper__item'>
                        <div className='preProfilePosts__wrappers'>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__number'>1.5M</p>
                            </Link>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__text'>Subscribers</p>
                          </Link>
                        </div>
                    </li>
                    <li className='preProfilePosts__wrapper__item'>
                        <div className='preProfilePosts__wrappers'>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__number'>22M</p>
                            </Link>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__text'>Comments</p>
                          </Link>
                        </div>
                    </li>
                    <li className='preProfilePosts__wrapper__item'>
                        <div className='preProfilePosts__wrappers'>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__number'>4.8%</p>
                            </Link>
                            <Link className='preProfilePosts__item__link'>
                                <p className='preProfilePosts__item__text'>Engagement</p>
                          </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className='preProfilePosts__links__list__wrapper'>
            <ul className='preProfilePosts__links__list'>
                <li className='preProfilePosts__links__item'>
                    <Link className='preProfilePosts__links active__preProfilePosts__links'>Profile</Link>
                </li>
                <li className='preProfilePosts__links__item'>
                    <Link className='preProfilePosts__links'>Work History</Link>
                </li>
                <li className='preProfilePosts__links__item'>
                    <Link className='preProfilePosts__links'>Photos</Link>
                </li>
                <li className='preProfilePosts__links__item'>
                    <Link className='preProfilePosts__links'>Articals</Link>
                </li>
                <li className='preProfilePosts__links__item'>
                    <Link className='preProfilePosts__links'>Social Media</Link>
                </li>
                <li className='preProfilePosts__links__item'>
                    <Link className='preProfilePosts__links'>Equipment</Link>
                </li>
                <li className='preProfilePosts__links__item'>
                    <Link className='preProfilePosts__links'>Services</Link>
                </li>
            </ul>
        </div>
        <PrePostsLInks />
    </div>
  )
}

export default PreProfilePosts