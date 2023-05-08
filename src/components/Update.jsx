import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loaderUser = useLoaderData()
    console.log(loaderUser)
    const handelUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const user = { name, email }
        console.log(user)
        fetch(`http://localhost:5000/users/${loaderUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')
                    form.reset()
                }

            })

    }

    return (
        <div>
            <>
                <h1>Update Operations</h1>
                <form onSubmit={handelUpdate} >
                    <input type="text" name="name" defaultValue={loaderUser.name} id="" />
                    <br />
                    <input type="email" name="email" defaultValue={loaderUser.email} id="" />
                    <br />
                    <input type="submit" name="addUser" value="UpdateUser" />
                </form>
            </>
        </div>
    );
};

export default Update;