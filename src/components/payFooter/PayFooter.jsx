import React from 'react'
import "./PayFooter.css"
import payFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import payFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import payFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import payFooterTwitterLogo from "../../assets/images/footerTwitter.svg"
import { Link } from 'react-router-dom'

const PayFooter = () => {
  return (
    <div className='footerr'>
    <div className='container'>
        <div className='footer__containerr'>
            <div className='footer__left__sider'>
                <Link className='footer__logo__linkr'>
                    <img className='footer__logo__imgr' src={payFooterLogo} alt="" />
                </Link>

                <ul className='footer__left__listr'>
                    <li className='footer__left__itemr'>
                        <Link className='footer__left__linkr'>
                            <img className='footer__left__iconr' src={payFooterInstagramLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__itemr'>
                        <Link className='footer__left__linkr'>
                            <img className='footer__left__iconr' src={payFooterFaceBookLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__itemr'>
                        <Link className='footer__left__linkr'>
                            <img className='footer__left__iconr' src={payFooterTwitterLogo} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__sider">
                <li className="footer__right__itemr">
                    <h3 className="footer__right__headingr">Buyers</h3>

                    <ul className="footer__right__listr">
                        <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">Buyers</Link>
                        </li>
                        <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemr">
                    <h3 className="footer__right__headingr">Sellers</h3>

                    <ul className="footer__right__listr">
                        <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">Seller</Link>
                        </li>
                        <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemr">
                    <h3 className="footer__right__headingr">Resources</h3>

                    <ul className="footer__right__listr">
                       <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">Blog</Link>
                        </li>
                        <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemr">
                    <h3 className="footer__right__headingr">About is</h3>

                    <ul className="footer__right__listr">
                       <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">Career</Link>
                        </li>
                        <li className="footer__right__itemr">
                          <Link className="footer__right__linkr">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottom">
                <p className="footer__bottom__text">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__text">Terms and Conditions</p>
          </div>
    </div>
</div>
  )
}

export default PayFooter