import './Home.scss'
import WelcomeBox from './WelcomeBox'
import ImageBox from './ImageBox'
import ImageBox2 from './ImageBox2'
import useFetchData from './hooks/useFetchData'

import { createElement, useEffect, useState, useRef, useCallback } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function Home() {

    const [pageNumber, setPageNumber] = useState(1)

    const [component, setComponent] = useState('')

    const { loading, error, data } = useFetchData(pageNumber)

    const observer = useRef()

    const lastElement = useCallback(elem => {
        if(loading) return 
        
        if(observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setPageNumber(prev => prev+1)
            }
        })

        if(elem) observer.current.observe(elem)

    }, [loading])

    const updateComponent = () => {

        window.innerWidth > 1200 
            ? setComponent("ImageBox2")
            : setComponent("ImageBox")

    }

    useEffect(() => {
        updateComponent()

        window.addEventListener("resize", updateComponent)

        return () => window.removeEventListener("resize", updateComponent)

    }, [])

    return (
        <div className="Home">

            <WelcomeBox/>

            <ResponsiveMasonry>
                <Masonry
                    className="Home__content"
                    columnsCount={3}
                    gutter="2rem"
                >

                    {data?.map((item, index) => {
                        if(data.length === index+1) {
                            return createElement(component=="ImageBox"?ImageBox:ImageBox2, {key: item.id, data: item, ref: lastElement})
                        }
                        else {
                            return createElement(component=="ImageBox"?ImageBox:ImageBox2, {key: item.id, data: item})
                        }
                    })}

                    { loading && 'Loading...' }

                    { error && 'Error!' }

                </Masonry>
            </ResponsiveMasonry>

        </div>
    )
}

export default Home