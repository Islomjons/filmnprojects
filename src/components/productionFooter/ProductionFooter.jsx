import React from 'react'
import "./ProductionFooter.css"
import footerLogo from "../../assets/images/filmnWhoFooter.svg"
import footerInstagramIcon from "../../assets/images/footerInstagram.svg"
import footerfacebookIcon from "../../assets/images/footerFacebook.svg"
import footerTwitterIcon from "../../assets/images/footerTwitter.svg"
import { Link } from 'react-router-dom'

const ProductionFooter = () => {
  return (
    <div className='productionFooter'>
        <div className='container'>
            <div className='productionFooter__container'>
                <div className='productionFooter__left__side'>
                    <Link className='productionFooter__left__logo__link'>
                        <img className='productionFooter__left__logo' src={footerLogo} alt="" />
                    </Link>

                    <ul className='productionFooter__left__list'>
                        <li className='productionFooter__left__item'>
                            <Link>
                                <img className='productionFooter__left__img' src={footerInstagramIcon} alt="" />
                            </Link>
                        </li>
                        <li className='productionFooter__left__item'>
                            <Link>
                                <img className='productionFooter__left__img' src={footerfacebookIcon} alt="" />
                            </Link>
                        </li>
                        <li className='productionFooter__left__item'>
                            <Link>
                                <img className='productionFooter__left__img' src={footerTwitterIcon} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className='productionFooter__right__side'>
                    <li className='productionFooter__right__item'>
                         <h3 className="productionFooter__right__heading">Buyers</h3>

                         <ul className='productionFooter__right__list'>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">Buyers</Link>
                              </li>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">Buyers pricing</Link>
                              </li>
                         </ul>
                    </li>

                    <li className='productionFooter__right__item'>
                         <h3 className="productionFooter__right__heading">Sellers</h3>

                         <ul className='productionFooter__right__list'>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">Seller</Link>
                              </li>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">Sellers pricing</Link>
                              </li>
                         </ul>
                    </li>
                    <li className='productionFooter__right__item'>
                         <h3 className="productionFooter__right__heading">Resources</h3>

                         <ul className='productionFooter__right__list'>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">Blog</Link>
                              </li>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">FAQ</Link>
                              </li>
                         </ul>
                    </li>
                    <li className='productionFooter__right__item'>
                         <h3 className="productionFooter__right__heading">About is</h3>

                         <ul className='productionFooter__right__list'>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">Career</Link>
                              </li>
                              <li className='productionFooter__right__item'>
                                  <Link className="productionFooter__right__link">Contact us</Link>
                              </li>
                         </ul>
                    </li>
                </ul>
            </div>

         <div className="productionFooter__bottom">
            <p className="productionFooter__bottom__text">© filmnWho 2021. All rights reserved</p>
            <p className="productionFooter__bottom__text">Terms and Conditions</p>
        </div>
        </div>
    </div>
  )
}

export default ProductionFooter