import React from 'react'
import "./ServiceSearch.css"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import ServiceHeropreiconHero from "../../assets/images/pre.svg"
import ServiceHeroSearchJson from "../../api/dummiy-data.preproductionSearch.json"

const ServiceSearch = () => {
  return (
 <div className='search8'>
    <div className='search__container8'>
        <div className='search__input__wrapper8'>
            <input className='search__input8' type="text" placeholder='Search'/>
        </div>

        <div className='search__production__wrapper8'>
            <img className='search__production__img8' src={ServiceHeropreiconHero} alt="" />
            <p className='search__production__text8'>Pre-production</p>
        </div>

        <ul className='search__list8'>
            {
                ServiceHeroSearchJson.map(ServiceHero => 
                    <li className='search__item8' key={uuidv4()}>
                        <Link className='search__link8'>{ServiceHero.preproductionSearchLInks}</Link>
                    </li>    
                )
            }
        </ul>
    </div>
</div>
  )
}

export default ServiceSearch