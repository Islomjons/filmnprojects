import React from 'react'
import { Link } from 'react-router-dom'
import "./DashboardCrads.css"
import dashCardsImg1 from "../../assets/images/cards1.png"
import dashCardsImg2 from "../../assets/images/cards2.png"
import dashCardsImg3 from "../../assets/images/cards3.png"
import dashCardsImg4 from "../../assets/images/cards4.png"
import dashCardsImg5 from "../../assets/images/cards5.png"
import dashCardsImg6 from "../../assets/images/cards6.png"

const DashboardCrads = () => {
  return (
    <div className='dashboardCards'>
        <div className='dashboardCards__container'>
            <ul className='dashboardCards__list'>
                <li className='dashboardCards__item'>
                    <Link>
                        <img className='dashboardCards__img' src={dashCardsImg1} alt="" />
                    </Link>
                </li>
                <li className='dashboardCards__item'>
                    <Link>
                        <img className='dashboardCards__img' src={dashCardsImg2} alt="" />
                    </Link>
                </li>
                <li className='dashboardCards__item'>
                    <Link>
                        <img className='dashboardCards__img' src={dashCardsImg3} alt="" />
                    </Link>
                </li>
                <li className='dashboardCards__item'>
                    <Link>
                        <img className='dashboardCards__img' src={dashCardsImg4} alt="" />
                    </Link>
                </li>
                <li className='dashboardCards__item'>
                    <Link>
                        <img className='dashboardCards__img' src={dashCardsImg5} alt="" />
                    </Link>
                </li>
                <li className='dashboardCards__item'>
                    <Link>
                        <img className='dashboardCards__img' src={dashCardsImg6} alt="" />
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DashboardCrads