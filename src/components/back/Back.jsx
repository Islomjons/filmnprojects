import React from 'react'
import "./Back.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import PreProfilePosts from '../preProfilePosts/PreProfilePosts'

const Back = () => {
  return (
    <div className='back'>
        <div className='back__container'>
            <div className='back__wrapper'>
                <button className='back__btn'>
                    <img className='back__btn__img' src={leftVectorIcon} alt="" />
                </button>
                <p className='back__text'>Go back</p>
            </div>
            <PreProfilePosts />
        </div>
    </div>
  )
}

export default Back