import { useAppSelector } from '../../../store/hooks'

import { useEffect, useState } from "react"
import axios from "axios"

const useFetchData = (pageNumber) => {

    const topic = useAppSelector(state => state.topic.current)

    const search = useAppSelector(state => state.search.query)

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        
        setData([])
    
    }, [topic, search])

    useEffect(() => {

        let preURL = ""
        let sufURL = ""

        if(search) {
            preURL = "https://api.unsplash.com/search/"
            sufURL = `&query=${search}`
        }
        else if(topic == "editorial") {
            preURL = "https://api.unsplash.com/"
        }
        else {
            preURL = `https://api.unsplash.com/topics/${topic}/`
        }

        setLoading(true)

        axios({
            method: "GET",
            url: preURL+`photos?page=${pageNumber}&client_id=6FwjynLcZYVVjDDvsN_Ls-2mWKJrAlirkzoBG00JioU&count=10`+sufURL
        })
            .then(res => {
                let result = search ? res.data.results : res.data 

                setData(prev => [...prev, ...result])
                setLoading(false)
            })
            .catch(err => setError(err))

    }, [pageNumber, topic, search])

    return { loading, error, data }
}

export default useFetchData