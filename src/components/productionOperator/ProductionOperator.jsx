import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductionOperator.css"
import ProductionOperatorHamicon from "../../assets/images/operationham.svg"
import ProductionOperatorDashicon from "../../assets/images/operationdash.svg"
import ProductionOperationCards from '../productionOperationCards/ProductionOperationCards'

const ProductionOperator = () => {
  return (
    <div className='productionoperator'>
        <div className='production__operator'>
            <div className='production__operator__wrapper'>
                <p className='production__operator__text'>Jib Crane Operator</p>
                <p className='production__operator__number'>2934 results</p>
            </div>

            <div className='production__operator__side__wrapper'>
                <ul className='production__operator__list'>
                    <li className='production__operator__item'>
                        <Link className='production__operator__link'>Location</Link>
                    </li>
                    <li className='production__operator__item'>
                        <Link className='production__operator__link'>Price</Link>
                    </li>
                    <li className='production__operator__item'>
                        <Link className='production__operator__link'>Language</Link>
                    </li>
                    <li className='production__operator__item'>
                        <Link className='production__operator__link'>Likes</Link>
                    </li>
                </ul>

                <div className='production__operator__right'>
                    <Link>
                       <img className='production__operator__right__img1' src={ProductionOperatorHamicon} alt="" />
                    </Link>
                    <Link>
                        <img className='production__operator__right__img2' src={ProductionOperatorDashicon} alt="" />
                    </Link>
                    <select className='production__operator__right__select'>
                        <option>Sort By</option>
                    </select>
                </div>
            </div>
            <ProductionOperationCards />
        </div>
    </div>
  )
}

export default ProductionOperator