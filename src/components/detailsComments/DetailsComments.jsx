import React from 'react'
import "./DetailsComments.css"
import { Link } from 'react-router-dom'
import downIconn from "../../assets/images/downicon.svg"

const DetailsComments = () => {
  return (
    <div className='comments'>
        <div className='comments__container'>
            <h3 className='comments__heading'>Comments</h3>

            <ul className='comments__list'>
                <li className='comments__item'>
                    <h3 className='comments__name'>Name Name</h3>
                    <p className='comments__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus viverra consequat venenatis ut. Velit magna egestas leo.</p>
                </li>
                <li className='comments__item'>
                    <h3 className='comments__name'>Name Name</h3>
                    <p className='comments__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, imperdiet nisl velit. Tempor vel egestas vitae sodales. Tortor, nisl sed pellentesque phasellus massa odio. Sit in in ultricies porttitor tristique ipsum eleifend venenatis, sed..</p>
                </li>
                <li className='comments__item'>
                    <h3 className='comments__name'>Name Name</h3>
                    <p className='comments__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fames bibendum sit lorem scelerisque tellus integer. Diam, pulvinar vitae mauris scelerisque dolor nullam lorem enim mi. Feugiat quisque nibh cursus magna dis elementum porttitor aliquam egestas. Quis odio pretium id enim luctus.</p>
                </li>
                <li className='comments__item'>
                    <h3 className='comments__name'>Name Name</h3>
                    <p className='comments__text'>Some descriptions lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor maecenas enim, varius egestas massa id varius maecenas odio. Tortor donec nibh ullamcorper pretium. Purus, at imperdiet amet semper dolor. Quis malesuada adipiscing ut enim sit sit orci bibendum in. Ornare amet aliquam nunc, a, in scelerisque euismod duis. Pretium pharetra, enim blandit velit eu scelerisque massa cursus nisi. Tortor tellus hendrerit egestas tincidunt pellentesque risus ultricies euismod. </p>
                </li>
            </ul>
            
            <div className='comments__link__wrapper'>
                <Link className='comments__link'>See more
                     <img className='comments__link__img' src={downIconn} alt="" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default DetailsComments