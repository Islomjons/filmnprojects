import React from 'react'
import "./PreprofileSearch.css"
import preProfileSearchJson from "../../api/dummiy-data.preproductionSearch.json"
import preProfileHero from "../../assets/images/pre.svg"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid"

const PreprofileSearch = () => {
  return (
    <div className='preProfileSearch'>
        <div className='preProfileSearch__container'>
            <div className='preProfileSearch__input__wrapper'>
                <input className='preProfileSearch__input' type="text" placeholder='Search'/>
            </div>

            <div className='preProfileSearch__wrapper'>
                <img className='preProfileSearch__img' src={preProfileHero} alt="" />
                <p className='preProfileSearch__text'>Pre-production</p>
            </div>

            <ul className='preProfileSearch__list'>
                {
                    preProfileSearchJson.map(preProfiles => 
                        <li className='preProfileSearch__item' key={uuidv4()}>
                            <Link className='preProfileSearch__text__link'>{preProfiles.preproductionSearchLInks}</Link>
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default PreprofileSearch