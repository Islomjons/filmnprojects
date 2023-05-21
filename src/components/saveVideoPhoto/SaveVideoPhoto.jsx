import React from 'react'
import "./SaveVideoPhoto.css"
import { Link } from 'react-router-dom'
import saveVideogsIcon1 from "../../assets/images/dashIcon.svg"
import saveVideoLikeIcon from "../../assets/images/dashLike.svg"
import saveVideoSaveIcon from "../../assets/images/dashSave.svg"
import saveVideoImg from "../../assets/images/savevideo.png"
import saveVideoIcon from "../../assets/images/videoicon.svg"
import saveVideoYoutubeIcon from "../../assets/images/videoyoutubeicon.svg"

const SaveVideoPhoto = () => {
  return (
    <div className='postsprofile'>
        <div className='postsprofile__container'>
            <div className="postsprofile__top__wrapper__side">
                <div className='postsprofile__top__left'>
                    <img className='postsprofile__top__img' src={saveVideogsIcon1} alt="" />

                    <div className='postsprofile__top__left__wrapper'>
                        <p className='postsprofile__top__left__text'>LabelCom</p>
                        <p className='postsprofile__top__left__text1'>Influencer Name</p>

                        <ul className='postsprofile__top__list'>
                            <li className='postsprofile__top__item'>
                                <div className='postsprofile__top__item__wrapper'>
                                    <Link className='postsprofile__top__item__number'>2k</Link>
                                    <Link className='postsprofile__top__item__text'>Posts</Link>
                                </div>
                            </li>
                            <li className='postsprofile__top__item'>
                                <div className='postsprofile__top__item__wrapper'>
                                    <Link className='postsprofile__top__item__number'>1.5M</Link>
                                    <Link className='postsprofile__top__item__text'>Subscribers</Link>
                                </div>
                            </li>
                            <li className='postsprofile__top__item'>
                                <div className='postsprofile__top__item__wrapper'>
                                    <Link className='postsprofile__top__item__number'>22M</Link>
                                    <Link className='postsprofile__top__item__text'>Comments</Link>
                                </div>
                            </li>
                            <li className='postsprofile__top__item'>
                                <div className='postsprofile__top__item__wrapper'>
                                    <Link className='postsprofile__top__item__number'>4.8%</Link>
                                    <Link className='postsprofile__top__item__text'>Engagement</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='postsprofile__top__right'>
                    <p className='postsprofile__top__right__number'>4.7</p>
                    <p className='postsprofile__top__right__text'>Rating</p>
                </div>
            </div>

            <div className='postsprofile__bottom__wrapper__side'>
                <div className='postsprofile__bottom__left__side'>
                    <p className='postsprofile__bottom__left__text'>Ultrices fusce nisl sed nibh arcu ullamcorper convallis. Dui nibh turpis varius porta viverra maecenas proin. Amet, urna, sed quis nibh ac curabitur commodo sapien. Fames turpis quam arcu enim massa.</p>
                </div>
                <div className='postsprofile__bottom__right'>
                    <Link>
                      <img className='postsprofile__bottom__right__img' src={saveVideoLikeIcon} alt="" />
                    </Link>
                    <Link>
                      <img className='postsprofile__bottom__right__img1' src={saveVideoSaveIcon} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <div className='postsprofile__bottom__list__wrapper'>
            <ul className='postsprofile__bottom__list'>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link'>Profile</Link>
                </li>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link'>Work History</Link>
                </li>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link'>Photos</Link>
                </li>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link active__postsprofile__bottom__link'>Videos</Link>
                </li>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link'>Articals</Link>
                </li>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link'>Social Media</Link>
                </li>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link'>Equipment</Link>
                </li>
                <li className='postsprofile__bottom__item'>
                    <Link className='postsprofile__bottom__link'>Services</Link>
                </li>
            </ul>
        </div>

        <ul className='postsprofile__cards__list'>
            <li className='postsprofile__cards__item'>
                <img className='postsprofile__cards__img' src={saveVideoImg} alt="" />

                  <div className='postsprofile__cards__list__wrapper'>
                        <img className='postsprofile__cards__icon' src={saveVideoIcon} alt="" />
                    <div className='postsprofile__cards__list__info'>
                        <p className='postsprofile__cards__text'>Video Title</p>
                        <p className='postsprofile__cards__number'>293.289 views</p>
                    </div>
                </div>
            </li>
            <li className='postsprofile__cards__item'>
                <img className='postsprofile__cards__img' src={saveVideoImg} alt="" />

                  <div className='postsprofile__cards__list__wrapper'>
                        <img className='postsprofile__cards__icon' src={saveVideoYoutubeIcon} alt="" />
                    <div className='postsprofile__cards__list__info'>
                        <p className='postsprofile__cards__text'>Video Title</p>
                        <p className='postsprofile__cards__number'>293.289 views</p>
                    </div>
                </div>
            </li>
            <li className='postsprofile__cards__item'>
                <img className='postsprofile__cards__img' src={saveVideoImg} alt="" />

                  <div className='postsprofile__cards__list__wrapper'>
                        <img className='postsprofile__cards__icon' src={saveVideoYoutubeIcon} alt="" />
                    <div className='postsprofile__cards__list__info'>
                        <p className='postsprofile__cards__text'>Video Title</p>
                        <p className='postsprofile__cards__number'>293.289 views</p>
                    </div>
                </div>
            </li>
            <li className='postsprofile__cards__item'>
                <img className='postsprofile__cards__img' src={saveVideoImg} alt="" />
            </li>
            <li className='postsprofile__cards__item'>
                <img className='postsprofile__cards__img' src={saveVideoImg} alt="" />
            </li>
            <li className='postsprofile__cards__item'>
                <img className='postsprofile__cards__img' src={saveVideoImg} alt="" />
            </li>
        </ul>
    </div>
  )
}

export default SaveVideoPhoto