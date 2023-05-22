import React from 'react'
import "./OrderHero.css"
import { Link } from 'react-router-dom'
import orderHerohomeLogo from "../../assets/images/preproductionhome.svg"
import orderHeroDashboard from "../../assets/images/preproductiondashboard.svg"
import orderHeroProfile from "../../assets/images/preproductionprofile.svg"
import orderHeroOrder from "../../assets/images/preproductionorder.svg"
import orderHeroSms from "../../assets/images/preproductionsms.svg"
import orderHeroSave from "../../assets/images/preproductionsave.svg"
import OrderPayment from '../orderPayment/OrderPayment'

const OrderHero = () => {
  return (
    <div className='heroo'>
        <div className='container'>
            <div className='hero__containero'>
                <ul className='hero__listo'>
                    <li className='hero__itemo active__hero__itemo'>
                        <Link>
                            <img className='hero__imgo' src={orderHerohomeLogo} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itemo'>
                        <Link>
                            <img className='hero__imgo' src={orderHeroDashboard} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itemo'>
                        <Link to="/details">
                            <img className='hero__imgo' src={orderHeroProfile} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itemo'>
                        <Link>
                            <img className='hero__imgo' src={orderHeroOrder} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itemo'>
                        <Link>
                            <img className='hero__imgo' src={orderHeroSms} alt="" />
                        </Link>
                    </li>
                    <li className='hero__itemo'>
                        <Link>
                            <img className='hero__imgo' src={orderHeroSave} alt="" />
                        </Link>
                    </li>
                </ul>
                <OrderPayment />
            </div>
        </div>
    </div>
  )
}

export default OrderHero