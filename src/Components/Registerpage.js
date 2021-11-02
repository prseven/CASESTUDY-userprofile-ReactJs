import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Register from '../styles/Register.css'

function Registerpage({ history, onAddUser }) {
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showEmailerror, setShowEmailError] = useState(false)
    const [showPassworderror, setShowPassworderror] = useState(false)
    const [showconfirmPassworderror, setShowConfirmPassworderror] = useState(false)

    function showMailError() {
        if (!validEmail.test(userEmail)) {
            setShowEmailError(true)
        }
    }
    function showPassError() {
        console.log(password)
        if (validPassword.test(password)) {
            setShowPassworderror(false)
        }
    }

    function showConfirmPassError() {
        console.log(confirmPassword)
        if (password !== confirmPassword) {
            setShowConfirmPassworderror(true)
        }
        else {
            setShowConfirmPassworderror(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const firstName = event.target.elements.firstName.value;
        const lastName = event.target.elements.lastName.value;
        const profileLink = event.target.elements.profileLink.value;
        const description = event.target.elements.description.value;
        if (!(password === confirmPassword)) {
            console.log("Password and Confirm password should be same");
            history.push("/Registerpage")

        }
        else {
            const newUser = {
                id: Number(new Date()),
                userEmail: userEmail,
                password: password,
                firstName: firstName,
                lastName: lastName,
                profileLink: profileLink,
                description: description,
                todo_list: []
            }
            onAddUser(newUser);
        }

    }

    return (
        <div className="register-text">
            <div className="register-card">
                <Title title={'Register here'} />
                <form className="" onSubmit={handleSubmit}>
                    <div className="register-control">
                        <label htmlFor="userEmail" className="mx-2">Email ID</label>
                        <input type="email" name="userEmail" onChange={(e) => setUserEmail(e.target.value)} onFocus={() => setShowEmailError(false)} onBlur={showMailError} placeholder="Mail ID" required />
                        {showEmailerror && <p className="errorText">Invaild email address</p>}
                    </div>
                    <div className="register-control">
                        <label htmlFor="password" className="mx-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} onFocus={() => setShowPassworderror(true)} onBlur={showPassError} required />
                        {showPassworderror && <p className="errorText">Minimum 8 charaters with atleast one uppercase, one lowercase, one special charater and a number</p>}
                    </div>
                    <div className="register-control">
                        <label htmlFor="confirmPassword" className="mx-2">Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} onBlur={showConfirmPassError} placeholder="Confirm Password" required />
                        {showconfirmPassworderror && <p className="errorText">Password and Confirm Password should be same</p>}
                    </div>
                    <div className="register-control">
                        <label htmlFor="firstName" className="mx-2">First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" required />
                    </div>
                    <div className="register-control">
                        <label htmlFor="lastName" className="mx-2">Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name" required />
                    </div>
                    <div className="register-control">
                        <label htmlFor="profileLink" className="mx-2">Upload Image</label>
                        <input type="text" name="profileLink" placeholder="Provide Image link" />
                    </div>
                    <div className="register-control">
                        <label htmlFor="description" className="mx-2">Description</label>
                        <input type="text" name="description" placeholder="add your description" required />
                    </div>
                    <button type="submit" className="login-btn">Submit</button>
                    <div className="to-login">
                        <p>Already existing User? <Link to="/Loginpage">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Registerpage