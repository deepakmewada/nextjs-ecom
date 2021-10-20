import React, { useState, useContext } from 'react';
import axios from 'axios'
import { GlobalContext } from '../../context/GlobalContext';
import { setSessionCookie } from '../../utils/cookie';
import { toast } from 'react-toastify';

export default function Login({toggleModal}) {
    const [loginForm, setLoginForm] = useState({email:"",password:""})
    const context = useContext(GlobalContext);
    const { userDispatch } = context.userContext;

const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({...loginForm, [name]: value})
}

const handleSubmit = async () => {
    try{
        const res = await axios.post(`${process.env.BASE_URL}/user/login`, loginForm);
        setSessionCookie(res.headers['auth-token']);
        localStorage.setItem('user',JSON.stringify(res.data.user))
        userDispatch({
            type: 'store-user',
            payload: res.data.user
        })
        toggleModal(false)
    }catch(err){
        toast.error(err.response.data.errors, {autoClose: 3000});
    }
}

  return (
    <div className="modal-body">
        <div className="d-flex flex-column text-center">
            <div className="form-group">
                <input type="email" className="form-control" name="email" value={loginForm.email} placeholder="Your email address..." onChange={(e) => handleChange(e)}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" name="password" value={loginForm.password} placeholder="Your password..." onChange={(e) => handleChange(e)} />
            </div>
            <button className="btn btn-primary btn-full" onClick={() => handleSubmit()}>Login</button>
        </div>
    </div>
  );
}
