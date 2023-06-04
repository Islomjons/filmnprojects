import React from 'react'
import "./ProductionHeader.css"
import { Link } from 'react-router-dom'
import productionHeaderLogo from "../../assets/images/productionHeaderLogo.svg"
import productionPreIcon from "../../assets/images/productionPre.svg"
import productionYoutube from "../../assets/images/youtube.svg"
import productionPost from "../../assets/images/post.svg"
import { GiHamburgerMenu } from "react-icons/gi"

const ProductionHeader = () => {
  return (
    <div className='productionheader'>
        <div className='container'>
            <div className='production__container'>
                <Link className='production__logo__link' to="/">
                    <img className='production__header__logo' src={productionHeaderLogo} alt="" />
                </Link>

                <ul className='production__header__list'>
                    <li className='production__header__item'>
                        <Link className='production__header__link' to="/">
                            <img className='production__header__img' src={productionPreIcon} alt="" />
                            <p className='production__header__text active__production__header__text'>Pre-production</p>
                        </Link>
                    </li>
                    <li className='production__header__item active__production__header__item'>
                        <Link className='production__header__link'>
                            <img className='production__header__img' src={productionYoutube} alt="" />
                            <p className='production__header__text'>Production</p>
                        </Link>
                    </li>
                    <li className='production__header__item'>
                        <Link className='production__header__link' to="/postproduction">
                            <img className='production__header__img' src={productionPost} alt="" />
                            <p className='production__header__text active__production__header__text'>Post-production</p>
                        </Link>
                    </li>
                </ul>

                <button className='production__header__btn'>
                    <GiHamburgerMenu style={{width: "20px", height: "20px"}}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductionHeader