import React from 'react'
import "./MethodFooter.css"
import { Link } from 'react-router-dom'
import methodFooterLogo from "../../assets/images/filmnWhoFooter.svg"
import methodFooterInstagramLogo from "../../assets/images/footerInstagram.svg"
import methodFooterFaceBookLogo from "../../assets/images/footerFacebook.svg"
import methodFooterTwitterLogo from "../../assets/images/footerTwitter.svg"

const MethodFooter = () => {
  return (
    <div className='footerp'>
    <div className='container'>
        <div className='footer__containerp'>
            <div className='footer__left__sidep'>
                <Link className='footer__logo__linkp'>
                    <img className='footer__logo__imgp' src={methodFooterLogo} alt="" />
                </Link>

                <ul className='footer__left__listp'>
                    <li className='footer__left__itemp'>
                        <Link className='footer__left__linkp'>
                            <img className='footer__left__iconp' src={methodFooterInstagramLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__itemp'>
                        <Link className='footer__left__linkp'>
                            <img className='footer__left__iconp' src={methodFooterFaceBookLogo} alt="" />
                        </Link>
                    </li>
                    <li className='footer__left__itemp'>
                        <Link className='footer__left__linkp'>
                            <img className='footer__left__iconp' src={methodFooterTwitterLogo} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className="footer__right__sidep">
                <li className="footer__right__itemp">
                    <h3 className="footer__right__headingp">Buyers</h3>

                    <ul className="footer__right__listp">
                        <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">Buyers</Link>
                        </li>
                        <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">Buyers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemp">
                    <h3 className="footer__right__headingp">Sellers</h3>

                    <ul className="footer__right__listp">
                        <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">Seller</Link>
                        </li>
                        <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">Sellers pricing</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemp">
                    <h3 className="footer__right__headingp">Resources</h3>

                    <ul className="footer__right__listp">
                       <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">Blog</Link>
                        </li>
                        <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">FAQ</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer__right__itemp">
                    <h3 className="footer__right__headingp">About is</h3>

                    <ul className="footer__right__listp">
                       <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">Career</Link>
                        </li>
                        <li className="footer__right__itemp">
                          <Link className="footer__right__linkp">Contact us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
            <div className="footer__bottomp">
                <p className="footer__bottom__textp">© filmnWho 2021. All rights reserved</p>
                <p className="footer__bottom__textp">Terms and Conditions</p>
          </div>
    </div>
</div>
  )
}

export default MethodFooter