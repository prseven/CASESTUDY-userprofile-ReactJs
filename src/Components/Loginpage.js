import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from '../styles/Login.css'

function Loginpage({ usersList, history }) {

    const [showError, setShowError] = useState(false)
    function loginData(e) {
        e.preventDefault();
        const userEmail = e.target.elements.userEmail.value;
        const password = e.target.elements.password.value;
        const userData = usersList.filter(usersData => usersData.userEmail === userEmail && usersData.password === password)
        if (userData.length === 0) {
            setShowError(true)
        }
        else if (userData[0].userEmail && userData[0].password) {
            history.push('/Welcomepage/:' + userData[0].id);
        }
        else {
            setShowError(true)
        }
    }

    return (
        <div className="login-text" >
            <h1>Welcome Login Here </h1>
            <div className="login-card">
                <div className="login-com">
                    <div >
                        {showError && <p className="errorText">Invalid userEmail or Password, Try again!</p>}
                    </div>
                    <form onSubmit={loginData}>
                        <div className="login-control">
                            <input type="email" name="userEmail" placeholder="username" required />
                        </div>
                        <div className="login-control">
                            <input type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" placeholder="password" required />
                        </div>
                        <div className="login-action">
                            <button  type="submit" name="button" className="login-btn" >Login</button>
                        </div>
                    </form>
                    <div className="To-Register" >
                        Don't have an account? <Link to="/Registerpage" className=""><span>Sign Up</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage