import React from 'react'
import "./HistoryComments.css"
import { Link } from 'react-router-dom';
import commentsIcon from  "../../assets/images/comments.svg"
import  CommentsLikeIcon from "../../assets/images/storylinercardslike.svg";
import CommentsSaveIcon from "../../assets/images/storylinercardssave.svg"
import historyImg1 from "../../assets/images/history1.png"
import historyImg2 from "../../assets/images/history2.png"
import historyImg3 from "../../assets/images/history3.png"

const HistoryComments = () => {
  return (
    <div className='historyComments'>
        <div className='historyComments__container'>
            <div className='historyComments__wrapper__side'>
                <div className='historyComments__left__side'>
                    <img className='historyComments__left__img' src={commentsIcon} alt="" />
                    <div className='historyComments__left__side__info'>
                        <p className='historyComments__left__text'>LabelCom</p>
                        <p className='historyComments__left__text1'>Seller Name</p>
                    </div>
                </div>
                <div className='historyComments__right__side'>
                    <Link>
                       <img className='historyComments__right__img1' src={CommentsLikeIcon} alt="" />
                    </Link>
                    <Link>
                       <img className='historyComments__right__img2' src={CommentsSaveIcon} alt="" />
                    </Link>
                </div>
            </div>
            <div className='historyComments__bottom__side'>
                <p className='historyComments__bottom__text'>This is a description of the channel I use for social media influencing brand promotions...This is a description of the channel I use for social media influencing brand promotions... This is a description of the channel I use for social media influencing brand promotions.</p>

                <ul className='historyComments__bottom__list'>
                    <li className='historyComments__bottom__item'>
                        <div className='historyComments__bottom__wrapper'>
                            <Link className='historyComments__bottom__link1'>2k</Link>
                            <Link className='historyComments__bottom__link2'>Posts</Link>
                        </div>
                    </li>
                    <li className='historyComments__bottom__item'>
                        <div className='historyComments__bottom__wrapper'>
                            <Link className='historyComments__bottom__link1'>1.5M</Link>
                            <Link className='historyComments__bottom__link2'>Subscribers</Link>
                        </div>
                    </li>
                    <li className='historyComments__bottom__item'>
                        <div className='historyComments__bottom__wrapper'>
                            <Link className='historyComments__bottom__link1'>22M</Link>
                            <Link className='historyComments__bottom__link2'>Comments</Link>
                        </div>
                    </li>
                    <li className='historyComments__bottom__item'>
                        <div className='historyComments__bottom__wrapper'>
                            <Link className='historyComments__bottom__link1'>4.8%</Link>
                            <Link className='historyComments__bottom__link2'>Engagement</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className='historyComments__lists__wrapper'>
            <ul className='historyComments__list'>
                <li className='historyComments__item'>
                    <Link className='historyComments__links'>Profile</Link>
                </li>
                <li className='historyComments__item'>
                    <Link className='historyComments__links active__historyComments__links'>Work History</Link>
                </li>
                <li className='historyComments__item'>
                    <Link className='historyComments__links'>Photos</Link>
                </li>
                <li className='historyComments__item'>
                    <Link className='historyComments__links'>Videos</Link>
                </li>
                <li className='historyComments__item'>
                    <Link className='historyComments__links'>Articals</Link>
                </li>
                <li className='historyComments__item'>
                    <Link className='historyComments__links'>Social Media</Link>
                </li>
                <li className='historyComments__item'>
                    <Link className='historyComments__links'>Equipment</Link>
                </li>
                <li className='historyComments__item'>
                    <Link className='historyComments__links'>Services</Link>
                </li>
            </ul>
        </div>

        <ul className='historyComments__info__lists'>
            <li className='historyComments__info__item'>
                <div className='historyComments__info__item__wrapper'>
                    <img className='historyComments__info__img' src={historyImg1} alt="" />
                    <div className='historyComments__info__lists__wrapper'>
                        <h3 className='historyComments__info__heading'>Service</h3>
                        <p className='historyComments__info__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent morbi lectus ullamcorper lectus massa tincidun... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent morbi lectus ullamcorper lectus.</p>
                    </div>
                </div>
            </li>
            <li className='historyComments__info__item'>
                <div className='historyComments__info__item__wrapper'>
                    <img className='historyComments__info__img' src={historyImg2} alt="" />
                    <div className='historyComments__info__lists__wrapper'>
                        <h3 className='historyComments__info__heading'>Service</h3>
                        <p className='historyComments__info__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent morbi lectus ullamcorper lectus massa tincidun... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent morbi lectus ullamcorper lectus.</p>
                    </div>
                </div>
            </li>
            <li className='historyComments__info__item'>
                <div className='historyComments__info__item__wrapper'>
                    <img className='historyComments__info__img' src={historyImg3} alt="" />
                    <div className='historyComments__info__lists__wrapper'>
                        <h3 className='historyComments__info__heading'>Service</h3>
                        <p className='historyComments__info__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent morbi lectus ullamcorper lectus massa tincidun... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent morbi lectus ullamcorper lectus.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default HistoryComments