import './WelcomeBox.scss'
import { images } from '../../constants'
import SearchBar from '../Header/SearchBar'

import { useSelector } from 'react-redux'

function WelcomeBox() {

    const search = useSelector(state => state.search.query)

    const topic = useSelector(state => state.topic.current)

    return search 
        ? <h1 className="WelcomeBoxSearch">
            {search}
        </h1> 
        : (
            <section 
                className="WelcomeBox"
                style={{backgroundImage: `linear-gradient(#0000001A, #0000001A), url(${images.bck})`}}
            >

                {topic == "editorial"
                    ?
                        <section className="WelcomeBox__main">

                            <h1 className="f3" >
                                Unsplash
                            </h1>

                            <p className="lg-text" >
                                The internet's source of freely-usable images.<br/> 
                                Powered by creators everywhere.
                            </p>

                            <SearchBar/>

                            <section>
                                <span>Trending: </span>
                                <a>flower, </a>
                                <a>wallpapers, </a>
                                <a>backgrounds, </a>
                                <a>happy, </a>
                                <a>love</a>
                            </section>

                        </section>
                    :
                        <section className='WelcomeBox__main2'>
                            
                            <h1 className="f3">
                                {topic.replace(/-/g, " ")}
                            </h1>

                        </section>
                }

                <footer className="WelcomeBox__footer">
                    
                    <small>
                        Photo by and machines
                    </small>

                    <small>
                        Read more about the Unsplash License
                    </small>

                </footer>


            </section>
        )
}

export default WelcomeBox