import React from 'react'
import "./ProductionNavigation.css"
import { AiOutlineRight } from "react-icons/ai"

const ProductionNavigation = ({isProductionNavigationActive, setIsProductionNavigationActive}) => {
  return (
    <div className={isProductionNavigationActive === true ? "productionnavigation activeproductionnavigation" : "productionnavigation"}>
        <div className='production__navigation__wrapper'>
            <AiOutlineRight className='productionNavigation__icon' onClick={() => {setIsProductionNavigationActive(false)}}/>
        </div>
    </div>
  )
}

export default ProductionNavigation