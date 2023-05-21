import React from 'react'
import "./HistorySearch.css"
import { v4 as uuidv4 } from "uuid"
import historyPost from "../../assets/images/pre.svg"
import historySearchJson from "../../api/dummiy-data.postProductionLinks.json"
import { Link } from 'react-router-dom'

const HistorySearch = () => {
  return (
    <div className='historySearch'>
        <div className='historySearch__container'>
            <div className='historySearch__input__wrapper'>
                <input className='historySearch__input' type="text" placeholder='Search'/>
            </div>
            <div className='historySearch__wrapper'>
                <img className='historySearch__img' src={historyPost} alt="" />
                <p className='historySearch__text'>post-production</p>
            </div>

            <ul className='historySearch__list'>
                {
                    historySearchJson.map(historySearchs => 
                        <li className='historySearch__item' key={uuidv4()}>
                            <Link className='historySearch__link'>{historySearchs.postSearchLinks}</Link>
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default HistorySearch