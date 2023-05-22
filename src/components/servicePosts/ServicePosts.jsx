import React from 'react'
import "./ServicePosts.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import ServiceComments from '../serviceComments/ServiceComments'

const ServicePosts = () => {
  return (
    <div className='posts'>
    <div className='posts__container'>
        <div className='posts__wrapper'>
            <button className='posts__btn'>
                <img className='post__icon' src={leftVectorIcon} alt="" />
            </button>
            <p className='posts__text'>Go back</p>
            <p className='posts__text1'>Storyliners</p>
        </div>
        <ServiceComments />
    </div>
</div>
  )
}

export default ServicePosts