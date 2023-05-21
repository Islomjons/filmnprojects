import React from 'react'
import "./SaveVideoSearch.css"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import RatingpreiconHero from "../../assets/images/pre.svg"
import SaveVideoSearchJson from "../../api/dummiy-data.preproductionSearch.json"

const SaveVideoSearch = () => {
  return (
    <div className='search2'>
    <div className='search__container2'>
        <div className='search__input__wrapper2'>
            <input className='search__input2' type="text" placeholder='Search'/>
        </div>

        <div className='search__production2'>
            <img className='search__production__icon2' src={RatingpreiconHero} alt="" />
            <p className='search__production__text2'>Pre-production</p>
        </div>

        <ul className='search__list2'>
            {
                SaveVideoSearchJson.map(searchJsons => 
                    <li className='search__item2' key={uuidv4()}>
                        <Link className='search__link2'>{searchJsons.preproductionSearchLInks}</Link>
                    </li>    
                )
            }
        </ul>
    </div>
    </div>
  )
}

export default SaveVideoSearch