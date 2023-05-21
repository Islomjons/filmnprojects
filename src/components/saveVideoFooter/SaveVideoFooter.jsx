import React from 'react'
import "./SaveVideoFooter.css"
import { Link } from 'react-router-dom'
import saveVideoFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import saveVideoFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import RatingProfileFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import saveVideoFooterTwitterLogo from "../../assets/images/footerTwitter.svg"

const SaveVideoFooter = () => {
  return (
    <div className='footer3'>
    <div className='container'>
        <div className='footer__container3'>
            <div className='footer__left__side3'>
                <Link className='footer__logo__link3'>
                    <img className='footer__logo__img3' src={saveVideoFooterLogo} alt="" />
                </Link>

                <ul className='footer__left__list3'>
                    <li className='footer__left__item3'>
                        <Link className='footer__left__link3'>
                            <img className='footer__left__icon3' src={saveVideoFooterInstagramLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item3'>
                        <Link className='footer__left__link3'>
                            <img className='footer__left__icon3' src={RatingProfileFooterFaceBookLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item3'>
                        <Link className='footer__left__link3'>
                            <img className='footer__left__icon3' src={saveVideoFooterTwitterLogo} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__side3">
                <li className="footer__right__item3">
                    <h3 className="footer__right__heading3">Buyers</h3>

                    <ul className="footer__right__list3">
                        <li className="footer__right__item3">
                          <Link className="footer__right__link3">Buyers</Link>
                        </li>
                        <li className="footer__right__item3">
                          <Link className="footer__right__link3">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item3">
                    <h3 className="footer__right__heading3">Sellers</h3>

                    <ul className="footer__right__list3">
                        <li className="footer__right__item3">
                          <Link className="footer__right__link3">Seller</Link>
                        </li>
                        <li className="footer__right__item3">
                          <Link className="footer__right__link3">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item3">
                    <h3 className="footer__right__heading3">Resources</h3>

                    <ul className="footer__right__list3">
                       <li className="footer__right__item3">
                          <Link className="footer__right__link3">Blog</Link>
                        </li>
                        <li className="footer__right__item3">
                          <Link className="footer__right__link3">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item3">
                    <h3 className="footer__right__heading3">About is</h3>

                    <ul className="footer__right__list3">
                       <li className="footer__right__item3">
                          <Link className="footer__right__link3">Career</Link>
                        </li>
                        <li className="footer__right__item3">
                          <Link className="footer__right__link3">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottom3">
                <p className="footer__bottom__text3">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__text3">Terms and Conditions</p>
          </div>
    </div>
</div>
  )
}

export default SaveVideoFooter