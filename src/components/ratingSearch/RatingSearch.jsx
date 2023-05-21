import React from 'react'
import "./RatingSearch.css"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import RatingpreiconHero from "../../assets/images/pre.svg"
import Ratingjson from "../../api/dummiy-data.preproductionSearch.json"

const RatingSearch = () => {
  return (
    <div className='search1'>
    <div className='search__container1'>
        <div className='search__input__wrapper1'>
            <input className='search__input1' type="text" placeholder='Search'/>
        </div>

        <div className='search__production1'>
            <img className='search__production__icon1' src={RatingpreiconHero} alt="" />
            <p className='search__production__text1'>Pre-production</p>
        </div>

        <ul className='search__list1'>
            {
                Ratingjson.map(searchees => 
                    <li className='search__item1' key={uuidv4()}>
                        <Link className='search__link1'>{searchees.preproductionSearchLInks}</Link>
                    </li>    
                )
            }
        </ul>
    </div>
</div>
  )
}

export default RatingSearch