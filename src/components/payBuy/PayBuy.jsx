import React from 'react'
import "./PayBuy.css"
import buyImg from "../../assets/images/buyImg.png"
import buy1 from "../../assets/images/buy1.png"
import buy2 from "../../assets/images/buy2.png"
import buy3 from "../../assets/images/buy3.png"
import buy4 from "../../assets/images/buy4.png"
import buy5 from "../../assets/images/buy5.png"
import buy6 from "../../assets/images/buy6.png"
import buy7 from "../../assets/images/buy7.png"
import buy8 from "../../assets/images/buy8.png"
import buyProfileImg from "../../assets/images/buyProfile.png"

const PayBuy = () => {
  return (
    <div className='buy'>
    <div className='buy__wrapper'>
      <div className='buy__container'>
          <img className='buy__img' src={buyImg} alt="" />

          <ul className='buy__list'>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy1} alt="" />
              </li>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy2} alt="" />
              </li>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy3} alt="" />
              </li>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy4} alt="" />
              </li>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy5} alt="" />
              </li>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy6} alt="" />
              </li>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy7} alt="" />
              </li>
              <li className='buy__item'>
                  <img className='buy__img1' src={buy8} alt="" />
              </li>
          </ul>
      </div>

      <div className='buy__btn__wrapper'>
          <button className='buy__btn'>Buy</button>
      </div>

      <div className='buy__bottom__wrapper'>
          <h3 className='buy__bottom__heading'>seller</h3>

          <div className='buy__bottom__wrapper__info'>
              <div className='buy__bottom__img__wrapper'>
                  <img className='buy__bottom__img' src={buyProfileImg} alt="" />
                  <p className='buy__bottom__text'>Darrell Steward</p>
              </div>
          </div>
          <button className='buy__bottom__btns'>Chat with seller</button>
      </div>
    </div>
</div>
  )
}

export default PayBuy