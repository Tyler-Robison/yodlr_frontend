import './User.css'

const User = ({ user }) => {
    return <div className='User' >
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
    </div>
}

export default User;