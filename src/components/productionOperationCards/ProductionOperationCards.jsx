import React from 'react'
import "./ProductionOperationCards.css"
import { Link } from 'react-router-dom'
import operatorcardsLocationIcon from "../../assets/images/storylinerCardslocation.svg";
import operatorcardsLikeIcon from "../../assets/images/storylinercardslike.svg"
import operatorcardsSaveIcon from "../../assets/images/storylinercardssave.svg"
import operatorcardsStarIcon from "../../assets/images/star.svg"
import operatorcardsProfileIcon from "../../assets/images/productionOperationImgProfile.svg"
import productionOperationCardsImg1 from "../../assets/images/productioncardsimg1.png"
import productionOperationCardsImg2 from "../../assets/images/productionOperationCardsImg2.png"
import productionOperationCardsImg3 from "../../assets/images/productionOperationCardsImg3.png"
import productionOperationCardsImg4 from "../../assets/images/productionOperationCardsImg4.png"
import productionOperationCardsImg5 from "../../assets/images/productionOperationCardsImg5.png"
import productionOperationCardsImg6 from "../../assets/images/productionOperationCardsImg6.png"
import productionOperationCardsImg7 from "../../assets/images/productionOperationCardsImg7.png"
import productionOperationCardsImg9 from "../../assets/images/productionOperationCardsImg9.png"
import productionOperationCardsImg10 from "../../assets/images/productionOperationCardsImg10.png"
import productionOperationCardsImg11 from "../../assets/images/productionOperationCardsImg11.png"
import productionOperationCardsImg12 from "../../assets/images/productionOperationCardsImg12.png"
import productionOperationCardsImg13 from "../../assets/images/productionOperationCardsImg13.png"
import productionOperationCardsImg14 from "../../assets/images/productionOperationCardsImg14.png"
import productionOperationCardsImg15 from "../../assets/images/productionOperationCardsImg15.png"
import productionOperationCardsImg16 from "../../assets/images/productionOperationCardsImg16.png"
import productionOperationCardsImg17 from "../../assets/images/productionOperationCardsImg17.png"
import productionOperationCardsImg18 from "../../assets/images/productionOperationCardsImg18.png"

const ProductionOperationCards = () => {
  return (
    <div className='productionOperationCards'>
        <div className='productionOperationCards__container'>
            <ul className='productionOperationCards__list'>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg1} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg2} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg3} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg4} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg5} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg6} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg7} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg9} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg10} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg11} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg12} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg13} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg14} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg15} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg16} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg16} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg17} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="productionOperationCards__item">
                    <img className="productionOperationCards__img" src={productionOperationCardsImg18} alt="" />
                    <div className="productionOperationCards__wrapper">
                        <div className="productionOperationCards__info">
                            <img className="productionOperationCards__profile__img" src={operatorcardsProfileIcon} alt="" />
                            <p className="productionOperationCards__profile__name">John Doe</p>

                            <div className="productionOperationCards__rating__wrapper">
                                <p className="productionOperationCards__rating__number">4.7</p>
                                <img className="productionOperationCards__rating__star" src={operatorcardsStarIcon} alt="" />
                            </div>
                        </div>
                        <p className="productionOperationCards__text">I will create lorem ipsum dolor sit amet, consectetur adipiscing elit lacinia praesent tempus velit</p>

                        <div className="productionOperationCards__location__wrapper">
                            <div className="productionOperationCards__location">
                                <img className="productionOperationCards__location__icon" src={operatorcardsLocationIcon} alt="" />
                                <p className="productionOperationCards__location__text">UAE</p>
                            </div>

                            <div className="productionOperationCards__like__wrapper">
                                <Link>
                                    <img className="productionOperationCards__like" src={operatorcardsLikeIcon} alt="" />
                                </Link>
                                <Link>
                                  <img className="productionOperationCards__save" src={operatorcardsSaveIcon} alt="" />
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

export default ProductionOperationCards