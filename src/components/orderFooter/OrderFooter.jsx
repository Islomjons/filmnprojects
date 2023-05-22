import React from 'react'
import "./OrderFooter.css"
import { Link } from 'react-router-dom'
import orderFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import orderFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import orderFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import orderFooterTwitterLogo from "../../assets/images/footerTwitter.svg"

const OrderFooter = () => {
  return (
    <div className='footerc'>
    <div className='container'>
        <div className='footer__containerc'>
            <div className='footer__left__sidec'>
                <Link className='footer__logo__linkc'>
                    <img className='footer__logo__imgc' src={orderFooterLogo} alt="" />
                </Link>

                <ul className='footer__left__listc'>
                    <li className='footer__left__itemc'>
                        <Link className='footer__left__linkc'>
                            <img className='footer__left__iconc' src={orderFooterInstagramLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__itemc'>
                        <Link className='footer__left__linkc'>
                            <img className='footer__left__iconc' src={orderFooterFaceBookLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__itemc'>
                        <Link className='footer__left__linkc'>
                            <img className='footer__left__iconc' src={orderFooterTwitterLogo} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__sidec">
                <li className="footer__right__itemc">
                    <h3 className="footer__right__headingc">Buyers</h3>

                    <ul className="footer__right__listc">
                        <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">Buyers</Link>
                        </li>
                        <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemc">
                    <h3 className="footer__right__headingc">Sellers</h3>

                    <ul className="footer__right__listc">
                        <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">Seller</Link>
                        </li>
                        <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemc">
                    <h3 className="footer__right__headingc">Resources</h3>

                    <ul className="footer__right__listc">
                       <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">Blog</Link>
                        </li>
                        <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemc">
                    <h3 className="footer__right__headingc">About is</h3>

                    <ul className="footer__right__listc">
                       <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">Career</Link>
                        </li>
                        <li className="footer__right__itemc">
                          <Link className="footer__right__linkc">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottomc">
                <p className="footer__bottom__texct">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__textc">Terms and Conditions</p>
          </div>
    </div>
</div>
  )
}

export default OrderFooter