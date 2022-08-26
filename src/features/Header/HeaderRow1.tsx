import './HeaderRow1.scss'
import { images } from '../../constants'
import SearchBar from './SearchBar'
import { searchCleared } from '../../store/searchSlice'
import { topicChanged } from '../../store/topicSlice'
import { useAppDispatch } from '../../store/hooks'

import { FC } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

type func = () => void 

const HeaderRow1: FC = () => {

    const dispatch = useAppDispatch()

    const goToHome: func = () => {
        dispatch(searchCleared())

        dispatch(topicChanged('editorial'))
    }

    return (
        <section className="HeaderRow1" >

            <img
                src={images.logo}
                alt="unsplash logo"
                className="HeaderRow1__logo"
                onClick={goToHome}
            />

            <SearchBar/>

            <nav className="HeaderRow1__nav">
            
                <ul className="ul-nav" >
            
                    <li>Explore</li>
            
                    <li>Advertise</li>
            
                    <li>Blog</li>
            
                </ul>
            
            </nav>

            <div className="HeaderRow1__register">

                <span>Log in</span> / <span>Sign up</span>
            
            </div>

            <button
                className="HeaderRow1__submitBtn sm-text"
            >
                Submit a photo
            </button>    


            <GiHamburgerMenu
                className="HeaderRow1__menuBtn"
            />

        </section>
    )
}

export default HeaderRow1