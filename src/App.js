// import logo from './logo.svg';
import './App.css';
import Register from './Login/Register'
import Login from './Login/Login';
import UserProfile from './Profile/UserProfile';
import { Link, Route, Switch, Router } from 'react-router-dom';
import AllUsers from './Profile/AllUsers';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import UpdateUser from './Actions/UpdateUser';
import Home from './Profile/Home';
import axios from 'axios';
import {useState} from 'react'
import AddUser from './Actions/AddUser';
import EditProfile from './Actions/EditProfile';

function App() {
 const [userDetails, setuserDetails] =  useState();
 let path = window.location.href
 let userid = path.split('/:')[1]

  // axios.get('http://localhost:3003/users/')
  // .then(res => {
  //     //console.log(res.data) 
  //     setuserDetails(res.data)
  // })

  return (
    <div>

      <Switch>
        <Route path="/" exact render={({ history }) => (
          <div>
            <Login history = {history} />
          </div>
        )} />
        <Route path="/Login" render={({ history }) => (
                    <Login history = {history}  userDetails = {userDetails}/>
                )} />
        <Route path="/Register" render={({ history }) => (
          <Register history = {history} />
        )}/>
        <Route path="/Home" render={({history}) => (
          <Home history = {history}/>
        )}/>
        <Route path="/UserProfile" render={({history}) => (
          <UserProfile history = {history}/>
        )}/>
        <Route path="/UpdateUser" render={({history}) => (
          <UpdateUser history = {history} />
        )}/>
        
        <Route path="/AllUsers" render={({history}) => (
          <AllUsers history = {history}/>
        )}/>
        <Route path="/AddUser" render={({history}) => (
          <AddUser history = {history}/>
        )}/>
        <Route path={`/EditProfile`} render={({history}) => (
          <EditProfile history = {history}/>
        )}/>
        
      </Switch>


    </div>





  );
}

export default App;
