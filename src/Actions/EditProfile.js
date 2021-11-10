import React, { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import axios from "axios";
import Registerpage from '../Style/Registerpage.css';


function EditProfile (props) {
  
    let path = window.location.href
    let userid = path.split('/:')[1];

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        imglink: "",
        password: "",
        password2: "",
    });

    const { name, username, email, phone, imglink, password, password2 } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUser();
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${userid}`, formData)
        props.history.push('/AllUsers/:' + userid)
    }


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${userid}`)
        setFormData(result.data);
    }

   

    return (
        <div className="register-text">
            <div className="register-card">
                <h1 className='large text-primary'>Edit Your Profile</h1>
                <form className='form' onSubmit={onSubmit}>
                    <div className='register-control'>
                        <label htmlFor="name" className="mx-2">Name: </label>
                        <input onChange={onChange} type='text' placeholder='Name' name='name' value={name} required />
                    </div>
                    <div className='register-control'>
                        <label htmlFor="username" className="mx-2">UserName</label>
                        <input onChange={onChange} type='text' placeholder='UserName' name='username' value={username} required />
                    </div>
                    <div className='register-control'>
                        <label htmlFor="email" className="mx-2">Email ID</label>
                        <input onChange={onChange} type='email' placeholder='Email Address' name='email' value={email} />
                    </div>
                    <div className='register-control'>
                        <label htmlFor="phone" className="mx-2">Phone Number</label>
                        <input type='phone' placeholder='Phone Number' name='phone' value={phone} onChange={onChange} />

                    </div>
                    <div className='register-control'>
                        <label htmlFor="imglink" className="mx-2">Profile Pic</label>
                        <input type='url' placeholder='Profile Image Link' name='imglink' value={imglink} onChange={onChange} />
                    </div>
                    <div className='register-control'>
                        <label htmlFor="password" className="mx-2">Password</label>
                        <input type='password' placeholder='Password' name='password' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" value={password} onChange={onChange} />
                    </div>
                    <button className="login-btn" type='submit' value='update' onChange={onChange} onClick={onSubmit} >Done</button>
            
                </form>
            </div>
        </div>
    )
}

export default EditProfile 
