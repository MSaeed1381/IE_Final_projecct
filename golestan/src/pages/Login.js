import './Login.css'
import logo from "../images/logo.png"
import Button from "../components/Button";
import React, { Component }  from 'react';
import {useRef} from 'react';

export default function Login() {
    const userRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (username, password) =>{
        const name = userRef.current.value;
        const pass = passwordRef.current.value;

        return name === username && pass === password;
    }

    const username = "1";
    const password = "1";

    return (
        <div>
            <form className="container">
                <fieldset className="form-login">
                    <div className="header-login">
                        <h5>به نام خدا</h5>
                        <h2>دانشگاه شهید بهشتی</h2>
                        <img src={logo} alt="sbu logo" id="logo"/>
                        <h3>سامانه جامع دانشگاهی</h3>
                    </div>

                    <label>
                        <input name="user_id" placeholder="شناسه کاربری" ref={userRef}/>
                    </label>

                    <label>
                        <input name="password" placeholder="گذرواژه" type="password" ref={passwordRef}/>
                    </label>


                    <Button text="ورود" path="/login" onclick={handleLogin}/>
                </fieldset>
            </form>
        </div>
)
}

