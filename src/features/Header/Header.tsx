import './Header.scss'
import HeaderRow1 from './HeaderRow1'
import HeaderRow2 from './HeaderRow2'

import { FC } from 'react'
import { useAppSelector } from '../../store/hooks'

const Header: FC = () => {

    const search = useAppSelector(state => state.search.query)

    return (
        <header className="Header sm-text">

            <HeaderRow1/>

            {!search && <HeaderRow2/>}

        </header>
    )
}

export default Header