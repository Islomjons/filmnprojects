import React from 'react'
import "./ServiceCards.css"
import CardsImg1 from "../../assets/images/img1.png"
import starIcon from "../../assets/images/star.svg"
import plusIcon from "../../assets/images/plus.svg"
import imgIcon1 from "../../assets/images/img1.svg"
import imgIcon2 from "../../assets/images/img2.svg"
import imgIcon3 from "../../assets/images/img3.svg"
import imgIcon4 from "../../assets/images/img4.svg"
import imgIcon5 from "../../assets/images/img5.svg"
import imgIcon6 from "../../assets/images/img6.svg"
import ServiceBottomCards from '../serviceBottomCards/ServiceBottomCards'

const ServiceCards = () => {
  return (
<div className='cards'>
    <div className='cards__container'>
        <div className='cards__wrapper'>
            <div className='cards__left'>
                <img className='cards__img' src={CardsImg1} alt="" />

                <div className='cards__left__wrapper'>
                    <div className='cards__left__heading__wrapper'>
                         <h3 className='cards__left__heading'>Service</h3>
                         <img className='cards__right__img' src={plusIcon} alt="" />
                    </div>

                    <div className='cards__left__star__wrapper'>
                        <p className='cards__left__star__text'>AED 450</p>
                        <div className='cards__left__info'>
                            <p className='cards__left__info__text'>4.7</p>
                            <img className='cards__left__info__img' src={starIcon} alt="" />
                        </div>
                    </div>
                    <p className='cards__text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor suspendisse tortor imperdiet et in magna. Orci enim nam nec dictum mauris cursus egestas sit. Aenean malesuada sed dignissim urna non duis lorem at facilisi. Tortor, augue cras purus scelerisque malesuada donec malesuada morbi. Tincidunt feugiat.</p>
                </div>
            </div>
        </div>

        <div className='cards__bottom__wrapper'>
            <ul className='cards__bottom__list'>
                <li className='cards__bottom__item'>
                    <img className='cards__bottom__img' src={imgIcon1} alt="" />
                    <p className='cards__bottom__text'>Storyliner</p>
                </li>
                <li className='cards__bottom__item'>
                    <img className='cards__bottom__img' src={imgIcon2} alt="" />
                    <p className='cards__bottom__text'>Storyliner</p>
                </li>
                <li className='cards__bottom__item'>
                    <img className='cards__bottom__img' src={imgIcon3} alt="" />
                    <p className='cards__bottom__text'>Storyliner</p>
                </li>
                <li className='cards__bottom__item'>
                    <img className='cards__bottom__img' src={imgIcon4} alt="" />
                    <p className='cards__bottom__text'>Storyliner</p>
                </li>
                <li className='cards__bottom__item'>
                    <img className='cards__bottom__img' src={imgIcon5} alt="" />
                    <p className='cards__bottom__text'>Storyliner</p>
                </li>
                <li className='cards__bottom__item'>
                    <img className='cards__bottom__img' src={imgIcon6} alt="" />
                    <p className='cards__bottom__text'>Storyliner</p>
                </li>
            </ul>

            <div className='cards__bottom__right'>
                <button className='cards__bottom__right__btn'>View details</button>
            </div>
        </div>
    </div>
    <ServiceBottomCards />
</div>
  )
}

export default ServiceCards