import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import SidebarPage from '../Style/SidebarPage.css';
import { Link } from 'react-router-dom';


function Sidebar(props) {

    let path = window.location.href
    let userid = path.split('/:')[1]

    const [users, setUser] = useState({
        imglink: ""
        
    });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${userid}`)
        setUser(result.data);
    }
    
    const userprofile = () => {
       
    }
    const allusers = () => {
        
    }


    return (
        <div className="sidebar-main-container bg-dark">
            <div className="sidebar-sec-container">
                <ul>             
                    <li><Link to={`/UserProfile/:${userid}`}><button type="submit" class="btn btn-primary btn-lg"  onClick={userprofile}>User Profile</button></Link></li>
                    <li name="all-users"><Link to={`/AllUsers/:${userid}`}><button type="submit" class="btn btn-primary btn-lg"  onClick={allusers}>All Users</button></Link></li>
                </ul>

            </div>

        </div>
    )
}

export default Sidebar
