import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Login from '../Login/Login'
import { Link } from 'react-router-dom';
import HomePge from '../Style/HomePage.css'


function Home(props) {

    let path = window.location.href
    let userid = path.split('/:')[1]

    const [users, setUser] = useState({
        username: "",
        imglink: ""
    });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${userid}`)
        setUser(result.data);
    }
  


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light " >
                <div class="container-fluid">
                    <div className="welcome-text">
                        <i class="navbar light">Welcome {users.username}</i>
                    </div>
                    <div className="img-sec">
                        <img src={users.imglink}  width="60" height="60"  class="rounded-circle"></img>
                    </div>
                    <div >
                        <div class="navbar-nav">
                            <Link to="/Login"><button class="justify-content-center" className="login-btn" >Logout</button></Link>
                        </div>
                    </div>

                </div>
            </nav>
            <div>
                <Sidebar />
            </div>

        </div>
    )
}

export default Home
