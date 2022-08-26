import './SearchBar.scss'
import { searchUpdated } from '../../store/searchSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import { FC, useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineScan } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'

type func = () => void

const SearchBar: FC = () => {

    const search = useAppSelector(state => state.search.query)
    
    const dispatch = useAppDispatch()

    const [data, setData] = useState('')

    useEffect(() => {
        
        setData(search)
    
    }, [search])

    const [size, setSize] = useState(0)


    const updateSize: func = () => {
        let newSize = window.innerWidth
        
        setSize(newSize)
    }

    useEffect(() => {
        updateSize()

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)

    }, [])

    const changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        const newData = e.target.value 

        setData(newData)
    }

    const submitHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void = (e) => {
        if(e.key === 'Enter') {
            dispatch(searchUpdated(data))
        }
    }

    const clearSearchField: func = () => {
        setData('')
    }

    return (
        <div className="SearchBar">

            <AiOutlineSearch
                className="icons"
            />

            <input
                type="text"
                value={data}
                onChange={changeHandler}
                onKeyDown={submitHandler}
                placeholder={`Search ${size>=1200 ? "high-resolution " : ""}photos`}
            />

            {data &&
                <RiCloseFill
                    className="icons"
                    onClick={clearSearchField}
                />
            }

            <AiOutlineScan
                className="icons"
            />

        </div>
    )
}

export default SearchBar