import React from 'react'
import "./PaySummary.css"
import iconImg10 from "../../assets/images/icon10.svg"
import iconImg11 from "../../assets/images/icon11.svg"
import iconImg12 from "../../assets/images/icon12.svg"
import iconImg13 from "../../assets/images/icon13.svg"
import iconImg14 from "../../assets/images/icon14.svg"
import PaySummaryBottom from '../paySummaryBottom/PaySummaryBottom'
import PayBuy from '../payBuy/PayBuy'

const PaySummary = () => {
  return (
    <div className='summiry'>
    <div className='summiry__wrapper'>
        <div className='summiry__container'>
            <h3 className='summity__heading'>quick summary</h3>
            <ul className='summiry__list'>
                <li className='summiry__item'>
                    <img className='summiry__img' src={iconImg10} alt="" />
                    <div className='summiry__item__wrapper'>
                        <p className='summiry__item__text'>Duration</p>
                        <p className='summiry__item__text1'>15 days</p>
                    </div>
                </li>
                <li className='summiry__item'>
                    <img className='summiry__img' src={iconImg11} alt="" />
                    <div className='summiry__item__wrapper'>
                        <p className='summiry__item__text'>Location</p>
                        <p className='summiry__item__text1'>UAE, Spain</p>
                    </div>
                </li>
                <li className='summiry__item'>
                    <img className='summiry__img' src={iconImg12} alt="" />
                    <div className='summiry__item__wrapper'>
                        <p className='summiry__item__text'>Language</p>
                        <p className='summiry__item__text1'>English</p>
                    </div>
                </li>
                <li className='summiry__item'>
                    <img className='summiry__img' src={iconImg13} alt="" />
                    <div className='summiry__item__wrapper'>
                        <p className='summiry__item__text'>Category</p>
                        <p className='summiry__item__text1'>Web development</p>
                    </div>
                </li>
                <li className='summiry__item'>
                    <img className='summiry__img' src={iconImg14} alt="" />
                    <div className='summiry__item__wrapper'>
                        <p className='summiry__item__text'>Price</p>
                        <p className='summiry__item__text1'>450 AED</p>
                    </div>
                </li>
            </ul>
        </div>
        <PaySummaryBottom />
    </div>
     <PayBuy />
</div>
  )
}

export default PaySummary