import React from 'react'
import "./DetailsFooter.css"
import { Link } from 'react-router-dom'
import DetailsfooterLogo from "../../assets/images/filmnWhoFooter.svg"
import DetailsfooterInstagramIcon from "../../assets/images/footerInstagram.svg"
import DetailsfooterfacebookIcon from "../../assets/images/footerFacebook.svg"
import DetailsfooterTwitterIcon from "../../assets/images/footerTwitter.svg"

const DetailsFooter = () => {
  return (
    <div className='footer7'>
    <div className='container'>
        <div className='footer__container7'>
            <div className='footer__left__side7'>
                <Link className='footer__logo__link7'>
                    <img className='footer__logo__img7' src={DetailsfooterLogo} alt="" />
                </Link>

                <ul className='footer__left__list7'>
                    <li className='footer__left__item7'>
                        <Link className='footer__left__link7'>
                            <img className='footer__left__icon7' src={DetailsfooterInstagramIcon} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item7'>
                        <Link className='footer__left__link7'>
                            <img className='footer__left__icon7' src={DetailsfooterfacebookIcon} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item7'>
                        <Link className='footer__left__link7'>
                            <img className='footer__left__icon7' src={DetailsfooterTwitterIcon} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__side7">
                <li className="footer__right__item7">
                    <h3 className="footer__right__heading7">Buyers</h3>

                    <ul className="footer__right__list7">
                        <li className="footer__right__item7">
                          <Link className="footer__right__link7">Buyers</Link>
                        </li>
                        <li className="footer__right__item7">
                          <Link className="footer__right__link7">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item7">
                    <h3 className="footer__right__heading7">Sellers</h3>

                    <ul className="footer__right__list7">
                        <li className="footer__right__item7">
                          <Link className="footer__right__link7">Seller</Link>
                        </li>
                        <li className="footer__right__item7">
                          <Link className="footer__right__link7">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item7">
                    <h3 className="footer__right__heading7">Resources</h3>

                    <ul className="footer__right__list7">
                       <li className="footer__right__item7">
                          <Link className="footer__right__link7">Blog</Link>
                        </li>
                        <li className="footer__right__item7">
                          <Link className="footer__right__link7">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item7">
                    <h3 className="footer__right__heading7">About is</h3>

                    <ul className="footer__right__list7">
                       <li className="footer__right__item7">
                          <Link className="footer__right__link7">Career</Link>
                        </li>
                        <li className="footer__right__item7">
                          <Link className="footer__right__link7">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottom7">
                <p className="footer__bottom__text7">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__text7">Terms and Conditions</p>
          </div>
    </div>
</div>
  )
}

export default DetailsFooter