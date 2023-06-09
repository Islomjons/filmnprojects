import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductionHero.css"
import productionHome from "../../assets/images/productionHome.svg"
import productionDashboard from "../../assets/images/productiondashboard.svg"
import productionProfile from "../../assets/images/productionprofile.svg"
import productionOrder from "../../assets/images/productionorder.svg"
import productionSms from "../../assets/images/productionsms.svg"
import productionsave from "../../assets/images/productionsave.svg"
import ProductionSearch from '../productionSearch/ProductionSearch'
import ProductionOperator from '../productionOperator/ProductionOperator'
import { AiOutlineRight } from "react-icons/ai"

const ProductionHero = ({setIsProductionNavigationActive}) => {
  return (
    <div className='productionhero'>
        <div className='container'>
            <div className='production__hero__container'>
                <div className='production__hero__wrapper__list'>
                    <ul className='production__hero__list'>
                        <li className='production__hero__item active__production__hero__item'>
                            <Link>
                                <img className='production__hero__img' src={productionHome} alt="" />
                            </Link>
                        </li>
                        <li className='production__hero__item'>
                            <Link to="/pay">
                                <img className='production__hero__img' src={productionDashboard} alt="" />
                            </Link>
                        </li>
                        <li className='production__hero__item'>
                            <Link to="/service">
                                <img className='production__hero__img' src={productionProfile} alt="" />
                            </Link>
                        </li>
                        <li className='production__hero__item'>
                            <Link>
                                <img className='production__hero__img' src={productionOrder} alt="" />
                            </Link>
                        </li>
                        <li className='production__hero__item'>
                            <Link to="/method">
                                <img className='production__hero__img' src={productionSms} alt="" />
                            </Link>
                        </li>
                        <li className='production__hero__item'>
                            <Link>
                                <img className='production__hero__img' src={productionsave} alt="" />
                            </Link>
                        </li>
                    </ul>

                    <button className='production__hero__btn' onClick={() => {setIsProductionNavigationActive(true)}}>
                        <AiOutlineRight className='production__hero__btn__icon' style={{cursor: "pointer"}}/>
                    </button>
                </div>
                <ProductionSearch />
                <ProductionOperator />
            </div>
        </div>
    </div>
  )
}

export default ProductionHero