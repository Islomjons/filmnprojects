import React from 'react'
import "./HistoryNavigation.css"
import { AiOutlineRight } from "react-icons/ai"
import { Link } from 'react-router-dom'
import HistoryHerohomeLogo from "../../assets/images/preproductionhome.svg"
import HistoryHeroDashboard from "../../assets/images/preproductiondashboard.svg"
import HistoryHeroProfile from "../../assets/images/preproductionprofile.svg"
import HistoryHeroOrder from "../../assets/images/preproductionorder.svg"
import HistoryHeroSms from "../../assets/images/preproductionsms.svg"
import HistoryHeroSave from "../../assets/images/preproductionsave.svg"

const HistoryNavigation = ({isHistoryNavigationActive, setIsHistoryNavigationActive}) => {
  return (
    <div className={isHistoryNavigationActive === true ? "historyNavigation historyNavigationActive" : "historyNavigation"}>
        <div className='historyNavigation__wrapper'>
            <AiOutlineRight className='historyNavigation__icon' onClick={() => {setIsHistoryNavigationActive(false)}}/>
        </div>

        <ul className='historyNavigation__list'>
            <li className='historyNavigation__item active__historyNavigation__item'>
                <Link>
                    <img className='historyNavigation__imgs' src={HistoryHerohomeLogo} alt="" />
                </Link>
            </li>
            <li className='historyNavigation__item'>
                <Link>
                    <img className='historyNavigation__imgs' src={HistoryHeroDashboard} alt="" />
                </Link>
            </li>
            <li className='historyNavigation__item'>
                <Link>
                    <img className='historyNavigation__imgs' src={HistoryHeroProfile} alt="" />
                </Link>
            </li>
            <li className='historyNavigation__item'>
                <Link>
                    <img className='historyNavigation__imgs' src={HistoryHeroOrder} alt="" />
                </Link>
            </li>
            <li className='historyNavigation__item'>
                <Link>
                    <img className='historyNavigation__imgs' src={HistoryHeroSms} alt="" />
                </Link>
            </li>
            <li className='historyNavigation__item'>
                <Link>
                    <img className='historyNavigation__imgs' src={HistoryHeroSave} alt="" />
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default HistoryNavigation