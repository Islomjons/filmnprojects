import React from 'react'
import "./ServiceFooter.css"
import { Link } from 'react-router-dom'
import saveVideoFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import saveVideoFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import RatingProfileFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import saveVideoFooterTwitterLogo from "../../assets/images/footerTwitter.svg"

const ServiceFooter = () => {
  return (
    <div className='footer6'>
    <div className='container'>
        <div className='footer__container6'>
            <div className='footer__left__side6'>
                <Link className='footer__logo__link6'>
                    <img className='footer__logo__img6' src={saveVideoFooterLogo} alt="" />
                </Link>

                <ul className='footer__left__list6'>
                    <li className='footer__left__item6'>
                        <Link className='footer__left__link6'>
                            <img className='footer__left__icon6' src={saveVideoFooterInstagramLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item6'>
                        <Link className='footer__left__link6'>
                            <img className='footer__left__icon6' src={RatingProfileFooterFaceBookLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item6'>
                        <Link className='footer__left__link6'>
                            <img className='footer__left__icon6' src={saveVideoFooterTwitterLogo} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__side6">
                <li className="footer__right__item6">
                    <h3 className="footer__right__heading6">Buyers</h3>

                    <ul className="footer__right__list6">
                        <li className="footer__right__item6">
                          <Link className="footer__right__link6">Buyers</Link>
                        </li>
                        <li className="footer__right__item6">
                          <Link className="footer__right__link6">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item6">
                    <h3 className="footer__right__heading6">Sellers</h3>

                    <ul className="footer__right__list6">
                        <li className="footer__right__item6">
                          <Link className="footer__right__link6">Seller</Link>
                        </li>
                        <li className="footer__right__item6">
                          <Link className="footer__right__link6">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item6">
                    <h3 className="footer__right__heading6">Resources</h3>

                    <ul className="footer__right__list6">
                       <li className="footer__right__item6">
                          <Link className="footer__right__link6">Blog</Link>
                        </li>
                        <li className="footer__right__item6">
                          <Link className="footer__right__link6">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item6">
                    <h3 className="footer__right__heading6">About is</h3>

                    <ul className="footer__right__list6">
                       <li className="footer__right__item6">
                          <Link className="footer__right__link6">Career</Link>
                        </li>
                        <li className="footer__right__item6">
                          <Link className="footer__right__link6">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottom6">
                <p className="footer__bottom__text6">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__text6">Terms and Conditions</p>
          </div>
    </div>
    </div>
  )
}

export default ServiceFooter