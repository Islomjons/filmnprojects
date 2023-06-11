import React from 'react'
import "./ProductionNavigation.css"
import { AiOutlineRight } from "react-icons/ai"
import { Link } from 'react-router-dom'
import productionHome from "../../assets/images/productionHome.svg"
import productionDashboard from "../../assets/images/productiondashboard.svg"
import productionProfile from "../../assets/images/productionprofile.svg"
import productionOrder from "../../assets/images/productionorder.svg"
import productionSms from "../../assets/images/productionsms.svg"
import productionsave from "../../assets/images/productionsave.svg"

const ProductionNavigation = ({isProductionNavigationActive, setIsProductionNavigationActive}) => {
  return (
    <div className={isProductionNavigationActive === true ? "productionnavigation activeproductionnavigation" : "productionnavigation"}>
        <div className='production__navigation__wrapper'>
            <AiOutlineRight className='productionNavigation__icon' onClick={() => {setIsProductionNavigationActive(false)}}/>
        </div>
        <ul className='production__navigation__list'>
            <li className='production__navigation__item active__production__navigation__item'>
                <Link to="/">
                    <img className='production__navigation__imgs' src={productionHome} alt="" />
                </Link>
            </li>
            <li className='production__navigation__item'>
                <Link to="/pay">
                    <img className='production__navigation__imgs' src={productionDashboard} alt="" />
                </Link>
            </li>
            <li className='production__navigation__item'>
                <Link to="/service">
                    <img className='production__navigation__imgs' src={productionProfile} alt="" />
                </Link>
            </li>
            <li className='production__navigation__item'>
                <Link>
                    <img className='production__navigation__imgs' src={productionOrder} alt="" />
                </Link>
            </li>
            <li className='production__navigation__item'>
                <Link to="/method">
                    <img className='production__navigation__imgs' src={productionSms} alt="" />
                </Link>
            </li>
            <li className='production__navigation__item'>
                <Link>
                    <img className='production__navigation__imgs' src={productionsave} alt="" />
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default ProductionNavigation