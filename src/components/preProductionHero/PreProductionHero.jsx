import React from 'react'
import "./PreProductionHero.css"
import { Link } from 'react-router-dom'
import preproductionhomeLogo from "../../assets/images/preproductionhome.svg"
import preproductionDashboard from "../../assets/images/preproductiondashboard.svg"
import preproductionProfile from "../../assets/images/preproductionprofile.svg"
import preproductionOrder from "../../assets/images/preproductionorder.svg"
import preproductionSms from "../../assets/images/preproductionsms.svg"
import preproductionSave from "../../assets/images/preproductionsave.svg"
import PreProductionSearch from '../preProductionSearch/PreProductionSearch'
import PreProductionStoryliner from '../preProductionStoryliner/PreProductionStoryliner'
import { AiOutlineCaretRight } from "react-icons/ai"

const PreProductionHero = ({setIsNAvigationActive}) => {
  return (
    <div className="preproduction__hero">
        <div className="container">
            <div className="preproduction__hero__container">
                <div className='preproduction__list__wrappers'>
                    <ul className="preproduction__list">
                        <li className="preproduction__item active__preproduction__item">
                            <Link>
                                <img className="preproduction__item__img" src={preproductionhomeLogo} alt="" />
                            </Link>
                        </li>
                        <li className="preproduction__item">
                            <Link to="/dashboard">
                                <img className="preproduction__item__img" src={preproductionDashboard} alt="" />
                            </Link>
                        </li>
                        <li className="preproduction__item">
                            <Link to="/preprofilepage">
                                <img className="preproduction__item__img" src={preproductionProfile} alt="" />
                            </Link>
                        </li>
                        <li className="preproduction__item">
                            <Link to="/rating">
                                <img className="preproduction__item__img" src={preproductionOrder} alt="" />
                            </Link>
                        </li>
                        <li className="preproduction__item">
                            <Link to="/details">
                                <img className="preproduction__item__img" src={preproductionSms} alt="" />
                            </Link>
                        </li>
                        <li className="preproduction__item">
                            <Link to="/savevideo">
                                <img className="preproduction__item__img" src={preproductionSave} alt="" />
                            </Link>
                        </li>
                    </ul>

                    <button className='preproduction__list__btn' onClick={() => {setIsNAvigationActive(true)}}>
                        <AiOutlineCaretRight />
                    </button>
                </div>

                <PreProductionSearch />
                <PreProductionStoryliner />
            </div>  
        </div>
    </div>
  )
}

export default PreProductionHero