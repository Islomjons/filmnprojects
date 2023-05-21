import React from 'react'
import "./DashboardFooter.css"
import { Link } from 'react-router-dom'
import dashfooterLogo from "../../assets/images/filmnWhoFooter.svg"
import DashfooterInstagramIcon from "../../assets/images/footerInstagram.svg"
import DashfooterfacebookIcon from "../../assets/images/footerFacebook.svg"
import DashfooterTwitterIcon from "../../assets/images/footerTwitter.svg"

const DashboardFooter = () => {
  return (
    <div className='footer'>
    <div className='container'>
        <div className='footer__container'>
            <div className='footer__left__side'>
                <Link className='footer__logo__link'>
                    <img className='footer__logo__img' src={dashfooterLogo} alt="" />
                </Link>

                <ul className='footer__left__list'>
                    <li className='footer__left__item'>
                        <Link className='footer__left__link'>
                            <img className='footer__left__icon' src={DashfooterInstagramIcon} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item'>
                        <Link className='footer__left__link'>
                            <img className='footer__left__icon' src={DashfooterfacebookIcon} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__item'>
                        <Link className='footer__left__link'>
                            <img className='footer__left__icon' src={DashfooterTwitterIcon} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__side">
                <li className="footer__right__item">
                    <h3 className="footer__right__heading">Buyers</h3>

                    <ul className="footer__right__list">
                        <li className="footer__right__item">
                          <Link className="footer__right__link">Buyers</Link>
                        </li>
                        <li className="footer__right__item">
                          <Link className="footer__right__link">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item">
                    <h3 className="footer__right__heading">Sellers</h3>

                    <ul className="footer__right__list">
                        <li className="footer__right__item">
                          <Link className="footer__right__link">Seller</Link>
                        </li>
                        <li className="footer__right__item">
                          <Link className="footer__right__link">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item">
                    <h3 className="footer__right__heading">Resources</h3>

                    <ul className="footer__right__list">
                       <li className="footer__right__item">
                          <Link className="footer__right__link">Blog</Link>
                        </li>
                        <li className="footer__right__item">
                          <Link className="footer__right__link">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__item">
                    <h3 className="footer__right__heading">About is</h3>

                    <ul className="footer__right__list">
                       <li className="footer__right__item">
                          <Link className="footer__right__link">Career</Link>
                        </li>
                        <li className="footer__right__item">
                          <Link className="footer__right__link">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottom">
                <p className="footer__bottom__text">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__text1">Terms and Conditions</p>
          </div>
    </div>
</div>
  )
}

export default DashboardFooter