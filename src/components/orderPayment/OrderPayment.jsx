import React from 'react'
import "./OrderPayment.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import paymentIcon from "../../assets/images/done.svg"

const OrderPayment = () => {
  return (
    <div className='payment'>
    <div className='payment__container'>
        <div className='payment__wrapper'>
            <button className='payment__btn'>
                <img className='payment__img' src={leftVectorIcon} alt="" />
            </button>
            <p className='payment__text'>Go back</p>
        </div>

        <div className='payment__bottom__wrapper'>
           <img className='payment__bottom__img' src={paymentIcon} alt="" />
            <h2 className='payment__bottom__heading'>Payment completed.</h2>
            <p className='payment__bottom__text'>Service order #47693 is waiting for influencer to reply</p>
            <button className='payment__bottom__btn'>View Order</button>
        </div>
    </div>
</div>
  )
}

export default OrderPayment