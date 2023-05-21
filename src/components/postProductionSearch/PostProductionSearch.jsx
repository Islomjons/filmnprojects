import React from 'react'
import "./PostProductionSearch.css"
import postPre from "../../assets/images/postpost.svg"
import postProductionSearchJson from "../../api/dummiy-data.postProductionLinks.json"
import { v4 as uuidv4 } from "uuid"
import { Link } from 'react-router-dom'

const PostProductionSearch = () => {
  return (
    <div className='postProductionSearch'>
        <div className='postProductionSearch__container'>
            <div className='postProductionSearch__input__wrapper'>
                <input className='postProductionSearch__input' type="text" placeholder='Search'/>
            </div>

            <div className='postProduction__wrapper'>
                <img className='postProduction__img' src={postPre} alt="" />
                <p className='postProduction__text'>post-production</p>
            </div>

            <ul className='postsProduction__list'>
                {
                    postProductionSearchJson.map(postProductions => 
                        <li className='postsProduction__item' key={uuidv4()}>
                            <Link className='postsProduction__link'>{postProductions.postSearchLinks}</Link>
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default PostProductionSearch