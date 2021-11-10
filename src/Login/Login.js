import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loginpage from '../Style/Loginpage.css'




function Login(props) {
    const [showError, setShowError] = useState(false)
    function onSubmit(e) {
        e.preventDefault();
        const userEmail = e.target.elements.userEmail.value;
        const userPassword = e.target.elements.userPassword.value;
        if (userEmail && userPassword) {
            try {
                let data = axios.get('http://localhost:3003/users/')
                    .then(res => {

                        let users = res.data;
                        users = users.filter(user => (user.email === userEmail && user.password === userPassword));
                        console.log(users);
                        if (users.length > 0) {
                            console.log("Valid login");
                            props.history.push('/Home/:' + users[0].id);
                        }
                        else {
                            setShowError(true)
                        }
                    })
            }

            catch (err) {
                console.log(err)
            }
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
                            <form onSubmit={onSubmit}>
                                <div className="login-control">
                                    <input type="email" name="userEmail" placeholder="username" required />
                                </div>
                                <div className="login-control">
                                    <input type="password" name="userPassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" placeholder="password" required />
                                </div>
                                <div className="login-action">
                                    <button type="submit" name="button" className="login-btn" >Login</button>
                                </div>
                            </form>
                            <div className="To-Register" >
                                Don't have an account? <Link to="/Register"><span class="text-decoration-none">Sign Up</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        export default Login










 // const userEmail = e.target.elements.userEmail.value
        // const userPassword = e.target.elements.userPassword.value;

        // let userdetails = props.userDetails
        // let user = userdetails.filter((userData) => userData.email === userEmail && userData.password === userPassword)
        // console.log(userdetails)
        // if (user) {
        //     console.log('loggedin' + user[0])
        //     // alert('logged in ')
        //     console.log(String(user[0].id))
        //     props.history.push('/UserProfile/:' + user[0].id)
        //     //   { <Redirect to=`/UserProfile/${String(res.data[0].id)}`  />}
        // }
        // else {
        //     alert('enter  valid details')
        // }






















// <div className="login-text" >
        //     <h1>Welcome Login Here </h1>
        //     <div className="login-card">
        //         <div className="login-com">
        //             <div >
        //                 {/* {showError && <p className="errorText">Invalid userEmail or Password, Try again!</p>} */}
        //             </div>
        //             <form >
        //                 <div className="login-control">
        //                     <input type="email" name="userEmail" placeholder="username" required />
        //                 </div>
        //                 <div className="login-control">
        //                     <input type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" placeholder="password" required />
        //                 </div>
        //                 <div className="login-action">
        //                     <button type="submit" name="button" className="login-btn" >Login</button>
        //                 </div>
        //             </form>
        //             <div className="To-Register" >
        //                 Don't have an account? <Link to="/Registerpage" className=""><span>Sign Up</span></Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>