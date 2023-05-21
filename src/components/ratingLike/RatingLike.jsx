import React from 'react'
import "./RatingLike.css"
import { Link } from 'react-router-dom'
import RatingsIcon1 from "../../assets/images/dashIcon.svg"
import RatingsLikeIcon from "../../assets/images/dashLike.svg"
import RatingsSaveIcon from "../../assets/images/dashSave.svg"
import smallLikeIcon from "../../assets/images/smallLike.svg"
import smallEyeIcon from "../../assets/images/eye.svg"
import ratingImg1 from "../../assets/images/ratingimg1.png"
import ratingImg2 from "../../assets/images/ratingimg2.png"
import ratingImg3 from "../../assets/images/ratingimg3.png"

const RatingLike = () => {
  return (
<div className='like'>
    <div className='like__container'>
        <div className='like__wrapper'>
            <div className='like__left__side'>
                <img className='like__left__img' src={RatingsIcon1} alt="" />

                <div className='like__left__side__wrapper'>
                    <p className='like__left__side__name'>LabelCom</p>
                    <p className='like__left__side__text'>Influencer Name</p>

                    <ul className='like__left__side__list'>
                        <li className='like__left__side__item'>
                            <div className='like__left__side__item__wrapper'>
                                <Link className='like__left__side__link'>2k</Link>
                                <Link className='like__left__side__link1'>Posts</Link>
                            </div>
                        </li>
                        <li className='like__left__side__item'>
                            <div className='like__left__side__item__wrapper'>
                                <Link className='like__left__side__link'>1.5M</Link>
                                <Link className='like__left__side__link1'>Subscribers</Link>
                            </div>
                        </li>
                        <li className='like__left__side__item'>
                            <div className='like__left__side__item__wrapper'>
                                <Link className='like__left__side__link'>22M</Link>
                                <Link className='like__left__side__link1'>Comments</Link>
                            </div>
                        </li>
                        <li className='like__left__side__item'>
                            <div className='like__left__side__item__wrapper'>
                                <Link className='like__left__side__link'>4.8%</Link>
                                <Link className='like__left__side__link1'>Engagement</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='like__right__side'>
                <p className='like__right__side__text'>4.7</p>
                <p className='like__right__side__text1'>Rating</p>
            </div>
        </div>

        <div className='like__bottom__wrapper'>
            <div className='like__bottom__left__side'>
                <p className='like__bottom__left__text'>Ultrices fusce nisl sed nibh arcu ullamcorper convallis. Dui nibh turpis varius porta viverra maecenas proin. Amet, urna, sed quis nibh ac curabitur commodo sapien. Fames turpis quam arcu enim massa.</p>
            </div>
            <div className='like__bottom__right__side'>
                <Link>
                  <img className='like__bottom__right__img' src={RatingsLikeIcon} alt="" />
                </Link>
                <Link>
                  <img className='like__bottom__right__img1' src={RatingsSaveIcon} alt="" />
                </Link>
            </div>
        </div>
    </div>
    <div className='like__bottom__list__wrapper'>
        <ul className='like__bottom__list'>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link'>Profile</Link>
            </li>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link'>Work History</Link>
            </li>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link'>Photos</Link>
            </li>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link'>Videos</Link>
            </li>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link active__like__bottom__item__link'>Articals</Link>
            </li>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link'>Social Media</Link>
            </li>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link'>Equipment</Link>
            </li>
            <li className='like__bottom__item'>
                <Link className='like__bottom__item__link'>Services</Link>
            </li>
        </ul>
    </div>

    <ul className='like__bottom__card__list'>
        <li className='like__bottom__card__item'>
            <img className='like__bottom__card__img' src={ratingImg1} alt="" />

            <div className='like__bottom__card__wrapper'>
                <h3 className='like__bottom__card__heading'>Title of the article</h3>
                <p className='like__bottom__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor suspendisse tortor imperdiet et in magna. Orci enim nam nec dictum.Tortor suspendisse tortor.</p>
            </div>
            <div className='like__bottom__card__wrapper__info'>
                <div className='like__bottom__card__wrapper__date'>
                   <p className='like__bottom__card__wrapper__info__date'>21.4.2021</p>

                  <div className='like__bottom__card__wrapper__info__wrappers'>
                    <div className='like__bottom__card__wrapper__info__like'>
                          <Link>
                            <img className='like__bottom__card__wrapper__icon' src={smallLikeIcon} alt="" />
                          </Link>
                          <p className='like__bottom__card__wrapper__text'>2,9k</p>
                    </div>

                    <div className='like__bottom__card__wrapper__info__eye'>
                          <Link>
                            <img className='like__bottom__card__wrapper__icon1' src={smallEyeIcon} alt="" />
                          </Link>
                          <p className='like__bottom__card__wrapper__text1'>2,9k</p>
                    </div>
                  </div>
                </div>
            </div>
        </li>
        <li className='like__bottom__card__item'>
            <img className='like__bottom__card__img' src={ratingImg2} alt="" />

            <div className='like__bottom__card__wrapper'>
                <h3 className='like__bottom__card__heading'>Title of the article</h3>
                <p className='like__bottom__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor suspendisse tortor imperdiet et in magna. Orci enim nam nec dictum.Tortor suspendisse tortor.</p>
            </div>
            <div className='like__bottom__card__wrapper__info'>
                <div className='like__bottom__card__wrapper__date'>
                   <p className='like__bottom__card__wrapper__info__date'>21.4.2021</p>

                  <div className='like__bottom__card__wrapper__info__wrappers'>
                    <div className='like__bottom__card__wrapper__info__like'>
                          <Link>
                            <img className='like__bottom__card__wrapper__icon' src={smallLikeIcon} alt="" />
                          </Link>
                          <p className='like__bottom__card__wrapper__text'>2,9k</p>
                    </div>

                    <div className='like__bottom__card__wrapper__info__eye'>
                          <Link>
                            <img className='like__bottom__card__wrapper__icon1' src={smallEyeIcon} alt="" />
                          </Link>
                          <p className='like__bottom__card__wrapper__text1'>2,9k</p>
                    </div>
                  </div>
                </div>
            </div>
        </li>
        <li className='like__bottom__card__item'>
            <img className='like__bottom__card__img' src={ratingImg3} alt="" />

            <div className='like__bottom__card__wrapper'>
                <h3 className='like__bottom__card__heading'>Title of the article</h3>
                <p className='like__bottom__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor suspendisse tortor imperdiet et in magna. Orci enim nam nec dictum.Tortor suspendisse tortor.</p>
            </div>
            <div className='like__bottom__card__wrapper__info'>
                <div className='like__bottom__card__wrapper__date'>
                   <p className='like__bottom__card__wrapper__info__date'>21.4.2021</p>

                  <div className='like__bottom__card__wrapper__info__wrappers'>
                    <div className='like__bottom__card__wrapper__info__like'>
                          <Link>
                            <img className='like__bottom__card__wrapper__icon' src={smallLikeIcon} alt="" />
                          </Link>
                          <p className='like__bottom__card__wrapper__text'>2,9k</p>
                    </div>

                    <div className='like__bottom__card__wrapper__info__eye'>
                          <Link>
                            <img className='like__bottom__card__wrapper__icon1' src={smallEyeIcon} alt="" />
                          </Link>
                          <p className='like__bottom__card__wrapper__text1'>2,9k</p>
                    </div>
                  </div>
                </div>
            </div>
        </li>
    </ul>
 </div>
  )
}

export default RatingLike