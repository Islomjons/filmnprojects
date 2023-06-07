import React from 'react'
import "./ProductionSidebar.css"
import { FiX } from "react-icons/fi"
import productionPreIcon from "../../assets/images/productionPre.svg"
import productionYoutube from "../../assets/images/youtube.svg"
import productionPost from "../../assets/images/post.svg"
import { Link } from 'react-router-dom'

const ProductionSidebar = ({isProductionSidebarActive, setIsProductionSidebarActive}) => {
  return (
    <div className={isProductionSidebarActive === true ? "productionsidebar activeproductionsidebar" : "productionsidebar"}>
        <div className='productionISidebar__wrapper'>
            <FiX style={{cursor: "pointer"}} onClick={() => {setIsProductionSidebarActive(false)}}/>
        </div>
        <ul className='productionSidebar__list'>
            <li className='productionSidebar__item'>
                <Link className='productionSidebar__link' to="/">
                    <img className='productionSiebar__icon' src={productionPreIcon} alt="" />
                    <p className='production__text active__production__text'>Pre-production</p>
                </Link>
            </li>
            <li className='productionSidebar__item active__productionSidebar__item'>
                <Link className='productionSidebar__link'>
                    <img className='productionSiebar__icon' src={productionYoutube} alt="" />
                    <p className='production__text'>Production</p>
                </Link>
            </li>
            <li className='productionSidebar__item'>
                <Link className='productionSidebar__link' to="/postproduction">
                    <img className='productionSiebar__icon' src={productionPost} alt="" />
                    <p className='production__text active__production__text'>Post-production</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default ProductionSidebar