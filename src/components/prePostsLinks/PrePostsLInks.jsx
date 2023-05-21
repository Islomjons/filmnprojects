import React from 'react'
import "./PrePostsLInks.css"
import prePOstsJson from "../../api/dummiy-data.prePostsLink.json"
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid"

const PrePostsLInks = () => {
  return (
    <div className='prePostsLinks'>
        <div className='prePostsLinks__container'>
            <div className='prePostsLinks__container__wrapper'>
                <div className='prePostsLinks__left__side'>
                    <h3 className='prePostsLinks__left__heading'>About me</h3>
                    <p className='prePostsLinks__left__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus in viverra enim tortor vitae blandit vel eget. Turpis lacinia praesent tempus velit, morbi urna. Dui risus pellentesque tempor, adipiscing pharetra. Adipiscing et at elementum eget et.</p>
                </div>

                <div className='prePostsLinks__right__side'>
                    <h3 className='prePostsLinks__right__heading'>Skills</h3>

                    <ul className='prePostsLinks__right__list'>
                        {
                            prePOstsJson.map(prePosts => 
                              <li className='prePostsLinks__right__item' key={uuidv4()}>
                                <Link className='prePostsLinks__right__link'>{prePosts.postsLinksRight}</Link>
                              </li>  
                            )
                        }
                    </ul>
                </div>
            </div>

            <div className='postsLinks__main__wrapper'>
                <div className='postsLinks__main__left'>
                    <div className='postsLinks__main__left__wrapper'>
                        <p className='postsLinks__main__left__text'>Age:</p>
                        <p className='postsLinks__main__left__num'>23</p>
                    </div>
                    <div className='postsLinks__main__left__wrapper'>
                        <p className='postsLinks__main__left__text'>Status:</p>
                        <p className='postsLinks__main__left__num'>Single</p>
                    </div>
                    <div className='postsLinks__main__left__wrapper'>
                        <p className='postsLinks__main__left__text'>Location:</p>
                        <p className='postsLinks__main__left__num'>Dubai</p>
                    </div>
                </div>

                <div className='postsLinks__main__right'>
                    <h3 className='postsLinks__main__right__heading'>Personality</h3> 
                    <div className='postsLinks__main__right__list'>
                        {
                            prePOstsJson.map(postsRight => 
                                <div className='postsLinks__main__right__item' key={uuidv4()}>
                                    <Link className='postsLinks__main__right__link'>{postsRight.postsLinksRight}</Link>
                                </div>    
                            )
                        } 
                    </div>
                </div>
            </div>

            <div className='postsLinks__bottom__wrapper'>
                <h3 className='postsLinks__bottom__heading'>Goals</h3>

                <ul className='postsLinks__bottom__list'>
                    <li className='postsLinks__bottom__item'>Lorem ipsum</li>
                    <li className='postsLinks__bottom__item'>Dolor sit amet</li>
                    <li className='postsLinks__bottom__item'>Consectetur adipiscing</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PrePostsLInks