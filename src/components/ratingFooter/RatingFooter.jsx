import React from 'react'
import "./RatingFooter.css"
import { Link } from 'react-router-dom'
import RatingProfileFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import RatingProfileFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import RatingProfileFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import RatingProfileFooterTwitterLogo from "../../assets/images/footerTwitter.svg"

const RatingFooter = () => {
  return (
    <div className='footer1'>
    <div className='container'>
        <div className='footer__container1'>
            <div className='footer__left__side1'>
                <Link className='footer__logo__link1'>
                    <img className='footer__logo__img1' src={RatingProfileFooterLogo} alt="" />
                </Link>

                <ul className='footer__left__list1'>
                    <li className='footer__left__item1'>
                        <Link className='footer__left__link1'>
                            <img className='footer__left__icon1' src={RatingProfileFooterInstagramLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item1'>
                        <Link className='footer__left__link1'>
                            <img className='footer__left__icon1' src={RatingProfileFooterFaceBookLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item1'>
                        <Link className='footer__left__link1'>
                            <img className='footer__left__icon1' src={RatingProfileFooterTwitterLogo} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__side1">
                <li className="footer__right__item1">
                    <h3 className="footer__right__heading1">Buyers</h3>

                    <ul className="footer__right__list1">
                        <li className="footer__right__item1">
                          <Link className="footer__right__link1">Buyers</Link>
                        </li>
                        <li className="footer__right__item1">
                          <Link className="footer__right__link1">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item1">
                    <h3 className="footer__right__heading1">Sellers</h3>

                    <ul className="footer__right__list1">
                        <li className="footer__right__item1">
                          <Link className="footer__right__link1">Seller</Link>
                        </li>
                        <li className="footer__right__item1">
                          <Link className="footer__right__link1">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item1">
                    <h3 className="footer__right__heading1">Resources</h3>

                    <ul className="footer__right__list1">
                       <li className="footer__right__item1">
                          <Link className="footer__right__link1">Blog</Link>
                        </li>
                        <li className="footer__right__item1">
                          <Link className="footer__right__link1">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item1">
                    <h3 className="footer__right__heading1">About is</h3>

                    <ul className="footer__right__list1">
                       <li className="footer__right__item1">
                          <Link className="footer__right__link1">Career</Link>
                        </li>
                        <li className="footer__right__item1">
                          <Link className="footer__right__link1">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottom1">
                <p className="footer__bottom__text1">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__text1">Terms and Conditions</p>
          </div>
    </div>
</div>
  )
}

export default RatingFooter