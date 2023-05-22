import React from 'react'
import "./PaySearch.css"
import { v4 as uuidv4 } from "uuid"
import payPost from "../../assets/images/pre.svg"
import paySearchJson from "../../api/dummiy-data.postProductionLinks.json"
import { Link } from 'react-router-dom'

const PaySearch = () => {
  return (
<div className='searchs'>
    <div className='search__containers'>
        <div className='search__input__wrappers'>
            <input className='search__inputs' type="text" placeholder='Search'/>
        </div>

        <div className='search__production__wrappers'>
            <img className='search__production__imgs' src={payPost} alt="" />
            <p className='search__production__texts'>Pre-production</p>
        </div>

        <ul className='search__lists'>
            {
                paySearchJson.map(paySearchs => 
                    <li className='search__items' key={uuidv4()}>
                        <Link className='search__links'>{paySearchs.postSearchLinks}</Link>
                    </li>    
                )
            }
        </ul>
    </div>
</div>
  )
}

export default PaySearch