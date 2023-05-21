import React from 'react'
import "./PreProfileFooter.css"
import preProfileFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import preProfileFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import preProfileFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import preProfileFooterTwitterLogo from "../../assets/images/footerTwitter.svg"
import { Link } from 'react-router-dom'

const PreProfileFooter = () => {
  return (
    <div className='PreProfileFooter'>
        <div className='container'>
            <div className='PreProfileFooter__container'>
                <div className='PreProfileFooter__left__side'>
                    <Link className='PreProfileFooter__left__logo__link'>
                        <img className='PreProfileFooter__left__logo' src={preProfileFooterLogo} alt="" />
                    </Link>

                    <ul className='PreProfileFooter__left__list'>
                        <li className='PreProfileFooter__left__item'>
                            <Link>
                                <img className='PreProfileFooter__left__icon' src={preProfileFooterInstagramLogo} alt="" />
                            </Link>
                        </li>
                        <li className='PreProfileFooter__left__item'>
                            <Link>
                                <img className='PreProfileFooter__left__icon' src={preProfileFooterFaceBookLogo} alt="" />
                            </Link>
                        </li>
                        <li className='PreProfileFooter__left__item'>
                            <Link>
                                <img className='PreProfileFooter__left__icon' src={preProfileFooterTwitterLogo} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className='PreProfileFooter__right__side'>
                    <li className='PreProfileFooter__right__item'>
                        <h3 className="PreProfileFooter__right__heading">Buyers</h3>

                        <ul className='PreProfileFooter__right__list'>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>Buyers</Link>
                            </li>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>Buyers pricing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='PreProfileFooter__right__item'>
                        <h3 className="PreProfileFooter__right__heading">Sellers</h3>

                        <ul className='PreProfileFooter__right__list'>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>Seller</Link>
                            </li>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>Sellers pricing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='PreProfileFooter__right__item'>
                        <h3 className="PreProfileFooter__right__heading">Resources</h3>

                        <ul className='PreProfileFooter__right__list'>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>Blog</Link>
                            </li>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>FAQ</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='PreProfileFooter__right__item'>
                        <h3 className="PreProfileFooter__right__heading">About is</h3>

                        <ul className='PreProfileFooter__right__list'>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>Career</Link>
                            </li>
                            <li className='PreProfileFooter__right__item'>
                                <Link className='PreProfileFooter__right__link'>Contact us</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="PreProfileFooter__bottom">
                    <p className="PreProfileFooter__bottom__text">© filmnWho 2021. All rights reserved</p>
                    <p className="PreProfileFooter__bottom__text">Terms and Conditions</p>
              </div>
        </div>
    </div>
  )
}

export default PreProfileFooter