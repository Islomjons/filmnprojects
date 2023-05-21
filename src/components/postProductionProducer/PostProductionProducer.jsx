import React from 'react'
import { Link } from 'react-router-dom'
import "./PostProductionProducer.css"
import postHamIcon from "../../assets/images/postham.svg"
import postDashicon from "../../assets/images/postDash.svg"
import PostProductionProducerCards from '../postProductionProducerCards/PostProductionProducerCards'

const PostProductionProducer = () => {
  return (
    <div className='postProductionProducer'>
        <div className='postProductionProducer__container'>
            <div className='postProductionProducer__wrapper'>
                <p className='postProductionProducer__text'>Music producer</p>
                <p className='postProductionProducer__number'>2934 results</p>
            </div>

            <div className='postProductionProducer__wrapper__side'>
                <ul className='postProductionProducer__list'>
                    <li className='postProductionProducer__item'>
                        <Link className='postProductionProducer__link'>Location</Link>
                    </li>
                    <li className='postProductionProducer__item'>
                        <Link className='postProductionProducer__link'>Price</Link>
                    </li>
                    <li className='postProductionProducer__item'>
                        <Link className='postProductionProducer__link'>Language</Link>
                    </li>
                    <li className='postProductionProducer__item'>
                        <Link className='postProductionProducer__link'>Likes</Link>
                    </li>
                </ul>

                <div className='postProductionProducer__right'>
                    <img className='postProductionProducer__img1' src={postHamIcon} alt="" />
                    <img className='postProductionProducer__img2' src={postDashicon} alt="" />
                    <select className='postProductionProducer__select'>
                        <option>Sort By</option>
                    </select>
                </div>
            </div>
            <PostProductionProducerCards />
        </div>
    </div>
  )
}

export default PostProductionProducer