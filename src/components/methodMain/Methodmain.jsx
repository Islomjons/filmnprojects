import React from 'react'
import "./MethodMain.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
// import leftIcon from "../../assets/images/leftIcon.svg"
import visaImg from "../../assets/images/visa.png"
import masterImg from "../../assets/images/master.png"
import unionImg from "../../assets/images/union.png"

const Methodmain = () => {
  return (
    <div className='methodMain'>
        <div className='method__container'>
            <div className='method__wrapper'>
                <button className='methdo__btn'>
                    <img className='method__btn__img' src={leftVectorIcon} alt="" />
                </button>
                <p className='methdo__text'>Go back</p>
            </div>

            <div className='method__wrapper__form'>
                <h3 className='method__heading'>Choose payment method</h3>
                <p className='method__text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus aliquam commodo semper sed neque, arcu.</p>
                <form className='method__form'>
                    <label className='method__label' htmlFor="">
                         <input className='method__input' type="radio" value="Capsule"/>
                         <span className='methdo__span'>
                            <img className='methdo__span__img' src={visaImg} alt="" />
                            <p className='methdo__span__text'>****  ****  ****  ****  7948</p>
                         </span>
                    </label>
                    <label className='method__label' htmlFor="">
                         <input className='method__input' type="radio" value="Capsule"/>
                         <span className='methdo__span'>
                            <img className='methdo__span__img' src={masterImg} alt="" />
                            <p className='methdo__span__text'>****  ****  ****  **** 5477</p>
                         </span>
                    </label>
                    <label className='method__label' htmlFor="">
                         <input className='method__input' type="radio" value="Capsule"/>
                         <span className='methdo__span'>
                            <img className='methdo__span__img' src={unionImg} alt="" />
                            <p className='methdo__span__text'>PayPal</p>
                         </span>
                    </label>

                    <h4 className='methdo__form__heading'>Order Note</h4>
                    <textarea className='methdo__form__textare' placeholder='Give the influencer instructions or note... Optional'></textarea>

                    <div className='methdo__btn__wrapper'>
                        <button className='methdo__btn1'>Pay</button>
                        <button className='methdo__btn2'>Add new payment method</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Methodmain