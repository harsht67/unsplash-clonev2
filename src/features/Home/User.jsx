import './User.scss'

function User({user}) {
    return (
        <div className="User text">

            <img
                src={user.profile_image.small} 
                alt="user image"
            />

            <span>
                {user.name}
            </span>

        </div>
    )
}

export default User