import React, { useState } from "react";
import Navbar from "./Navbar";
import UsercardDisplay from "./UsercardDisplay";

function Editprofile(props) {
    
    let path = window.location.href
    let pathUserId = path.split("/:")[1]
    const user = props.usersList.filter(userData => userData.id === parseInt(pathUserId))
    const [newFirstName, setNewFirstName] = useState(user[0].firstName)
    const [newLastName, setNewLastName] = useState(user[0].lastName)
    const [newProfileLink, setNewProfileLink] = useState(user[0].profileLink)
    const [newDescription, setNewDescription] = useState(user[0].description)
    const [showUpdateError, setShowUpdateError] = useState(false)
    
    function updateUserwithId(e) {
        e.preventDefault();
        if ((newFirstName === user[0].firstName) && (newLastName === user[0].lastName) && (newProfileLink === user[0].profileLink) && (newDescription === user[0].description)) {
            setShowUpdateError(true)
        }
        else if ((newFirstName === "") && (newLastName === "") && (newProfileLink === "") && (newDescription === "")) {
            setShowUpdateError(true)
            console.log("in else-if of update")
        }
        else {
            setShowUpdateError(false)
            console.log("in else of update")
            if (newFirstName === "") {
                setNewFirstName(user[0].firstName)
            }
            if (newLastName === "") {
                setNewLastName(user[0].lastName)
            }
            if (newProfileLink === "") {
                setNewProfileLink(user[0].profileLink)
            }
            if (newDescription === "") {
                setNewDescription(user[0].description)
            }
            const newUser = {
                id: user[0].id,
                userEmail: user[0].userEmail,
                password: user[0].password,
                firstName: newFirstName,
                lastName: newLastName,
                profileLink: newProfileLink,
                description: newDescription,
                todo_list: user[0].todo_list
            }
            props.onDeleteUserForUpdate(pathUserId)
            //props.onAddUser(newUser);
            console.log(props.usersList, "before going to welcome page")
            props.history.push("/Welcomepage/:" + newUser.id)
            console.log(props.usersList, "after welcomepage rendering")
        }
    }
    
    function deleteUserwithId() {
        props.onDeleteUser(pathUserId)
    }


    
    return (
        <div>
            <Navbar userId={pathUserId} usersList={props.usersList} history={props.history} />
            <div className="container mt-3 editpagebody">
                <h3>Update Profile</h3>
                <div className="row">

                    <div className="login-card">
                        <form >
                            <div className="login-control">
                                <label htmlFor="firstName" className="mx-2">First Name</label>
                                <input type="text" name="firstName" className="editFirstName" onChange={(e) => setNewFirstName(e.target.value)} onBlur={(e) => setNewFirstName(e.target.value)} placeholder={user[0].firstName} />
                            </div>
                            <div className="login-control">
                                <label htmlFor="lastName" className="mx-2">Last Name</label>
                                <input type="text" name="lastName" className="editLastName" onChange={(e) => setNewLastName(e.target.value)} onBlur={(e) => setNewLastName(e.target.value)} placeholder={user[0].lastName} />
                            </div>
                            <div className="login-control">
                                <label htmlFor="profileLink" className="mx-2">Profile Link</label>
                                <input type="text" name="profileLink" className="editProfileLink" onChange={(e) => setNewProfileLink(e.target.value)} onBlur={(e) => setNewProfileLink(e.target.value)} placeholder={user[0].profileLink} />
                            </div>
                            <div className="login-control">
                                <label htmlFor="description" className="mx-2">Description</label>
                                <input type="text" name="description" className="editDescription" onChange={(e) => setNewDescription(e.target.value)} onBlur={(e) => setNewDescription(e.target.value)} placeholder={user[0].description} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="login-btn" onClick={updateUserwithId}>Update</button>
                                <button type="submit" className="login-btn" onClick={deleteUserwithId}>Delete</button>
                                {showUpdateError && <p className="errorText mt-1 text-center">Please enter new data to update</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Editprofile

{/* <div className="col editcard">
<UsercardDisplay addTodoUser={props.addTodoUser} userData={user[0]} />
</div> */}





// import '../styles/LoginContainer.css';























// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';



// class Editprofile extends Component {
    
    //     constructor() {
        //         super();
        //         this.state = {
            //             loginuser: []
            //         }
            //         this.updateUser = this.updateUser.bind(this);
            //         this.deleteUser = this.deleteUser.bind(this);
            //         this.handleChange = this.handleChange.bind(this);
            //         this.strikeData = this.strikeData.bind(this);
            //     }

//     //Getting the logged user details using url path.
//     componentDidMount() {
//         let path = window.location.href;
//         path = Number(path.split("/")[4]);
//         let user = this.state.users.filter((user) => user.id === path);
//         console.log(user[0]);
//         this.setState({
//             loginuser: user[0]
//         });
//     }

//     //Onclick update button user details are updated with the below function.
//     updateUser(event) {
//         event.preventDefault();
//         console.log(this.state.loginuser);
//         let ack = document.getElementById("check").checked;
//         if (ack)
//             this.props.updateUser(this.state.loginuser);
//         else
//             alert("Please acknowledge, before updating....");
//     }

//     //Onclick delete, user is deleted
//     deleteUser(event) {
//         event.preventDefault();
//         let ack = document.getElementById("check").checked;
//         if (ack) {
//             this.props.delUser(this.state.loginuser);
//             this.props.history.push("/Login");
//         }
//         else
//             alert("Please, acknowledge before deleting..!");
//     }

//     //used for input tag changes
//     handleChange(event) {
//         console.log(event.target.value);
//         this.setState({
//             value: event.target.value
//         })
//     }

//     //this function is used for the striking the line with the help of checkbox.
//     strikeData(event) {
//         let x = document.getElementById("check").checked;
//         if (x === true) {
//             let data = document.getElementById("sample").innerText;
//             document.getElementById("sample").innerHTML = null;
//             document.getElementById("sample").innerHTML = data;
//         }
//         else {
//             let data = document.getElementById("sample").innerHTML;
//             document.getElementById("sample").innerHTML = "<strike>" + data + "</strike>";
//         }
//     }

//     render() {
//         return <div className="login-Container">
//             Welcome to profile
//             <form className="login-Container-form" name="profile">
//                 <div>
//                     <strong>Full Name:</strong>
//                     <input type="text" name="fullName" defaultValue={this.state.loginuser && this.state.loginuser.fullName} onChange={(e) => this.setState((state) => { this.state.loginuser.fullName = e.target.value })} required />
//                 </div>

//                 <div>
//                     <strong>Email:</strong>
//                     <input type="email" name="email" defaultValue={this.state.loginuser && this.state.loginuser.email} onChange={(e) => this.setState((state) => { this.state.loginuser.email = e.target.value })} required />
//                 </div>

//                 <div>
//                     <strong>User Name:</strong>
//                     <input type="text" name="userName" defaultValue={this.state.loginuser.userName} onChange={(e) => this.setState((state) => { this.state.loginuser.userName = e.target.value })} required />
//                 </div>

//                 <div>
//                     <strong>Password:</strong>
//                     <input type="password" name="password" defaultValue={this.state.loginuser.password} onChange={(e) => this.setState((state) => { this.state.loginuser.password = e.target.value })} required />
//                 </div>

//                 <div></div>

//                 <div>
//                     <button type="submit" onClick={this.updateUser}>Update</button>
//                 </div>

//                 <div>
//                     <Link to="/Login">
//                         <button type="submit" onClick={this.deleteUser} >Delete User</button>
//                     </Link>
//                 </div>

//             </form>
            
//         </div>;
//     }
// }

// export default Editprofile;