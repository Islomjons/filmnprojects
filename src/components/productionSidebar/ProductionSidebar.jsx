import React from 'react'
import "./ProductionSidebar.css"
import { FiX } from "react-icons/fi"

const ProductionSidebar = ({isProductionSidebarActive, setIsProductionSidebarActive}) => {
  return (
    <div className={isProductionSidebarActive === true ? "productionsidebar activeproductionsidebar" : "productionsidebar"}>
        <div className='productionISidebar__wrapper'>
            <FiX onClick={() => {setIsProductionSidebarActive(false)}}/>
        </div>
    </div>
  )
}

export default ProductionSidebar