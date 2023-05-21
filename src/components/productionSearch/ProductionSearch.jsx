import React from 'react'
import "./ProductionSearch.css"
import productionYoutubes from "../../assets/images/youtube.svg"
import productionSearchJson from "../../api/dummiy-data.productionSearchLinks.json"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid"

const ProductionSearch = () => {
  return (
    <div className='productionsearch'>
        <div className='production__search__container'>
            <div className='production__search__input__wrapper'>
                <input className='production__search__input' type="text" placeholder='Search'/>
            </div>

            <div className='production__pre__wrapper'>
                <img className='production__pre__img' src={productionYoutubes} alt="" />
                <p className='production__pre__text'>production</p>
            </div>

            <ul className='production__search__list'>
                {
                    productionSearchJson.map(productionsSearch => 
                        <li className='productions__search__item' key={uuidv4()}>
                            <Link className='productions__search__link'>{productionsSearch.searchLinks}</Link>
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default ProductionSearch