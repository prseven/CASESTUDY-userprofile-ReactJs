import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import UserProfilePage from '../Style/UserProfilePage.css';
import Home from './Home';

function UserProfile(props) {

    let path = window.location.href
    let userid = path.split('/:')[1]
    console.log(userid)
    const [users, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        imglink: "",
        password: "",
    });


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${userid}`)
        setUser(result.data);
    }

    const deleteUser = async userid => {
        await axios.delete(`http://localhost:3003/users/${userid}`)
        loadUsers();
        props.history.push('/login')
    }

    const UpdateUser = (userid) => {

        props.history.push('/UpdateUser/:' + userid)
    }



    return (

        <div className="main-container"  >
            <div>
                <Home />
            </div>
            <div className="user-main-div">
                <div className="user-img-div">
                    <img src={users.imglink} alt="Profile Image" className="profile-img"></img>
                </div>
                <div className="user-detail-div">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-4">
                            <label for="validationCustom01" class="form-label">Name</label>
                            <input type="text" class="form-control" id="validationCustom01" value={users.name} required />
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustomUsername" class="form-label">Username</label>
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" id="validationCustomUsername" value={users.username} aria-describedby="inputGroupPrepend" required />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="col-md-4">
                            <label for="validationCustom03" class="form-label">Email</label>
                            <input type="text" class="form-control" id="validationCustom03" value={users.email} required />
                        </div>
                        <div class="col-md-3">
                            <label for="validationCustom04" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="validationCustom03" value={users.phone} required />
                        </div>
                        <div class="col-md-3">
                            <label for="validationCustom05" class="form-label">Password</label>
                            <input type="password" class="form-control" id="validationCustom05" value={users.password} required />

                        </div>
                        <div class="col-12">
                        </div>
                    </form>

                </div>


            </div>

            <div className="buttons">

                <button className="login-btn" type='submit' value='update' onClick={() => UpdateUser(userid)}>Update</button>
                <button className="login-btn" type='submit' value='delete' onClick={() => deleteUser(userid)}>Delete</button>

            </div>




        </div>
    )
}

export default UserProfile














{/* <span class="input-group-text" onclick="password_show_hide();">
                            <i class="fas fa-eye" id="show_eye"></i>
                            <i class="fas fa-eye-slash d-none" id="hide_eye"></i>
                        </span> */}



 // function password_show_hide() {
    //     var x = document.getElementById("password");
    //     var show_eye = document.getElementById("show_eye");
    //     var hide_eye = document.getElementById("hide_eye");
    //     hide_eye.classList.remove("d-none");
    //     if (x.type === "password") {
    //       x.type = "text";
    //       show_eye.style.display = "none";
    //       hide_eye.style.display = "block";
    //     } else {
    //       x.type = "password";
    //       show_eye.style.display = "block";
    //       hide_eye.style.display = "none";
    //     }