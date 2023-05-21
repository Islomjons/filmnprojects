import React from 'react'
import "./PostProductionFooter.css"
import PostProductionFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import PostProductionInstagramLogo from "../../assets/images/footerInstagram.svg"
import PostProductionFacebookLogo from "../../assets/images/footerFacebook.svg"
import PostProductionTwitterLogo from "../../assets/images/footerTwitter.svg"
import { Link } from 'react-router-dom'

const PostProductionFooter = () => {
  return (
    <div className='postProductionFooter'>
        <div className='container'>
            <div className='postProductionFooter__container'>
                <div className='postProductionFooter__left'>
                    <Link className='postProductionFooter__logo__link'>
                        <img className='postProductionFooter__logo' src={PostProductionFooterLogo} alt="" />
                    </Link>

                    <ul className='postProductionFooter__list'>
                        <li className='postProductionFooter__item'>
                            <Link>
                                <img className='postProductionFooter__left__icon' src={PostProductionInstagramLogo} alt="" />
                            </Link>
                        </li>
                        <li className='postProductionFooter__item'>
                            <Link>
                                <img className='postProductionFooter__left__icon' src={PostProductionFacebookLogo} alt="" />
                            </Link>
                        </li>
                        <li className='postProductionFooter__item'>
                            <Link>
                                <img className='postProductionFooter__left__icon' src={PostProductionTwitterLogo} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className='postProductionFooter__right'>
                    <li className='postProductionFooter__right__item'>
                        <h3 className='postProductionFooter__right__heading'>Buyers</h3>

                        <ul className='postProductionFooter__right__list'>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>Buyers</Link>
                            </li>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>Buyers pricing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='postProductionFooter__right__item'>
                        <h3 className='postProductionFooter__right__heading'>Sellers</h3>

                        <ul className='postProductionFooter__right__list'>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>Seller</Link>
                            </li>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>Sellers pricing pricing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='postProductionFooter__right__item'>
                        <h3 className='postProductionFooter__right__heading'>Resources</h3>

                        <ul className='postProductionFooter__right__list'>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>Blog</Link>
                            </li>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>FAQ</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='postProductionFooter__right__item'>
                        <h3 className='postProductionFooter__right__heading'>About is</h3>

                        <ul className='postProductionFooter__right__list'>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>Career</Link>
                            </li>
                            <li className='postProductionFooter__right__item'>
                                <Link className='postProductionFooter__right__link'>Contact us</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="postProductionFooter__bottom">
                <p className="postProductionFooter__bottom__text">© filmnWho 2021. All rights reserved</p>
                <p className="postProductionFooter__bottom__text">Terms and Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default PostProductionFooter