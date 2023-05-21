import React from 'react'
import { Link } from 'react-router-dom'
import "./PostProduction.css"
import postPre from "../../assets/images/postpre.svg"
import postYoutube from "../../assets/images/postyoutube.svg"
import postPost from "../../assets/images/postpost.svg"
import postProductionHeaderLogo from "../../assets/images/postProductionHeaderLogo.svg"

const PostProduction = () => {
  return (
    <div className='postProductionHeader'>
        <div className='container'>
            <div className='post__production__container'>
                <Link className='post__production__logo__link'>
                    <img className='post__production__header__img' src={postProductionHeaderLogo} alt="" />
                </Link>

                <ul className='post__production__list'>
                    <li className='post__production__item'>
                        <Link className='post__production__link' to="/">
                            <img className='post__production__img active__post__production__text' src={postPre} alt="" />
                            <p className='post__production__text active__post__production__text'>Pre-production</p>
                        </Link>
                    </li>
                    <li className='post__production__item'>
                        <Link className='post__production__link' to="/productionheader">
                            <img className='post__production__img' src={postYoutube} alt="" />
                            <p className='post__production__text active__post__production__text'>Production</p>
                        </Link>
                    </li>
                    <li className='post__production__item active__post__production__item'>
                        <Link className='post__production__link'>
                            <img className='post__production__img' src={postPost} alt="" />
                            <p className='post__production__text'>Post-production</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PostProduction