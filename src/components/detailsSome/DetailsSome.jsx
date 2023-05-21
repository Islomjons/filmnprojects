import React from 'react'
import "./DetailsSome.css"
import { Link } from 'react-router-dom'
import leftVectorIcon from "../../assets/images/leftVector.svg"
import playIcon from "../../assets/images/play.svg"
import DetailsTitle from '../detailsTitle/DetailsTitle'

const DetailsSome = () => {
  return (
    <div className='socialmedia'>
        <div className='socialmedia__container'>
            <div className='socialmedia__wrapper'>
                <button className='socialmedia__btn'>
                    <img className='socialmedia__img' src={leftVectorIcon} alt="" />
                </button>
                <p className='socialmedia__text'>Go back</p>
            </div>
            
            <div className='socialmedia__list__wrapper'>
                <span className='socialmedia__border'></span>
                <ul className='socialmedia__list'>
                    <li className='socialmedia__item'>
                        <Link className='socialmedia__link active__socialmedia__link'>Video details</Link>
                    </li>
                    <li className='socialmedia__item'>
                        <Link className='socialmedia__link'>Analytics</Link>
                    </li>
                    <li className='socialmedia__item'>
                        <Link className='socialmedia__link'>Social Media</Link>
                    </li>
                </ul>
            </div>

            <div className='socialmedia__play'>
                <Link>
                     <img className='socialmedia__play__img' src={playIcon} alt="" />
                </Link>
            </div>

            <DetailsTitle />
        </div>
    </div>
  )
}

export default DetailsSome