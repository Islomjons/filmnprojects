import React from 'react'
import "./PostProductionProducerCards.css"
import postImg1 from "../../assets/images/postimg1.png"
import postImg2 from "../../assets/images/postimg2.png"
import postImg3 from "../../assets/images/postimg3.png"
import postImg4 from "../../assets/images/postimg4.png"
import postImg5 from "../../assets/images/postimg5.png"
import postImg6 from "../../assets/images/postimg6.png"
import postImg7 from "../../assets/images/postimg7.png"
import postImg8 from "../../assets/images/postimg8.png"
import postImg9 from "../../assets/images/postimg9.png"
import postProfileImg from "../../assets/images/postProfileImg.svg"
import postStar from "../../assets/images/star.svg"
import postProductionProducerCardsLocationIcon from "../../assets/images/storylinerCardslocation.svg";
import postProductionProducerCardsLocationIconLikeIcon from "../../assets/images/storylinercardslike.svg";
import postProductionProducerCardsLocationIconSaveIcon from "../../assets/images/storylinercardssave.svg"
import { Link } from 'react-router-dom'

const PostProductionProducerCards = () => {
  return (
    <div className='postProductionProducerCards'>
        <div className='postProductionProducerCards__container'>
            <ul className='postProductionProducerCards__list'>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg1} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg2} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg3} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg4} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg5} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg6} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg7} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg8} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
                <li className='postProductionProducerCards__item'>
                    <img className='postProductionProducerCards__img' src={postImg9} alt="" />
                    <div className='postProductionProducerCards__wrapper'>
                        <div className='postProductionProducerCards__left'>
                            <img className='postProductionProducerCards__profile__img' src={postProfileImg} alt="" />
                            <p className='postProductionProducerCards__profile__name'>John Doe</p>
                        </div>

                        <div className='postProductionProducerCards__right'>
                            <p className='postProductionProducerCards__right__num'>4.7</p>
                            <img className='postProductionProducerCards__right__star__icon' src={postStar} alt="" />
                        </div>
                    </div>
                    <div className='postProductionProducerCards__wrapper__info'>
                        <p className='postProductionProducerCards__info__text'>I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className='postProductionProducerCards__location__wrapper__info'>
                            <div className='postProductionProducerCards__location__wrapper'>
                                <img className='postProductionProducerCards__location__icon' src={postProductionProducerCardsLocationIcon} alt="" />
                                <p className='postProductionProducerCards__location__text'>UAE</p>
                            </div>

                            <div className='postProductionProducerCards__like__wrapper'>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon' src={postProductionProducerCardsLocationIconLikeIcon} alt="" />
                                </Link>
                                <Link>
                                    <img className='postProductionProducerCards__like__icon1' src={postProductionProducerCardsLocationIconSaveIcon} alt="" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default PostProductionProducerCards