import User from "./User"
import yodlrAPI from "./API";
import { useState, useEffect } from "react";
import './UserList.css'

const UserList = () => {
    const [userList, setUserList] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
            const res = await yodlrAPI.getUsers();
            // console.log('user list', res)
            setUserList(res)
        }
        getUsers();
    }, [])

    if (!userList) return <p>Loading...</p>

    return (

        <div className="UserList">
              {userList.map(user => <User key={user.id} user={user}/>)}
        </div>

    )
}

export default UserList;