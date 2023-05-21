import React from 'react'
import "./Photos.css"
import leftVectorIcon from "../../assets/images/leftVector.svg"
import SaveVideoPhoto from '../saveVideoPhoto/SaveVideoPhoto'

const Photos = () => {
  return (
    <div className='cards'>
    <div className='cards__container'>
        <div className='cards__wrapper__side'>
            <div className='cards__left__side'>
                <button className='cards__left__btn'>    
                    <img className='cards__left__icon' src={leftVectorIcon} alt="" />
                </button>
                <p className='cards__left__text'>Go back</p>
                <p className='cards__left__text1'>Storyliners</p>
            </div>

            <div className='cards__right__side'>
                <select className='cards__right__select'>
                    <option>Sort By</option>
                </select>
            </div>
        </div>
        <SaveVideoPhoto />
    </div>
</div>
  )
}

export default Photos