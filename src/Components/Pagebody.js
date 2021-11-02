import React, { Component } from "react";
import { Link } from "react-router-dom"
import Slideshow from "./Slideshow"

class Pagebody extends Component {
    constructor() {
        super()
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
        this.sendUserIdtoAlluserspage = this.sendUserIdtoAlluserspage.bind(this)
        this.sendUserIdtoEditpage = this.sendUserIdtoEditpage.bind(this)
    }

    openNav() {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("mainBody").style.marginLeft = "200px";
              
    }

    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("mainBody").style.marginLeft = "0";
    }

    sendUserIdtoAlluserspage() {
        const userId = this.props.userId;
        this.props.history.push("/AllUsers/:" + userId)
    }
    sendUserIdtoEditpage() {
        const userId = this.props.userId;
        this.props.history.push("/Editprofile/:" + userId)
    }

    render() {
        return (
            <div>
                <div id="mySidebar" className="sidebar">
                    <a href="#" className="closebtn" onClick={this.closeNav}>×</a>
                    <Link to="#" onClick={this.sendUserIdtoAlluserspage}>Users</Link>
                    <Link to="#" onClick={this.sendUserIdtoEditpage}>Profile</Link>
                    <Link to="/ProductsDisplay"></Link>
                </div>

                <div id="mainBody" className="mainBody">
                    <button className="openbtn" onClick={this.openNav}>☰</button>    
                    <Slideshow />                
                </div>
                <div>
                
                </div>
                
            </div>
        )
    }

}

export default Pagebody