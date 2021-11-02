import React, { Component } from "react";
import NavbarStyle from '../styles/NavbarStyle.css';

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this);
    }

    logout() {
        let history = this.props.history;
        history.push("/");
    }

    render() {
        const user = this.props.usersList.filter(userData => userData.id === parseInt(this.props.userId))
        return (
            <div>
                <nav className="navbar narbar-light bg-light">
                    <div className="container-fluid">
                        <h4 >Welcome {user[0].firstName} {user[0].lastName} </h4>
                        <button type="submit" className="login-btn" onClick={this.logout}>Logout</button>
                    </div>
                </nav>
            </div >
        )
    }
}

export default Navbar