import React from 'react'
import "./HistoryHero.css"
import HistoryHerohomeLogo from "../../assets/images/preproductionhome.svg"
import HistoryHeroDashboard from "../../assets/images/preproductiondashboard.svg"
import HistoryHeroProfile from "../../assets/images/preproductionprofile.svg"
import HistoryHeroOrder from "../../assets/images/preproductionorder.svg"
import HistoryHeroSms from "../../assets/images/preproductionsms.svg"
import HistoryHeroSave from "../../assets/images/preproductionsave.svg"
import { Link } from 'react-router-dom'
import HistorySearch from '../historySearch/HistorySearch'
import HistoryPosts from '../historyPosts/HistoryPosts'
import { AiOutlineRight } from "react-icons/ai"

const HistoryHero = ({setIsHistoryNavigationActive}) => {
  return (
    <div className='historyHero'>
        <div className='container'>
            <div className='historyHero__container'>
                <div className='historyHero__list__wrapper'>
                    <ul className='historyHero__list'>
                        <li className='historyHero__item active__historyHero__item'>
                            <Link>
                                <img className='historyHero__img' src={HistoryHerohomeLogo} alt="" />
                            </Link>
                        </li>
                        <li className='historyHero__item'>
                            <Link>
                                <img className='historyHero__img' src={HistoryHeroDashboard} alt="" />
                            </Link>
                        </li>
                        <li className='historyHero__item'>
                            <Link>
                                <img className='historyHero__img' src={HistoryHeroProfile} alt="" />
                            </Link>
                        </li>
                        <li className='historyHero__item'>
                            <Link>
                                <img className='historyHero__img' src={HistoryHeroOrder} alt="" />
                            </Link>
                        </li>
                        <li className='historyHero__item'>
                            <Link>
                                <img className='historyHero__img' src={HistoryHeroSms} alt="" />
                            </Link>
                        </li>
                        <li className='historyHero__item'>
                            <Link>
                                <img className='historyHero__img' src={HistoryHeroSave} alt="" />
                            </Link>
                        </li>
                    </ul>

                    <button className='historyHero__btn' onClick={() => {setIsHistoryNavigationActive(true)}}>
                        <AiOutlineRight style={{color: "#fff"}}/>
                    </button>
                </div>
                <HistorySearch />
                <HistoryPosts />
            </div>
        </div>
    </div>
  )
}

export default HistoryHero