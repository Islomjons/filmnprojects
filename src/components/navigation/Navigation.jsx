import React from 'react'
import "./Navigation.css"
import { AiOutlineCaretRight } from "react-icons/ai"
import { Link } from 'react-router-dom'
import preproductionhomeLogo from "../../assets/images/preproductionhome.svg"
import preproductionDashboard from "../../assets/images/preproductiondashboard.svg"
import preproductionProfile from "../../assets/images/preproductionprofile.svg"
import preproductionOrder from "../../assets/images/preproductionorder.svg"
import preproductionSms from "../../assets/images/preproductionsms.svg"
import preproductionSave from "../../assets/images/preproductionsave.svg"

const Navigation = ({isNavigationActive, setIsNAvigationActive}) => {
  return (
    <div className={isNavigationActive === true ? "navigation activenavigation" : "navigation"}>
        <div className='navigation__wrapper'>
             <AiOutlineCaretRight className='navigation__icon' onClick={() => {setIsNAvigationActive(false)}}/>
        </div>

        <ul className='navigation__list'>
            <li className='navigation__item active__navigation__item'>
                <Link>
                    <img className='navigation__logo' src={preproductionhomeLogo} alt="" />
                </Link>
            </li>
            <li className='navigation__item'>
                <Link to="/dashboard">
                    <img className='navigation__logo' src={preproductionDashboard} alt="" />
                </Link>
            </li>
            <li className='navigation__item'>
                <Link to="/preprofilepage">
                    <img className='navigation__logo' src={preproductionProfile} alt="" />
                </Link>
            </li>
            <li className='navigation__item'>
                <Link to="/rating">
                    <img className='navigation__logo' src={preproductionOrder} alt="" />
                </Link>
            </li>
            <li className='navigation__item'>
                <Link to="/details">
                    <img className='navigation__logo' src={preproductionSms} alt="" />
                </Link>
            </li>
            <li className='navigation__item'>
                <Link to="/savevideo">
                    <img className='navigation__logo' src={preproductionSave} alt="" />
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation