import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loaderUsers = useLoaderData()
    const [users, setUsers] = useState(loaderUsers)
    const handelDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert(`delete item successfully`)
                    const remain = users.filter(user => user._id !== _id)
                    setUsers(remain)
                }
            })
    }
    return (
        <div>
            <h1>{users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.name}:{user.email}{user._id} <Link to={`/update/${user._id}`} ><button >Update</button></Link> <button onClick={() => handelDelete(user._id)} >X</button></p>

                )
            }
        </div>
    );
};

export default Users;