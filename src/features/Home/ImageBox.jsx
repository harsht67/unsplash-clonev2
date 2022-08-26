import './ImageBox.scss'
import User from './User'

import { HiHeart, HiOutlinePlus } from 'react-icons/hi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { forwardRef } from 'react'

const ImageBox = forwardRef((props, ref) => {

    const { user, urls } = props.data

    return (
        <article className="ImageBox" ref={ref} >

            <header className="ImageBox__header">

                <User user={user} />

            </header>

            <img
                className="ImageBox__img"
                src={urls.small}
                alt="image"
            />

            <footer  className="ImageBox__footer">

                <div>
                    <HiHeart className="icons" />
                </div>

                <div>
                    <HiOutlinePlus className="icons" />
                </div>

                <div>
                    <span className="text">Download</span>
                    <MdOutlineKeyboardArrowDown className="icons"/>
                </div>


            </footer>

        </article>
    )
})

export default ImageBox