import './Login.css'
import logo from "../images/logo.png"
import Button from "../components/Button";
import React, { Component }  from 'react';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Login() {
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();

        const user_id = userRef.current.value;
        const pass = passwordRef.current.value;


        const $ = document;
        let login_message = $.querySelector('.fail-success');
        try {
            let data = await axios({
                // Endpoint to send files
                url: "http://127.0.0.1:3000/login",
                method: "POST",
                headers: {
                    // Add any auth token here
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:3001',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Content-Type': 'application/json',

                    //authorization: "your token comes here",
                },

                // Attaching the form data
                data: {
                    'user_id': user_id,
                    'password': pass
                },
            });

            data = data.data
            // Compare user info

            if (data.success) {
                console.log(data);
                if (data.body.userRole === 'itManagers'){
                    console.log("admin");
                    login_message.style.visibility = 'visible';
                    login_message.innerHTML = 'شما به عنوان ادمین با موفقیت وارد خواهد شد';
                    login_message.style.backgroundColor = 'green';

                    setTimeout(() => {
                        navigate('/admin');
                    }, 3500);

                } else if (data.body.userRole === 'student')
                    navigate('/student')
            } else {
                console.log('username of password is not correct');
                login_message.innerHTML = 'شماره کاربری یا رمز ورود اشتباه است.';
                login_message.style.backgroundColor = 'red';
                login_message.style.visibility = 'visible';
                setTimeout(() => {
                    login_message.style.visibility = 'hidden';
                }, 3500);
            }
        }catch (e) {
            console.log('username of password is not correct');
            login_message.innerHTML = 'شماره کاربری یا رمز ورود اشتباه است.';
            login_message.style.backgroundColor = 'red';
            login_message.style.visibility = 'visible';
            setTimeout(() => {
                login_message.style.visibility = 'hidden';
            }, 1000);
        }
    };

    return (
        <div>
            <form className="container" method="POST" onSubmit={handleSubmit}>
                <fieldset className="form-login">
                    <div className="header-login">
                        <h5>به نام خدا</h5>
                        <h2>دانشگاه شهید بهشتی</h2>
                        <img src={logo} alt="sbu logo" id="logo"/>
                        <h3>سامانه جامع دانشگاهی</h3>
                    </div>

                    <label>
                        <input name="user_id" placeholder="شناسه کاربری" ref={userRef} required/>
                    </label>

                    <label>
                        <input name="password" placeholder="گذرواژه" type="password" ref={passwordRef} required/>
                    </label>


                    <input type="submit" value="ورود"/>

                    <p className="fail-success"> </p>
                </fieldset>
            </form>
        </div>
)
}

