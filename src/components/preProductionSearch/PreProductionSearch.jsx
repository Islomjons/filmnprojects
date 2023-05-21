import React from 'react'
import "./PreProductionSearch.css"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import preiconHero from "../../assets/images/pre.svg"
import preproductionjson from "../../api/dummiy-data.preproductionSearch.json"

const PreProductionSearch = () => {
  return (
    <div className="preproduction">
        <div className="container">
            <div className="preproduction__container">
                <div className="preproductionSearch__input__wrapper">
                     <input className="preproductionSearch__input" type="text" placeholder="Search"/>
                </div>
                <div className="preproductionSearch__wrapper">
                    <img className="preproductionSearch__img" src={preiconHero} alt="" />
                    <p className="preproductionSearch__title">Pre-production</p>
                </div>

                <ul className="preproductions__list">
                    {
                        preproductionjson.map(searchs => 
                          <li className="preproductions__item" key={uuidv4()}>
                              <Link style={{textDecoration: "none"}}>
                                  <p className="preproductionSearch__links">{searchs.preproductionSearchLInks}</p>
                              </Link>
                          </li>  
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PreProductionSearch