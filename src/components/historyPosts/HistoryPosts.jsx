import React from 'react'
import "./HistoryPosts.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import HistoryComments from '../historyComments/HistoryComments'

const HistoryPosts = () => {
  return (
    <div className='historyPosts'>
        <div className='historyPosts__container'>
            <div className='historyPosts__wrapper'>
                <button className='historyPosts__btn'>
                    <img className='historyPosts__img' src={leftVectorIcon} alt="" />
                </button>
                <p className='historyPosts__text'>Go back</p>
            </div>
            <HistoryComments />
        </div>
    </div>
  )
}

export default HistoryPosts