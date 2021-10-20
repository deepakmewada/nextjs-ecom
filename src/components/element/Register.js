import React, { useState, useContext } from 'react';
import axios from 'axios'
import { GlobalContext } from '../../context/GlobalContext';
import { setSessionCookie } from '../../utils/cookie';
import { toast } from 'react-toastify';

export default function Register({toggleModal}) {
    const [registerForm, setRegisterForm] = useState({email:"",password:""})
    const context = useContext(GlobalContext);
    const { userDispatch } = context.userContext;

const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({...registerForm, [name]: value})
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const res = await axios.post(`${process.env.BASE_URL}/user/register`, registerForm);
        console.log("sdaa", res.data)
        // setSessionCookie(res.headers['auth-token']);
        // localStorage.setItem('user',JSON.stringify(res.data.user))
        // userDispatch({
        //     type: 'store-user',
        //     payload: res.data.user
        // })
        toast.success("User Register Successfully", {autoClose: 3000});
        toggleModal(false)
    }catch(err){
        toast.error(err.response.data.errors, {autoClose: 3000});
    }
}

  return (
    <div className="modal-body">
        <div className="d-flex flex-column text-center">
            <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <input type="text" className="form-control" name="name" placeholder="Your name..." onChange={(e) => handleChange(e)} required minLength="6"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="Your email address..." onChange={(e) => handleChange(e)} required minLength="6"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Your password..." onChange={(e) => handleChange(e)} required minLength="6" />
            </div>
            <button className="btn btn-primary btn-full">Register</button>
            </form>
        </div>
    </div>
  );
}
