import React from 'react'
import "./HistoryFooter.css"
import historyFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import historyFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import historyFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import historyFooterTwitterLogo from "../../assets/images/footerTwitter.svg"
import { Link } from 'react-router-dom'

const HistoryFooter = () => {
  return (
    <div className='historyFooter'>
        <div className='container'>
            <div className='historyFooter__container'>
                <div className='historyFooter__left__side'>
                    <Link className='historyFooter__left__logo__link'>
                        <img className='historyFooter__left__logo' src={historyFooterLogo} alt="" />
                    </Link>

                    <ul className='historyFooter__left__list'>
                        <li className='historyFooter__left__item'>
                            <Link>
                                <img className='historyFooter__left__item__img' src={historyFooterInstagramLogo} alt="" />
                            </Link>
                        </li>
                        <li className='historyFooter__left__item'>
                            <Link>
                                <img className='historyFooter__left__item__img' src={historyFooterFaceBookLogo} alt="" />
                            </Link>
                        </li>
                        <li className='historyFooter__left__item'>
                            <Link>
                                <img className='historyFooter__left__item__img' src={historyFooterTwitterLogo} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className='historyFooter__right__side'>
                    <li className='historyFooter__right__item'>
                        <h3 className='historyFooter__right__heading'>Buyers</h3>

                        <ul className='historyFooter__right__list'>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>Buyers</Link>
                            </li>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>Buyers pricing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='historyFooter__right__item'>
                        <h3 className='historyFooter__right__heading'>Sellers</h3>

                        <ul className='historyFooter__right__list'>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>Seller</Link>
                            </li>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>Sellers pricing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='historyFooter__right__item'>
                        <h3 className='historyFooter__right__heading'>Resources</h3>

                        <ul className='historyFooter__right__list'>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>Blog</Link>
                            </li>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>FAQ</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='historyFooter__right__item'>
                        <h3 className='historyFooter__right__heading'>About is</h3>

                        <ul className='historyFooter__right__list'>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>Career</Link>
                            </li>
                            <li className='historyFooter__right__item'>
                                <Link className='historyFooter__right__link'>Contact us</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HistoryFooter