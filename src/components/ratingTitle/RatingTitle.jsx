import React from 'react'
import "./RatingTitle.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import RatingLike from '../ratingLike/RatingLike'

const RatingTitle = () => {
  return (
    <div className='goback'>
        <div className='goback__container'>
            <div className='goback__wrapper'>
                <div className='goback__left__side'>
                    <button className='goback__left__btn'>
                        <img className='goback__left__icon' src={leftVectorIcon} alt="" />
                    </button>
                    <p className='goback__left__text'>Go back</p>
                    <p className='goback__left__text1'>Storyliners</p>
                </div>

                <div className='goback__right__side'>
                    <select className='goback__select'>
                        <option>Sort By</option>
                    </select>
                </div>
            </div>
            <RatingLike />
        </div>
    </div>
  )
}

export default RatingTitle