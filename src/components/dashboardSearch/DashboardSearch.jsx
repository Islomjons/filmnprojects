import React from 'react'
import "./DashboardSearch.css"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import DashPreHero from "../../assets/images/pre.svg"
import dashboardJson from "../../api/dummiy-data.preproductionSearch.json"

const DashboardSearch = () => {
  return (
    <div className='search'>
        <div className='search__container'>
            <div className='search__input__wrapper'>
                <input className='search__input' type="text" placeholder='Search'/>
            </div>
            <div className='search__production__wrapper'>
                <img className='search__production__icon' src={DashPreHero} alt="" />
                <p className='search__production__text'>Pre-production</p>
            </div>

            <ul className='search__list'>
                {
                    dashboardJson.map(searches => 
                        <li className='search__item' key={uuidv4()}>
                            <Link className='search__item__link'>{searches.preproductionSearchLInks}</Link>
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default DashboardSearch