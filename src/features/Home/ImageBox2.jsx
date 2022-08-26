import './ImageBox2.scss'
import User from './User'

import { HiHeart, HiPlus, HiArrowDown } from 'react-icons/hi'
import { forwardRef } from 'react'

const ImageBox2 = forwardRef((props, ref) => {

    const {user, urls} = props.data

    return (
        <article className="ImageBox2" ref={ref}>

            <img
                className="ImageBox2__img"
                src={urls.small}
                alt="image"
            />

            <section className="ImageBox2__hover">

                <section>
                    
                    <div>
                        <HiHeart className="icons" />
                    </div>

                    <div>
                        <HiPlus  className="icons" />
                    </div>

                </section>

                <section>

                    <User user={user} />

                    <div>
                        <HiArrowDown  className="icons" />
                    </div>

                </section>

            </section>

        </article>
    )
})

export default ImageBox2