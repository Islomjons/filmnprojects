import React from 'react'
import "./PayName.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import PaySummary from '../paySummary/PaySummary'

const PayName = () => {
  return (
<div className='name'>
    <div className='name__container'>
        <div className='name__wrapper'>
            <button className='name__btn'>
                <img className='name__img' src={leftVectorIcon} alt="" />
            </button>
            <p className='name__text'>Go back</p>
            <p className='name__text1'>Service name</p>
            <button className='name__btn1'>Service </button>
        </div>
        <PaySummary />
    </div>
</div>
  )
}

export default PayName