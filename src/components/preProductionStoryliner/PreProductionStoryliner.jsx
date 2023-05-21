import React from 'react'
import "./PreProductionStoryliner.css"
import { Link } from 'react-router-dom'
import preham from "../../assets/images/preham.svg"
import predash from "../../assets/images/predash.svg"
import StorylinerCards from '../storylinerCards/StorylinerCards'

const PreProductionStoryliner = () => {
  return (
    <div className='preProductionStoryliner'>
        <div className='preProductionStoryline__container'>
            <div className='preProductionStoryliner__wrapper'>
                <p className="storyliner__text">Storyliner</p>
                <p className="storyliner__number">2934 results</p>
            </div>
            
            <div className="storyliner__info__wrapper">
                <ul className="storyliner__list">
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Location</Link>
                    </li>
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Price</Link>
                    </li>
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Language</Link>
                    </li>
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Likes</Link>
                    </li>
                </ul>

                <div className="storyliner__right__side">
                    <img className="storyliner__hamburger" src={preham} alt="" />
                    <img className="storyliner__dots" src={predash} alt="" />
                    <select className="storyliner__select">
                        <option>Sort By</option>
                    </select>
                </div>
            </div>
            <StorylinerCards />
        </div>
    </div>
  )
}

export default PreProductionStoryliner