import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link , useParams} from 'react-router-dom'
import EditProfile from '../Actions/EditProfile';



function AllUsers(props) {

    let path = window.location.href
    let userid = path.split('/:')[1]

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/`)
        setUser(result.data);
    }

    const deleteUser = async userid => {
        await axios.delete(`http://localhost:3003/users/${userid}`)
        loadUsers();
        props.history.push('/AllUsers/:' + userid)
    }

    const UpdateUser = (userid) => {
        props.history.push('/EditProfile/:' + userid)
    }

    const GoBack = (userid) => {
        props.history.push('/UserProfile/:' + userid)
    }


    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" className="btn btn-outline-light text-center" href="/AddUser">Add User</a>
            </nav>
            <br />
            <table class="table table-dark table-hover table-bordered">
                <thead class="thead secondary">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user => (
                        <tr>
                            <th>{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className="btn btn-secondary me-2" type='submit' value='update' onClick={() => UpdateUser(user.id)}>Edit</button>
                                <button class="btn btn-danger me-4" type='submit' value='delete' onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
            <div class="text-center">
                <button class="btn btn-primary " type='submit' value='GoBack' onClick={() => GoBack(userid)}>Go Back</button>

            </div>



        </div>
    )
}

export default AllUsers
