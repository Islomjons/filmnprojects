import React from 'react'
import { Link } from 'react-router-dom'
import "./DetailsTitle.css"
import eyesIcon from "../../assets/images/eyes.svg"
import likesIcon from "../../assets/images/likes.svg"
import dislikesIcon from "../../assets/images/dislikes.svg" 
import messegeIcon from "../../assets/images/messege.svg"
import DetailsComments from '../detailsComments/DetailsComments'

const DetailsTitle = () => {
  return (
    <div className='details__title'>
        <div className='details__container'>
            <h3 className='details__heading'>Some Title of video</h3>
            <ul className='details__list'>
                <li className='details__item'>
                    <Link>
                        <img className='details__icon__img' src={eyesIcon} alt="" />
                    </Link>
                    <p className='details__text'>32 093</p>
                </li>
                <li className='details__item'>
                    <Link>
                        <img className='details__icon__img' src={likesIcon} alt="" />
                    </Link>
                    <p className='details__text'>1 530</p>
                </li>
                <li className='details__item'>
                    <Link>
                        <img className='details__icon__img' src={dislikesIcon} alt="" />
                    </Link>
                    <p className='details__text'>159</p>
                </li>
                <li className='details__item'>
                    <Link>
                        <img className='details__icon__img' src={messegeIcon} alt="" />
                    </Link>
                    <p className='details__text'>345</p>
                </li>
            </ul>
            <p className='details__text1'>Some descriptions lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor maecenas enim, varius egestas massa id varius maecenas odio. Tortor donec nibh ullamcorper pretium. Purus, at imperdiet amet semper dolor. Quis malesuada adipiscing ut enim sit sit orci bibendum in. Ornare amet aliquam nunc, a, in scelerisque euismod duis. Pretium pharetra, enim blandit velit eu scelerisque massa cursus nisi. Tortor tellus hendrerit egestas tincidunt pellentesque risus ultricies euismod. </p>
        </div>
        <DetailsComments />
    </div>
  )
}

export default DetailsTitle