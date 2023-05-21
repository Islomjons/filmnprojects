import React from 'react'
import "./StorylinerCards.css"
import StorylinerCardsImage from "../../assets/images/StorylinerCardsImg.png"
import StorylinerCardsImage1 from "../../assets/images/StorylinerCardsImg1.png"
import StorylinerCardsImage2 from "../../assets/images/StorylinerCardsImg2.png"
import StorylinerCardsImage3 from "../../assets/images/StorylinerCardsImg3.png"
import StorylinerCardsImage4 from "../../assets/images/StorylinerCardsImg4.png"
import StorylinerCardsImage5 from "../../assets/images/StorylinerCardsImg5.png"
import StorylinerCardsImage6 from "../../assets/images/StorylinerCardsImg6.png"
import StorylinerCardsImage7 from "../../assets/images/StorylinerCardsImg7.png"
import StorylinerCardsImage8 from "../../assets/images/StorylinerCardsImg8.png"
import StorylinerCardsProfile from "../../assets/images/person.svg"
import storylinerStarIcon from "../../assets/images/star.svg"
import storylinerCardsLocationIcon from "../../assets/images/storylinerCardslocation.svg";
import storylinerCardsLikeIcon from "../../assets/images/storylinercardslike.svg";
import storylinerCardsSaveIcon from "../../assets/images/storylinercardssave.svg"
import { Link } from 'react-router-dom'

const StorylinerCards = () => {
  return (
    <div className='storylinerCards'>
        <div className='storylinerCards__container'>
            <ul className='storylinerCards__list'>
               <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage1} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage2} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage3} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage4} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage5} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage6} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage7} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="stroylinerCards__item">
                    <img className="storylinerCardsImg" src={StorylinerCardsImage8} alt="" />
                    <div className="storylinercards__wrapper">
                        <div className="storylinerCards__info">
                            <img className="storylinerCards__person__img" src={StorylinerCardsProfile} alt="" />
                            <p className="storylinerCards__person__name">John Doe</p>

                            <div className="storylinerCards__rating__wrapper">
                                <p className="storylinerCards__rating__number">4.7</p>
                                <img className="storylinerCards__rating__star" src={storylinerStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="storylinerCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="storylinerCards__location__wrapper">
                            <div className="storylinerCards__location">
                                <img className="storylinerCards__location__icon" src={storylinerCardsLocationIcon} alt="" />
                                <p className="storylinerCards__location__text">UAE</p>
                            </div>

                            <div className="storylinerCards__like__wrapper">
                                <Link>
                                    <img className="storylinerCards__like" src={storylinerCardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="storylinerCards__save" src={storylinerCardsSaveIcon} alt="" />
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

export default StorylinerCards