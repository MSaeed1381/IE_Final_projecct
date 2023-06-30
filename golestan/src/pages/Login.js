import './Login.css'
import logo from "../images/logo.png"
import Button from "../components/Button";
import React, { Component }  from 'react';

export default function Login() {
    return (
        <div>
            <form className="container">
                <fieldset className="form">
                    <div className="header">
                        <h5>به نام خدا</h5>
                        <h2>دانشگاه شهید بهشتی</h2>
                        <img src={logo} alt="sbu logo" id="logo"/>
                        <h3>سامانه جامع دانشگاهی</h3>
                    </div>

                    <label>
                        <input name="user_id" placeholder="شناسه کاربری"/>
                    </label>

                    <label>
                        <input name="password" placeholder="گذرواژه" type="password"/>
                    </label>

                    <Button text="ورود" onClick={() => {}} disabled={false}/>
                </fieldset>
            </form>
        </div>
)
}