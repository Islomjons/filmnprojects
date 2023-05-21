import React from 'react'
import "./DetailsSearch.css"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import detailsSearchPreHero from "../../assets/images/pre.svg"
import DetailsboardJson from "../../api/dummiy-data.preproductionSearch.json"

const DetailsSearch = () => {
  return (
    <div className='search0'>
        <div className='search__container0'>
            <div className='search__input__wrapper0'>
                <input className='search__input0' type="text" placeholder='Search'/>
            </div>

            <div className='search__production0'>
                <img className='search__production__icon0' src={detailsSearchPreHero} alt="" />
                <p className='search__production__text0'>Pre-production</p>
            </div>

            <ul className='search__list0'>
                {
                    DetailsboardJson.map(searchJsons => 
                        <li className='search__item0' key={uuidv4()}>
                            <Link className='search__link0'>{searchJsons.preproductionSearchLInks}</Link>
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default DetailsSearch